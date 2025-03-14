import { LANGUAGES } from "@/constants"
import SaveButton from "./SaveButton"
import { useSnippetsStore } from "@/app/store/snipetsProps"


const LanguagesSelector = () => {

    const setLanguage = useSnippetsStore(state => state.setLanguage)
    const setTheme = useSnippetsStore(state => state.setTheme)
    const language = useSnippetsStore(state => state.language)
    const position = useSnippetsStore(state => state.position)
    

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-5">
                <select
                    className={`w-auto rounded-xl bg-gray-300 text-black p-1 text-xs text-center ${position === 'id' ? 'cursor-default' : 'cursor-pointer'}`}
                    name="languages"
                    id="languages"
                    onChange={(e) => setLanguage(e.target.value)}
                    value={language}
                    disabled={position === 'id'}
                >
                    {LANGUAGES.map((e, index) => (
                        <option className={`${language === e.language ? 'bg-white' : 'bg-gray-300'}`} key={index} value={e.language}>{e.language}</option>
                    ))}
                </select>
                <select className={`w-20 rounded-xl bg-gray-300 text-black text-xs text-center ${position === 'id' ? 'cursor-default' : 'cursor-pointer'}`} name="theme" id="theme" onChange={(e) => setTheme(e.target.value)} disabled={position === 'id'}>
                    <option value="vs-dark">vs-dark</option>
                    <option value="light">light</option>
                </select>
            </div>
            <SaveButton />
        </div>
    )
}

export default LanguagesSelector