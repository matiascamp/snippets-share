"use client"

import CustomEditor from "@/components/editor";
import { useSnippetsStore } from "./store/snipetsProps";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const setPosition = useSnippetsStore(state => state.setPosition)

  useEffect(() => {
    setPosition('initial')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex text-center flex-col justify-start items-center h-screen bg-[url(/Hero-Background-notecode.svg)] bg-no-repeat bg-cover">
      <Image className="py-10" src="/NoteCodeLogo.svg" alt="page-logo" width={110} height={20} />
      <h2 className="text-black text-3xl font-medium py-2">Create & Share</h2>
      <h1 className="text-black text-4xl font-medium ">Your Code easily</h1>
      <CustomEditor />
    </div>
  );
}
