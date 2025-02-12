/*import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    const { title, description, category, location, salaryRange, companyId } = await req.json();
    const job = await prisma.job.create({
      data: { title, description, category, location, salaryRange, companyId },
    });
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}

export async function GET() {
    try {
      const jobs = await prisma.job.findMany();
      return NextResponse.json(jobs);
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
  }*/

    import { NextResponse } from "next/server";
    import { db } from "@/lib/db"; // Ensure this path is correct
    
    /*export async function GET(req: Request) {
        try {
            const { searchParams } = new URL(req.url);
    
            // Existing logic
            const companyId = "1"; // This was hardcoded before; we keep it as is
    
            if (!companyId) {
                return NextResponse.json({ error: "Company ID is required" }, { status: 400 });
            }
    
            // New filters
            const category = searchParams.get("category") || undefined;
            const location = searchParams.get("location") || undefined;
            const minSalary = searchParams.get("minSalary") ? Number(searchParams.get("minSalary")) : undefined;
            const maxSalary = searchParams.get("maxSalary") ? Number(searchParams.get("maxSalary")) : undefined;
            const keyword = searchParams.get("keyword") || undefined;
    
            // Fetch jobs with filters applied
            const jobs = await db.job.findMany({
                where: {
                    companyId, // Ensuring company constraint
                    category,
                    location,
                    salaryRange: minSalary || maxSalary
                        ? {
                              gte: minSalary,
                              lte: maxSalary,
                          }
                        : undefined,
                    OR: keyword
                        ? [
                              { title: { contains: keyword, mode: "insensitive" } },
                              { description: { contains: keyword, mode: "insensitive" } },
                          ]
                        : undefined,
                },
                orderBy: { createdAt: "desc" },
            });
    
            return NextResponse.json(jobs, { status: 200 });
        } catch (error) {
            console.error("Error fetching jobs:", error);
            return NextResponse.json({ error: "Internal server error" }, { status: 500 });
        }
    }*/
        export async function GET(req: Request) {
          try {
              const { searchParams } = new URL(req.url);
              const category = searchParams.get("category") || undefined;
              const location = searchParams.get("location") || undefined;
              const keyword = searchParams.get("keyword") || undefined;
      
              // Build filtering conditions
              const filters: any = {};
              if (category) filters.category = category;
              if (location) filters.location = location;
              if (keyword) {
                  filters.OR = [
                      { title: { contains: keyword, mode: "insensitive" } },
                      { description: { contains: keyword, mode: "insensitive" } },
                  ];
              }
      
              // Fetch jobs based on category and location filters
              const jobs = await db.job.findMany({
                  where: filters,
                  orderBy: { createdAt: "desc" },
              });
      
              return NextResponse.json(jobs, { status: 200 });
          } catch (error) {
              console.error("Error fetching jobs:", error);
              return NextResponse.json({ error: "Internal server error" }, { status: 500 });
          }
      }
      
    // POST request: Create a new job (unchanged)
    export async function POST(req: Request) {
        try {
            const body = await req.json(); // Parse request body
            console.log("Received Job Data:", body); // Debugging
    
            const { companyId, title, description, category, location, salaryRange } = body;
    
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
    
  
