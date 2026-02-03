import { NextResponse } from "next/server";
import { Pool } from "pg";

// PostgreSQL connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL as string,
});

export async function GET() {
    try {
        const result = await pool.query(
            "SELECT * FROM queries ORDER BY created_at DESC"
        );

        return NextResponse.json({
            success: true,
            data: result.rows,
        });
    } catch (error) {
        console.error("Error fetching queries:", error);

        return NextResponse.json(
            { success: false, message: "Failed to fetch queries" },
            { status: 500 }
        );
    }
}