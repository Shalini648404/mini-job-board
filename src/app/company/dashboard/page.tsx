"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CompanyDashboard() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const companyId = "1";
  

  useEffect(() => {
    async function fetchJobs() {
      //const response = await fetch("/api/company/jobs");
     // const response = await fetch("http://localhost:3002/api/company/jobs");
     const response = await fetch(`http://localhost:3002/api/company/jobs?companyId=${companyId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        alert("Failed to fetch job listings.");
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Company Dashboard</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => router.push("/company/jobs/create")}
      >
        + Create New Job
      </button>

      {jobs.length === 0 ? (
        <p>No job postings available.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> ${job.salaryRange}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => router.push(`/company/jobs/${job.id}/applications`)}
              >
                View Applications
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
