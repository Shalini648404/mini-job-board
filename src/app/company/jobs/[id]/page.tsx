"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function JobDetails({ params }: { params: { id: string } }) {
  const [job, setJob] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/jobs/${params.id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [params.id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> ${job.salaryRange}</p>

      <div className="flex space-x-4 mt-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push(`/company/jobs/${job.id}/applications`)}
        >
          View Applications
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded"
          //onClick={() => router.push(`/company/jobs/${job.id}/edit`)}

          onClick={() => router.push(`/company/jobs/edit/${job.id}`)}
        >
          Edit Job
        </button>
      </div>
    </div>
  );
}
