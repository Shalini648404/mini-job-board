/*"use client";  
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";



export default function JobDetails() {
  const params = useParams(); // ✅ Correct way to access params in a client component
  const [job, setJob] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!params.id) return; // Ensure params.id is available before fetching

    fetch(`/api/jobs/${params.id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [params.id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ${job.salaryRange}</p>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push(`/candidate/apply/${job.id}`)}
      >
        Apply Now
      </button>
    </div>
  );
}*/

"use client";  
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

// ✅ Define a Job type
interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  salaryRange: string;
}

export default function JobDetails() {
  const params = useParams(); // ✅ Correct way to access params in a client component
  const [job, setJob] = useState<Job | null>(null); // ✅ Explicitly define type
  const router = useRouter();

  useEffect(() => {
    if (!params.id) return; // Ensure params.id is available before fetching

    fetch(`/api/jobs/${params.id}`)
      .then((res) => res.json())
      .then((data: Job) => setJob(data)) // ✅ Ensure TypeScript knows what data is expected
      .catch((error) => console.error("Error fetching job details:", error));
  }, [params.id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ${job.salaryRange}</p>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push(`/candidate/apply/${job.id}`)}
      >
        Apply Now
      </button>
    </div>
  );
}


