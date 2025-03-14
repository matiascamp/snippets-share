import { createRecord } from "@/utils/restdb";

import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
    const data = await request.json()

    const id = await createRecord(data)

    const url = new URL(request.url);

    const redirectUrl = new URL(`/snippets/${id}`, url.origin);

    try {
        return NextResponse.json({
            url: (`.../${id}`),
            id: id,
            redirectUrl: redirectUrl
        });

    } catch (error) {
        console.error("Error to post", error);
    }

}