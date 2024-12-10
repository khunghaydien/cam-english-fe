import { Socket } from "socket.io-client";
export const establishSocketConnection = async (
  roomId: string,
  socket: Socket
): Promise<void> => {
  return new Promise((resolve, reject) => {
    socket.io.opts.query = { roomId };
    socket.connect();

    socket.on("connect", () => {
      console.log(`Connected to signaling server. Socket ID: ${socket.id}`);
      resolve(); // Resolve once connected
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from signaling server.");
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      reject(error); // Reject if connection fails
    });
  });
};
