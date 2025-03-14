import { getSnippetFromDb } from "@/utils/restdb";
import { NextResponse } from "next/server";
import { Context } from "node:vm";


export async function GET(
    request: Request,
    context: Context
) {
    try {
        const { id } = context.params;
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