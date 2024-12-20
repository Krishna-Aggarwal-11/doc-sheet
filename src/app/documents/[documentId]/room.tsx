"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {

    const params = useParams();
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_HYQK5r9OpBH-fSxIqzwcbWWf75vLwGo07rTkVaFD-jjlL8FkdyY5eY8U6eBgCfJe"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}