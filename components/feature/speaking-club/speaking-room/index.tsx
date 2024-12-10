"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

import { initializePeerConnection } from "./establish-peer-connection";
import { establishSocketConnection } from "./establish-socket-connection";
import { serverSignaling } from "./server-signaling";
import { sendOffer } from "./client-signaling";
import { socket } from "../speaking-club.const";

function Index() {
  const { id } = useParams();
  const localStreamRef = useRef<HTMLVideoElement | null>(null);
  const remoteStreamRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Step 1: Establish Socket Connection
        await establishSocketConnection(id as string); // Wait for socket to connect

        // Step 2: Initialize Peer Connection
        const peerConnection = await initializePeerConnection(
          localStreamRef,
          remoteStreamRef,
          id as string,
          socket
        );

        // Step 3: Handle Signaling
        await serverSignaling(peerConnection, id as string, socket);

        // Step 4: Send the offer to the server
        await sendOffer(peerConnection, id as string, socket);
      } catch (error) {
        console.error("Error initializing signaling:", error);
      }
    };

    initialize();

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [id]);

  return (
    <div>
      <video ref={localStreamRef} autoPlay playsInline controls />
      <video ref={remoteStreamRef} autoPlay playsInline controls />
    </div>
  );
}

export default Index;
