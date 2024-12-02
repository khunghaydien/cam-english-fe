"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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
  const { roomId } = useParams();
  const localStreamRef = useRef<HTMLVideoElement | null>(null);

  const createPeerConnection = async () => {
    peerConnection = new RTCPeerConnection(servers);

    localStream?.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.addEventListener("icecandidate", (e) => {
      console.log("...icecandidate", e);
    });
  };

  const init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia(constraints);
    if (localStreamRef && localStreamRef.current && localStream) {
      localStreamRef.current.srcObject = localStream;
    }
    await createPeerConnection();
    try {
      const offer = await peerConnection.createOffer();
      console.log("offer", offer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <video ref={localStreamRef} autoPlay playsInline />
    </div>
  );
};

export default SpeakingRoom;
