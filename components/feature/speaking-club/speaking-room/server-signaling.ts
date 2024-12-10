import { Socket } from "socket.io-client";

export const serverSignaling = async (
    peerConnection: RTCPeerConnection,
    roomId: string,
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
            socket.emit("answer", { answer, roomId }); // Emit the answer to the server
            console.log("Sent answer:", answer);
        } catch (error) {
            console.error("Error handling offer:", error);
        }
    });

    // Listen for incoming answers (when the remote peer responds)
    socket.on("answer", async ({ answer }) => {
        console.log("Received answer:", answer);

        // Set remote description (answer from peer)
        await peerConnection.setRemoteDescription(
            new RTCSessionDescription(answer)
        );
    });

    // Listen for incoming ICE candidates
    socket.on("iceCandidate", async ({ candidate, roomId }) => {
        console.log("Received ICE Candidate for room:", roomId, candidate);

        // Add ICE candidate to peer connection
        if (candidate) {
            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        }
    });
};
