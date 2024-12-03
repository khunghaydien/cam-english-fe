"use client";
import { UPDATE_SPEAKING_ROOM } from "@/graphql/mutation/speaking-club";
import { GET_SPEAKING_ROOM } from "@/graphql/query/speaking-club";
import { SPEAKING_CLUB_SUBSCRIPTION } from "@/graphql/subscription/speaking-club";
import { useLazyQuery, useMutation, useSubscription } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

let localStream: MediaStream;
let peerConnection: RTCPeerConnection;
const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
};

const constraints = {
  video: {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 480, ideal: 1080, max: 1080 },
  },
  audio: true,
};

const SpeakingRoom = () => {
  peerConnection = new RTCPeerConnection(servers);
  const { roomId } = useParams();
  const { data: user } = useSession();
  const localStreamRef = useRef<HTMLVideoElement | null>(null);
  const remoteStreamRef = useRef<HTMLVideoElement | null>(null);
  const { data: speakingRoomSubscription } = useSubscription(
    SPEAKING_CLUB_SUBSCRIPTION
  );
  console.log(speakingRoomSubscription);
  const [getSpeakingRoom, { data: speakingRoom }] =
    useLazyQuery(GET_SPEAKING_ROOM);
  const [updateSpeakingRoom] = useMutation(UPDATE_SPEAKING_ROOM);

  useEffect(() => {
    const fetchSpeakingRoom = async () => {
      try {
        await getSpeakingRoom({
          variables: {
            getSpeakingRoomDto: {
              id: roomId as string,
            },
          },
        });
      } catch (error) {
        console.error("Error fetching speaking room:", error);
      }
    };
    fetchSpeakingRoom();
  }, [roomId]);

  useEffect(() => {
    if (speakingRoom) {
      const offer = JSON.parse(speakingRoom.getSpeakingRoom.offer);
      if (speakingRoom.getSpeakingRoom.host.email === user?.user.email) {
        hostSignaling();
      } else {
        guestSignaling(offer);
      }
    }
  }, [speakingRoom]);

  const hostSignaling = async () => {
    await fetchUserMedia();
    setupPeerConnection();

    try {
      const newOffer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(newOffer);
      await updateSpeakingRoom({
        variables: {
          id: roomId as string,
          offer: JSON.stringify(newOffer),
        },
      });
    } catch (error) {
      console.error("Error during host signaling:", error);
    }
  };

  const guestSignaling = async (offer: RTCSessionDescriptionInit) => {
    setupPeerConnection();

    try {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(offer)
      );
      await fetchUserMedia();

      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);

      await updateSpeakingRoom({
        variables: {
          id: roomId as string,
          offer: JSON.stringify(answer),
        },
      });
    } catch (error) {
      console.error("Error during guest signaling:", error);
    }
  };

  const setupPeerConnection = () => {
    const remoteStream = new MediaStream();

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    peerConnection.onicecandidate = async (event) => {
      if (event.candidate) {
        try {
          await updateSpeakingRoom({
            variables: {
              id: roomId as string,
              offer: JSON.stringify(event.candidate),
            },
          });
        } catch (error) {
          console.error("Error sending ICE candidate:", error);
        }
      }
    };

    if (remoteStreamRef.current) {
      remoteStreamRef.current.srcObject = remoteStream;
    }
  };

  const fetchUserMedia = async () => {
    try {
      localStream = await navigator.mediaDevices.getUserMedia(constraints);
      if (localStreamRef.current) {
        localStreamRef.current.srcObject = localStream;
      }

      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });
    } catch (error) {
      console.error("Error fetching user media:", error);
    }
  };

  return (
    <div>
      <video ref={localStreamRef} autoPlay playsInline />
      <video ref={remoteStreamRef} autoPlay playsInline />
    </div>
  );
};

export default SpeakingRoom;
