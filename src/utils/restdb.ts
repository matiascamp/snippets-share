import { neon } from "@neondatabase/serverless";

function generateUUID() {
    return crypto.randomUUID();
}

function isValidUUID(uuid: string) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

export async function getData() {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not defined');
    }
    const sql = neon(process.env.DATABASE_URL);

    const data = await sql`SELECT * FROM languages_snippets;`;

    return data;

}

export async function getSnippetFromDb(id: string) {
    if (!isValidUUID(id)) {
        throw new Error('Invalid UUID format');
    }

    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not defined');
    }
    
    const sql = neon(process.env.DATABASE_URL);

    const snippet = await sql`
        SELECT * FROM languages_snippets 
        WHERE generated_Id = ${id}
        LIMIT 1`;

    return snippet[0];
}

type SnippetData = {
    language: string;
    value: string;
    theme: string;
}

export async function createRecord(data:SnippetData) {
    const {language,value,theme} = data
    
    const generated_Id = generateUUID();

    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not defined');
    }
    const sql = neon(process.env.DATABASE_URL);

    try {
         await sql`
        INSERT INTO Languages_snippets (language, value, generated_Id, theme)
        VALUES (${language}, ${value}, ${generated_Id}, ${theme})
        RETURNING *`;
        
        return generated_Id
    }catch (error) {
        console.error("Error creating record",error)
        throw error
    }
}