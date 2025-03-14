'use client';

import { useSnippetsStore } from '@/app/store/snipetsProps';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function SaveButton() {
    const router = useRouter();

    const language = useSnippetsStore(state => state.language)
    const theme = useSnippetsStore(state => state.theme)
    const value = useSnippetsStore(state => state.value)
    const position = useSnippetsStore(state => state.position)
    const setUrl = useSnippetsStore(state => state.setUrl)
    const url = useSnippetsStore(state => state.url)

    const handleSave = async () => {
        try {
            const data = await fetch('/api/snippets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    language,
                    value,
                    theme
                })
            });

            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }

            const result = await data.json();
            setUrl(result.url);
            router.push(`/snippets/${result.id}`);

        } catch (error) {
            console.error("Error saving snippet:", error);
            throw error;
        }
    };

    return (
        <div className='flex gap-5 items-center'>
            {(position === 'id'&& url) &&
                <span className='flex gap-4 items-center'>
                    <Image src="/link.svg" alt='share image' width={20} height={20} />
                    <p className='overflow-hidden text-clip max-w-30 text-nowrap text-xs'>{url}</p>
                </span>
            }
            <button className={`flex items-center gap-2 text-base  rounded-3xl py-3 px-5 ${position === 'id' ? 'cursor-defaultb bg-gray-600' : 'cursor-pointer bg-blue-600'}`} onClick={handleSave} disabled={position === 'id'}>
                <Image src="/Share.svg" alt="share image" width={20} height={20} />
                Share
            </button>
        </div>
    );
} 