/*"use client";
import { useEffect, useState } from "react";

export default function JobApplications({ params }: { params: { id: string } }) {
  
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`/api/applications?jobId=${params.id}`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [params.id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Resume:</strong> <a href={app.resume} className="text-blue-500 underline" target="_blank">View Resume</a></p>
              <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}*/


"use client";
import { useEffect, useState } from "react";

// Define the structure of an application object
interface Application {
  id: string;
  name: string;
  email: string;
  resume: string;
  coverLetter: string;
}

export default function JobApplications({ params }: { params: { id: string } }) {
  // Initialize state with the Application array type
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    fetch(`/api/applications?jobId=${params.id}`)
      .then((res) => res.json())
      .then((data: Application[]) => setApplications(data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, [params.id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p>
                <strong>Email:</strong> {app.email}
              </p>
              <p>
                <strong>Resume:</strong>{" "}
                <a
                  href={app.resume}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </p>
              <p>
                <strong>Cover Letter:</strong> {app.coverLetter}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
