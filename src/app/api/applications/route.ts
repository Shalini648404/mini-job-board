import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/*export async function POST(req: Request) {
  try {
    const { name, email, resume, coverLetter, jobId } = await req.json();
    const application = await prisma.application.create({
      data: { name, email, resume, coverLetter, jobId },
    });
    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}*/

// app/api/applications/route.ts
export async function POST(req: Request) {
  try {
      const { name, email, resume, coverLetter, jobId } = await req.json();

      const jobExists = await prisma.job.findUnique({ where: { id: jobId } });

      if (!jobExists) {
          return NextResponse.json({ error: "Job not found" }, { status: 404 });
      }

      const application = await prisma.application.create({
          data: { name, email, resume, coverLetter, jobId },
      });

      return NextResponse.json(application, { status: 201 });
  } catch (error) {
      return NextResponse.json({ error: "Error applying for job" }, { status: 500 });
  }
}

