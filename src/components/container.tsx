import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import LanguagesSelector from "./languagesSelector"
import { LANGUAGES } from "@/constants"

type props = {
    language:string,
    value:string
}
const Container = () => {

    const [language, setLanguage] = useState("HTML")
    const [snippet, SetSnippet] = useState(LANGUAGES[0].value)

    const onSelect = ({language,value}:props) => {
        setLanguage(language)
        SetSnippet(value)
    }

    console.log("language",language);
    

    return (
        <div className="flex flex-col">
            <Editor
                theme="light"
                height="50vh"
                width="50vw"
                language={language}
                value={snippet}
                defaultValue={LANGUAGES[0].value}

            />
            <LanguagesSelector language={language} onSelect={onSelect} />
        </div>
    )
}

export default Container