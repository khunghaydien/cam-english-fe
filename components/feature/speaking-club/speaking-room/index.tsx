// "use client";
// import { UPDATE_SPEAKING_ROOM } from "@/graphql/mutation/speaking-club";
// import { GET_SPEAKING_ROOM } from "@/graphql/query/speaking-club";
// import { useLazyQuery, useMutation } from "@apollo/client";
// import { useSession } from "next-auth/react";
// import { useParams } from "next/navigation";
// import React, { useEffect, useRef } from "react";

// const servers = {
//   iceServers: [
//     {
//       urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
//     },
//   ],
// };

// const constraints = {
//   video: {
//     width: { min: 640, ideal: 1920, max: 1920 },
//     height: { min: 480, ideal: 1080, max: 1080 },
//   },
//   audio: true,
// };

// const SpeakingRoom = () => {
//   const { roomId } = useParams();
//   const { data: user } = useSession();
//   const localStreamRef = useRef<HTMLVideoElement | null>(null);
//   const remoteStreamRef = useRef<HTMLVideoElement | null>(null);
//   const peerConnectionRef = useRef<RTCPeerConnection | null>(null); // Dùng ref để lưu peerConnection
//   const localStream = useRef<MediaStream | null>(null);

//   const [getSpeakingRoom, { data: speakingRoom }] =
//     useLazyQuery(GET_SPEAKING_ROOM);
//   const [updateSpeakingRoom] = useMutation(UPDATE_SPEAKING_ROOM);

//   useEffect(() => {
//     const fetchSpeakingRoom = async () => {
//       try {
//         await getSpeakingRoom({
//           variables: {
//             getSpeakingRoomDto: {
//               id: roomId as string,
//             },
//           },
//         });
//       } catch (error) {
//         console.error("Error fetching speaking room:", error);
//       }
//     };
//     fetchSpeakingRoom();

//     return () => {
//       // Dọn dẹp kết nối khi component bị unmount
//       if (peerConnectionRef.current) {
//         peerConnectionRef.current.close();
//         peerConnectionRef.current = null;
//       }
//       if (localStream.current) {
//         localStream.current.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [roomId]);

//   useEffect(() => {
//     if (speakingRoom) {
//       const offer = JSON.parse(speakingRoom.getSpeakingRoom.offer);
//       if (speakingRoom.getSpeakingRoom.host.email === user?.user.email) {
//         hostSignaling();
//       } else {
//         guestSignaling(offer);
//       }
//     }
//   }, [speakingRoom]);

//   const hostSignaling = async () => {
//     await fetchUserMedia();
//     setupPeerConnection();

//     try {
//       const newOffer = await peerConnectionRef.current!.createOffer();
//       await peerConnectionRef.current!.setLocalDescription(newOffer);
//       await updateSpeakingRoom({
//         variables: {
//           updateSpeakingRoomDto: {
//             id: roomId as string,
//             offer: JSON.stringify(newOffer),
//           },
//         },
//       });
//     } catch (error) {
//       console.error("Error during host signaling:", error);
//     }
//   };

//   const guestSignaling = async (offer: RTCSessionDescriptionInit) => {
//     setupPeerConnection();

//     try {
//       await peerConnectionRef.current!.setRemoteDescription(
//         new RTCSessionDescription(offer)
//       );
//       await fetchUserMedia();

//       const answer = await peerConnectionRef.current!.createAnswer();
//       await peerConnectionRef.current!.setLocalDescription(answer);

//       await updateSpeakingRoom({
//         variables: {
//           updateSpeakingRoomDto: {
//             id: roomId as string,
//             offer: JSON.stringify(answer),
//           },
//         },
//       });
//     } catch (error) {
//       console.error("Error during guest signaling:", error);
//     }
//   };

//   const setupPeerConnection = () => {
//     if (peerConnectionRef.current) return; // Tránh tạo nhiều kết nối

//     peerConnectionRef.current = new RTCPeerConnection(servers);

//     const remoteStream = new MediaStream();
//     peerConnectionRef.current.ontrack = (event) => {
//       event.streams[0].getTracks().forEach((track) => {
//         remoteStream.addTrack(track);
//       });
//     };

//     peerConnectionRef.current.onicecandidate = async (event) => {
//       if (event.candidate) {
//         try {
//           await updateSpeakingRoom({
//             variables: {
//               updateSpeakingRoomDto: {
//                 id: roomId as string,
//                 offer: JSON.stringify(event.candidate),
//               },
//             },
//           });
//         } catch (error) {
//           console.error("Error sending ICE candidate:", error);
//         }
//       }
//     };

//     if (remoteStreamRef.current) {
//       remoteStreamRef.current.srcObject = remoteStream;
//     }
//   };

//   const fetchUserMedia = async () => {
//     try {
//       localStream.current = await navigator.mediaDevices.getUserMedia(
//         constraints
//       );
//       if (localStreamRef.current) {
//         localStreamRef.current.srcObject = localStream.current;
//       }

//       localStream.current.getTracks().forEach((track) => {
//         peerConnectionRef.current?.addTrack(track, localStream.current!);
//       });
//     } catch (error) {
//       console.error("Error fetching user media:", error);
//     }
//   };

//   return (
//     <div>
//       <video ref={localStreamRef} autoPlay playsInline />
//       <video ref={remoteStreamRef} autoPlay playsInline />
//     </div>
//   );
// };

// export default SpeakingRoom;
import React from "react";

function index() {
  return <div></div>;
}

export default index;
