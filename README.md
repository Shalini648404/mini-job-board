# 🏢 Mini Job Board

A full-stack job board application built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**, backed by **PostgreSQL (Neon DB)**.  

## 🚀 Features

### 🎯 Candidate Flow (`/candidate`)
- **Browse Jobs (`/candidate/jobs`)** - View job listings fetched from the backend.
- **View Job Details (`/candidate/jobs/[id]`)** - Get detailed job information.
- **Apply for Jobs (`/candidate/apply/[jobId]`)** - Fill out a simple form with:
  - Name, Email, Resume Link, Cover Letter
  - Submit applications using **Server Actions**.

### 🏢 Company Flow (`/company`)
- **Job Dashboard (`/company/jobs`) or (`/company/dashboard`)** - View all job posts.
- **Post a Job (`/company/jobs/create`)** - Create job posts with:
  - Title, Description, Category, Location, Salary Range, etc.
  - Uses **Server Actions** for form submission.
- **Manage Applications (`/company/jobs/[id]/applications`)** - View applications submitted for job posts.

### 🔥 Additional Features
✅ **Job Filtering & Search** - Filter by **Category, Location**
✅ **Edit & Delete Jobs** - Companies can modify job posts.  
✅ **Fully Responsive** - Built with **Tailwind CSS** for all devices.  
✅ **Database Relations** - PostgreSQL with **foreign keys** for data integrity.  
✅ **Deployed on Vercel** - Instant live demo.  

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|-----------|
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| **Backend** | Next.js Server Actions, Prisma ORM |
| **Database** | PostgreSQL (Neon DB) |
| **Deployment** | Vercel, Railway/Supabase for DB |

---

## ⚙️ Installation & Setup

First, clone the repository:

```bash
git clone https://github.com/your-username/job-board.git
cd job-board


Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install


Set up environment variables (.env file):

DATABASE_URL=your_postgres_database_url
NEXT_PUBLIC_SITE_URL=http://localhost:3000


Run the database migration:
```bash
npx prisma migrate dev --name init


Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev

Open http://localhost:3000 in your browser.