import { Socket } from "socket.io-client";
import { peerConfiguration } from "../speaking-club.const";
export const initializePeerConnection = async (
    localStreamRef: React.RefObject<HTMLVideoElement>,
    remoteStreamRef: React.RefObject<HTMLVideoElement>,
    socket: Socket
): Promise<RTCPeerConnection> => {
    const peerConnection = new RTCPeerConnection(peerConfiguration);

    // Capture and set the local media stream
    const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    if (localStreamRef.current) {
        localStreamRef.current.srcObject = localStream;
    }
    localStream
        .getTracks()
        .forEach((track) => peerConnection.addTrack(track, localStream));

    // Handle ICE candidate generation
    // Handle ICE candidate generation
    peerConnection.addEventListener("icecandidate", (event) => {
        if (event.candidate) {
            // Ensure roomId is included when emitting the ICE candidate
            socket.emit("iceCandidate", { candidate: event.candidate });
        }
    });

    peerConnection.addEventListener("iceconnectionstatechange", () => {
        console.log("ICE Connection State:", peerConnection.iceConnectionState);
    });

    peerConnection.addEventListener("track", (event) => {
        console.log("Track received from remote peer:", event);
        const remoteStream = new MediaStream();

        // Add all tracks from the event to the remote stream
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });

        // Gắn remoteStream vào video element để hiển thị
        if (remoteStreamRef.current) {
            remoteStreamRef.current.srcObject = remoteStream;
        }

        console.log("Remote stream set successfully!");
    });

    return peerConnection;
};
