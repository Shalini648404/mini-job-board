/*import { useEffect, useState } from "react";

export default function CompanyDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Company Dashboard</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <a href={`/company/jobs/${job.id}`} className="text-blue-500">View Applications</a>
          </li>
        ))}
      </ul>
    </div>
  );
}*/

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CompanyJobs() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/company/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  async function handleDelete(jobId: string) {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    const response = await fetch(`/api/company/jobs/${jobId}`, { method: "DELETE" });

    if (response.ok) {
      setJobs(jobs.filter((job) => job.id !== jobId));
    } else {
      alert("Failed to delete job.");
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Company Job Listings</h1>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => router.push("/company/jobs/create")}
      >
        Create New Job
      </button>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ${job.salaryRange}</p>
            <button 
              className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
             // onClick={() => router.push(`/company/jobs/edit/${job.id}`)}
              onClick={() => router.push(`/company/jobs/${job.id}/edit`)}
            >
              Edit
            </button>
            <button 
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(job.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
