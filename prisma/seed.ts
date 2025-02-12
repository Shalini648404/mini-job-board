import { PrismaClient } from "@prisma/client";
import { db } from "@/lib/db";

const prisma = new PrismaClient();

async function main() {
  /*await prisma.job.createMany({
    data: [
      {
        title: "Frontend Engineer",
        description: "Build amazing UI with React and Tailwind",
        category: "Software",
        location: "Bangalore",
        salaryRange: "₹10L – ₹15L",
      },
      {
        title: "Backend Developer",
        description: "Develop scalable APIs with Node.js and PostgreSQL",
        category: "Software",
        location: "Remote",
        salaryRange: "₹12L – ₹18L",
      },
    ],
  });*/
  await db.job.create({
    data: {
      title: "Frontend Developer",
      description: "React.js, Next.js role",
      category: "software",
      location: "Remote",
      salaryRange: "₹12 LPA",
      companyId: "12345", // Replace with an actual Company ID
    },
  });
  
  console.log("Seeded test jobs!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
