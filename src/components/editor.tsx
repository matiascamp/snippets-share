import { Editor } from "@monaco-editor/react"
import LanguagesSelector from "./languagesSelector"
import { useSnippetsStore } from "@/app/store/snipetsProps"
import { LANGUAGES } from "@/constants"
import { useEffect } from "react"

const CustomEditor = () => {

    const language = useSnippetsStore(state => state.language)
    const theme = useSnippetsStore(state => state.theme)
    const value = useSnippetsStore(state => state.value)
    const position = useSnippetsStore(state => state.position)

    const setValue = useSnippetsStore(state => state.setValue)
    const setPosition = useSnippetsStore(state => state.setPosition)

    useEffect(() => {
        const selectedLanguage = LANGUAGES.find(lang => lang.language === language)
        if (selectedLanguage) {
            setValue(selectedLanguage.value)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

    const handleEditorChange = (newValue: string | undefined) => {
        setValue(newValue)
    }

    useEffect(() => {
        if(position === 'id') {
            setPosition('initial')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    return (
        <div className="flex flex-col w-md sm:w-xl md:w-2xl lg:w-3xl xl:w-4xl h-200 rounded-md p-4 justify-between mt-8" style={{ backgroundColor: theme === 'vs-dark' ? '#1e1e1e' : '#ffffff' }}>
            <Editor
            className=""
                theme={theme}
                height="400px"
                width="100%"
                language={language.toLowerCase()}
                value={value}
                onChange={handleEditorChange}
            />
            <LanguagesSelector />
        </div>
    )
}

export default CustomEditor