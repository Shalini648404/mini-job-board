import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Ensure this path is correct


  
export async function GET(req: Request) {
    try {
        // Get companyId from query params
       // const { searchParams } = new URL(req.url);
       // const companyId = searchParams.get("companyId");
       const companyId = "1";


        if (!companyId) {
            return NextResponse.json({ error: "Company ID is required" }, { status: 400 });
        }

        // Fetch jobs posted by the company
        const jobs = await db.job.findMany({
            where: { companyId },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
        console.error("Error fetching company jobs:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
       
}

// POST request: Create a new job
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse request body
        console.log("Received Job Data:", body); // Debugging

        const { companyId, title, description ,category, location, salaryRange} = body;

        if (!companyId || !title || !description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Insert job into database
        const newJob = await db.job.create({
            data: {
                companyId,
                title,
                description,
                category,
                location,
                salaryRange,
                createdAt: new Date(),
            },
        });

        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        console.error("Error creating job:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
