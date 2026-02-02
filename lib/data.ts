import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, {
    ssl: "require",
});
// Insert from data 
export async function createQuery(data: {
    name: string;
    email: string;
    subject?: string;
    message: string;
}) {
    await sql`INSERT INTO queries(name, email, subject,message)
    VALUES (${data.name},
    ${data.email},
    ${data.subject ?? null},
    ${data.message}
    )`
}
// FETCH all queries
export async function fetchQueries() {
    const result = await sql`
    SELECT * FROM queries 
    ORDER BY created_at DESC`;
    return result;
}
export default sql;