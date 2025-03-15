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
    <div className=" absolute pt-2 pb-6 w-full flex text-center flex-col justify-start items-center h-screen bg-[url(/Hero-Background-notecode.svg)] bg-violet-600 bg-no-repeat bg-start 2xl:bg-cover">
      <Image className="py-10" src="/NoteCodeLogo.svg" alt="page-logo" width={110} height={20} />
      <h2 className="text-black text-4xl font-bold py-2">Create & Share</h2>
      <h1 className="text-black text-5xl font-bold ">Your Code easily</h1>
      <CustomEditor />
    </div>
  );
}
