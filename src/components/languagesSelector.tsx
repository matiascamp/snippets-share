import { LANGUAGES } from "@/constants"
import Image from "next/image"

type props = {
    language: string,
    value: string
}

type languagesProps = {
    language: string
    onSelect: ({ language, value }: props) => void
}


const LanguagesSelector = ({ onSelect, language }: languagesProps) => {
    return (
        <div className="flex justify-between items-end">
            <div className="flex gap-5">
                <select
                    className="w-15"
                    name="languages"
                    id="languages"
                    onChange={(e) => onSelect({ language: e.target.value, value: e.target.value })}
                    value={language}
                >
                    {LANGUAGES.map((e, index) => (
                        <option className={`${language === e.language ? 'bg-white' : 'bg-current'}`} key={index} value={e.value}>{e.language}</option>
                    ))}
                </select>
                <select className="w-20" name="theme" id="theme">
                    <option value="vs-dark">vs-dark</option>
                    <option value="light">light</option>
                </select>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 rounded-3xl py-2 px-4">
                <Image src="/Share.svg" alt="share image" width={20} height={20} />
                Share
            </button>
        </div>
    )
}

export default LanguagesSelector