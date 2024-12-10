import { Socket } from "socket.io-client";
export const signalingServerAction = async (
  peerConnection: RTCPeerConnection,
  roomId: string,
  socket: Socket
): Promise<void> => {
  // Listen for incoming offers
  socket.on("offer", async ({ offer }) => {
    try {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(offer)
      );
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit("answer", { answer, roomId });
    } catch (error) {
      console.error("Error handling offer:", error);
    }
  });

  // Listen for incoming answers
  socket.on("answer", async ({ answer }) => {
    // Set remote description
    await peerConnection.setRemoteDescription(
      new RTCSessionDescription(answer)
    );
  });

  // Listen for incoming ICE candidates
  socket.on("iceCandidate", async ({ candidate }) => {
    // Add ICE candidate to peer connection
    if (candidate) {
      await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }
  });
};
