"use client";
import { GET_CHANNEL } from "@/graphql/query/speaking-club";
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
  const [getChannel, { data: channel }] = useLazyQuery(GET_CHANNEL);
  const localStreamRef = useRef<HTMLVideoElement | null>(null);

  const getLocalStream = async () => {
    if (localStreamRef && localStreamRef.current)
      localStreamRef.current.srcObject =
        await navigator.mediaDevices.getUserMedia(constraints);
  };

  const joinChannel = async () => {};

  const leaveChannel = async () => {};

  useEffect(() => {
    joinChannel();
    getLocalStream();

    (async () => {
      await getChannel({
        variables: {
          getChannelDto: {
            id,
          },
        },
      });
    })();
  }, []);

  const isHost = useMemo(() => {
    if (user && channel) {
      return user?.user?.email === channel?.getChannel?.host?.email;
    }
  }, [user, channel]);

  return (
    <>
      <video ref={localStreamRef} autoPlay playsInline />
    </>
  );
}

export default index;
