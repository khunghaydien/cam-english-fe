import { Socket } from "socket.io-client";

export const serverSignaling = async (
    peerConnection: RTCPeerConnection,
    socket: Socket
): Promise<void> => {
    // Listen for incoming offers
    socket.on("offer", async ({ offer }) => {
        try {
            console.log("Received offer:", offer);
            await peerConnection.setRemoteDescription(
                new RTCSessionDescription(offer)
            );
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            socket.emit("answer", { answer }); // Emit the answer to the server
            console.log("Sent answer:", answer);
        } catch (error) {
            console.error("Error handling offer:", error);
        }
    });

    // Listen for incoming answers (when the remote peer responds)
    socket.on("answer", async ({ answer }) => {
        try {
            console.log("Received answer:", answer);
            if (peerConnection.signalingState === "have-local-offer") {
                await peerConnection.setRemoteDescription(
                    new RTCSessionDescription(answer)
                );
            } else {
                console.warn(
                    `Cannot set remote answer SDP in state: ${peerConnection.signalingState}`
                );
            }
        } catch (error) {
            console.error("Error setting remote description for answer:", error);
        }
    });

    // Listen for incoming ICE candidates
    socket.on("iceCandidate", async ({ candidate }) => {
        console.log("Received ICE Candidate for room:", candidate);
        if (candidate) {
            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        }
    });

    socket.on("disconnected", async ({ user }) => {
        console.log("User disconnected...", user.name);
    })
};
