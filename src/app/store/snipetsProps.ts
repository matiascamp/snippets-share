import { LANGUAGES } from "@/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    language:string
    value:string
    theme:string
    position: string
    url: string
    setLanguage: (arg:string) => void
    setTheme: (arg: string) => void
    setValue: (arg:string | undefined) => void
    setPosition:(arg:string) => void,
    setUrl:(arg:string) => void,
}


export const useSnippetsStore = create<State>()(persist((set) => {
    return {
        language: 'HTML',
        value: LANGUAGES[0].value,
        theme:'vs-dark',
        position:'initial',
        url:'',
        setLanguage: (value:string) => set({language:value}),
        setTheme: (value:string) => set({theme:value}),
        setValue: (value:string | undefined) => set({value}),
        setPosition:(value:string) => set({position:value}),
        setUrl:(value:string) => set({url:value})
    }
},{
    name:'snippets'
}))