'use client';

import { useEffect } from "react";
import { useSnippetsStore } from "@/app/store/snipetsProps";
import CustomEditor from "./editor";
import Image from "next/image";

interface SnippetEditorProps {
    snippet: {
        language: string;
        value: string;
        theme: string;
    } | null;
}

export default function SnippetEditor({ snippet }: SnippetEditorProps) {

    const setLanguage = useSnippetsStore(state => state.setLanguage);
    const setValue = useSnippetsStore(state => state.setValue);
    const setTheme = useSnippetsStore(state => state.setTheme);
    const setPosition = useSnippetsStore(state => state.setPosition)
    const value = useSnippetsStore(state => state.value)


    useEffect(() => {
        if (snippet) {
            setLanguage(snippet.language);
            setValue(snippet.value);
            setTheme(snippet.theme);
        }
        setPosition('id')
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [snippet,value]);

    if (!snippet) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-red-500">Snippet not found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start items-center h-screen bg-[url(/Hero-Background-notecode.svg)] bg-no-repeat">
            <Image className="py-10" src="/NoteCodeLogo.svg" alt="page-logo" width={110} height={20} />
            <h2 className="text-black text-3xl font-medium py-2">Create & Share</h2>
            <h1 className="text-black text-4xl font-medium ">Your Code easily</h1>
            <CustomEditor />
        </div>
    )
} 