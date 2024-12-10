import { Socket } from "socket.io-client";
// Send an offer to the server
export const sendOfferToServer = async (
  peerConnection: RTCPeerConnection,
  roomId: string,
  socket: Socket
): Promise<void> => {
  try {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("offer", { offer, roomId });
  } catch (error) {
    console.error("Error sending offer:", error);
  }
};
