import { getSnippetFromDb } from "@/utils/restdb"
import SnippetEditor from "@/components/SnippetEditor";


interface Snippet {
    language: string;
    value: string;
    theme: string;
    generated_Id: string;
}

export default async function SpecificSnippet({ params }:{params:Promise<{id:string}>}) {
    try {
        const { id } = await params;
        const snippet = await getSnippetFromDb(id) as Snippet | null;
        return <SnippetEditor snippet={snippet} />;
    } catch (error) {
        console.error("Error fetching snippet:", error);
        return (
            <div className="flex items-center justify-center min-h-screen bg-[url(/Hero-Background-notecode.svg)] bg-no-repeat bg-cover bg-center">
                <h1 className="text-2xl font-bold text-red-500">Error loading snippet</h1>
            </div>
        );
    }
} 