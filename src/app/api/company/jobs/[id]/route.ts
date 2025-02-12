import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"; // Ensure correct DB import
//import { jobIdSchema } from "@/lib/validations"; // If validation exists

// GET a specific job by ID
//export async function GET(req: NextRequest, context: { params: { id: string } }) {
export async function GET(req: Request, { params }: { params: { id: string } } ) {
    try {
        //const { id } = context.params;
        const id = params.id;
        console.log("Fetching job with ID:", id);

        // Validate job ID (optional)
        //jobIdSchema.parse(id);

        // Fetch job from the database
        const job = await db.job.findUnique({
            where: { id },
        });

        if (!job) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        return NextResponse.json(job, { status: 200 });
    } catch (error) {
        console.error("Error fetching job:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// PUT request to update a job
//export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    export async function PUT(req: Request, { params }: { params: { id: string } }) {

    try {
       // const { id } = context.params;
       const id=params.id;
        const body = await req.json();

        console.log("Updating job with ID:", id, "Data:", body);

        const updatedJob = await db.job.update({
            where: { id },
            data: body, // Make sure to sanitize/update only necessary fields
        });

        return NextResponse.json(updatedJob, { status: 200 });
    } catch (error) {
        console.error("Error updating job:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// DELETE request to remove a job
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
    try {
        const { id } = context.params;

        console.log("Deleting job with ID:", id);

        await db.job.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting job:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
