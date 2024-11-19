"use client";
import { GET_SPEAKING_ROOM } from "@/graphql/query/speaking-club";
import { useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useRef } from "react";
let localStream: MediaStream;
let remoteStream: MediaStream;
let peerConnection: RTCPeerConnection;

const servers: {
  iceServers: RTCIceServer[];
} = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
};

let constraints: MediaStreamConstraints = {
  video: {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 480, ideal: 1080, max: 1080 },
  },
  audio: true,
};

function index() {
  const { data: user } = useSession();
  const { id } = useParams();
  const [getSpeakingRoom, { data: speakingRoom }] = useLazyQuery(GET_SPEAKING_ROOM);
  const localStreamRef = useRef<HTMLVideoElement | null>(null);

  const getLocalStream = async () => {
    if (localStreamRef && localStreamRef.current)
      localStreamRef.current.srcObject =
        await navigator.mediaDevices.getUserMedia(constraints);
  };

  const joinSpeakingRoom = async () => {};

  const leaveSpeakingRoom = async () => {};

  useEffect(() => {
    joinSpeakingRoom();
    getLocalStream();

    (async () => {
      await getSpeakingRoom({
        variables: {
          getSpeakingRoomDto: {
            id,
          },
        },
      });
    })();
  }, []);

  const isHost = useMemo(() => {
    if (user && speakingRoom) {
      return user?.user?.email === speakingRoom?.getSpeakingRoom?.host?.email;
    }
  }, [user, speakingRoom]);

  return (
    <>
      <video ref={localStreamRef} autoPlay playsInline />
    </>
  );
}

export default index;
