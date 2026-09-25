"use client";

import { useState } from "react";

import WindowWrapper from "@/components/shared/window-wrapper";
import FolderNavigationMenu from "@/components/folder/folder-navigation-menu";


interface NotepadProps {
  id: number;
  title?: string;
  text: string;
}

export default function Notepad({
  id,
  title = "Notepad",
  text: initialText,
}: NotepadProps) {
  const [text, setText] = useState(initialText);

  return (
    <WindowWrapper
      id={id}
      title={title}
      icon="/icons/notepad-2.png"
      controls={{
        close: true,
        minimize: true,
        maximize: true,
      }}
      className="!w-[700px] !h-[520px]"
    >
      <div className="flex h-full min-h-0 flex-col bg-[#C0C0C0]">
        <FolderNavigationMenu />
        <div className="min-h-0 flex-1 bg-white p-1">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            spellCheck={false}
            className="
              h-full
              w-full
              resize-none
              overflow-auto
              border-0
              bg-white
              p-2
              font-mono
              text-[13px]
              leading-[1.35]
              text-black
              outline-none
            "
          />
        </div>
      </div>
    </WindowWrapper>
  );
}