import { Socket } from "socket.io-client";

// Send an offer to the server
export const sendOffer = async (
    peerConnection: RTCPeerConnection,
    roomId: string,
    socket: Socket
): Promise<void> => {
    try {
        // Step 1: Create the offer
        const offer = await peerConnection.createOffer();
        // Step 2: Set the local description (offer)
        await peerConnection.setLocalDescription(offer);
        // Step 3: Emit the offer to the server
        socket.emit("offer", { offer, roomId });
        console.log("Sent offer:", offer);
    } catch (error) {
        console.error("Error sending offer:", error);
    }
};