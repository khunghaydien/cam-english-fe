"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { establishSocketConnection } from "./establish-socket-connection";
import { establishPeerConnection } from "./establish-peer-connnection";
import { socket } from "../speaking-club.const";
import { sendOfferToServer } from "./signaling-client-action";
import { signalingServerAction } from "./signaling-server-action";
function index() {
  const { id } = useParams();
  const localStreamRef = useRef<HTMLVideoElement | null>(null);
  const remoteStreamRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Step 1: Establish Socket Connection
        await establishSocketConnection(id as string, socket);
        // Step 2: Establish Peer Connection
        const peerConnection = await establishPeerConnection(
          localStreamRef,
          remoteStreamRef,
          id as string,
          socket
        );
        // Step 3: Receive Signaling from server
        await signalingServerAction(peerConnection, id as string, socket);

        // Step 4: Send the offer to the server
        await sendOfferToServer(peerConnection, id as string, socket);
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

export default index;
