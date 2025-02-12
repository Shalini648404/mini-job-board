import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
// Define a schema for UUID validation

const jobIdSchema = z.string().uuid();

export async function GET(req: NextRequest, context: { params: { id: string } }) {
    try {
        // Await the params correctly
        const { id } = await context.params; // ✅ Awaited properly

        // Validate the job ID format
        jobIdSchema.parse(id);

        // Fetch the job from the database
        const job = await db.job.findUnique({
            where: { id },
        });

        // If no job is found, return a 404 error
        if (!job) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        return NextResponse.json(job);
    } catch (error) {
        return NextResponse.json({ error: "Invalid job ID format" }, { status: 400 });
    }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const jobId =  params.id;
        const data = await req.json();

        const existingJob = await prisma.job.findUnique({ where: { id: jobId } });

        if (!existingJob) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        const updatedJob = await prisma.job.update({
            where: { id: jobId },
            data,
        });

        return NextResponse.json(updatedJob, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error updating job" }, { status: 500 });
    }
}

// app/api/jobs/[id]/route.ts
/*export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const jobId = params.id;

        const existingJob = await prisma.job.findUnique({ where: { id: jobId } });

        if (!existingJob) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        await prisma.job.delete({ where: { id: jobId } });

        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting job" }, { status: 500 });
    }
}*/

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const jobId = params.id; // Ensure params.id is correctly extracted
        if (!jobId) return NextResponse.json({ error: "Job ID is required" }, { status: 400 });

        // Check if job exists
        const existingJob = await prisma.job.findUnique({ where: { id: jobId } });
        if (!existingJob) return NextResponse.json({ error: "Job not found" }, { status: 404 });

        // Delete the job
        await prisma.job.delete({ where: { id: jobId } });

        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


