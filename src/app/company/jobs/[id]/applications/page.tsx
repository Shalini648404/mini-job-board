/*"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function JobApplications({ params }: { params: { id: string } }) {
  const [applications, setApplications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchApplications() {
      const response = await fetch(`/api/company/jobs/${params.id}/applications`);
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        alert("Failed to fetch applications.");
        router.push("/company/jobs");
      }
    }
    fetchApplications();
  }, [params.id, router]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
              <p>
                <strong>Resume:</strong> 
                <a href={app.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
                  View Resume
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}*/


/*"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function JobApplications({ params }: { params: { id: string } }) {
  
  const [applications, setApplications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/jobs/${params.id}/applications`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [params.id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Resume:</strong> <a href={app.resume} target="_blank" className="text-blue-500">View</a></p>
              <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
            </li>
          ))}
        </ul>
      )}
      <button 
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/company/jobs")}
      >
        Back to Jobs
      </button>
    </div>
  );
}*/
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the structure of an application
interface Application {
  id: string;
  name: string;
  email: string;
  resume: string;
  coverLetter: string;
}

export default function JobApplications({ params }: { params: { id: string } }) {
  const [applications, setApplications] = useState<Application[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/jobs/${params.id}/applications`)
      .then((res) => res.json())
      .then((data: Application[]) => setApplications(data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, [params.id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p>
                <strong>Email:</strong> {app.email}
              </p>
              <p>
                <strong>Resume:</strong>{" "}
                <a href={app.resume} target="_blank" className="text-blue-500">
                  View
                </a>
              </p>
              <p>
                <strong>Cover Letter:</strong> {app.coverLetter}
              </p>
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/company/jobs")}
      >
        Back to Jobs
      </button>
    </div>
  );
}


