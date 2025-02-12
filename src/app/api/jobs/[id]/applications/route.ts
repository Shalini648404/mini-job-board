import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




// app/api/jobs/[id]/applications/route.ts
export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        //console.log("Received Params:", params); // Debugging
       // const { id: jobId } = await context.params;
        const jobId =  params.id;

        const jobExists = await prisma.job.findUnique({ where: { id: jobId } });

        if (!jobExists) {
            return NextResponse.json({ error: "Job not found" }, { status: 404 });
        }

        const applications = await prisma.application.findMany({
            where: { jobId },
        });

        return NextResponse.json(applications, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error fetching applications" }, { status: 500 });
    }
}
