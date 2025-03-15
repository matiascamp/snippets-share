import { getSnippetFromDb } from "@/utils/restdb";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const snippet = await getSnippetFromDb(id);

        if (!snippet) {
            return NextResponse.json(
                { error: "Snippet not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(snippet);
    } catch (error) {
        console.error("Error fetching snippet:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 