"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditJob({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salaryRange: "",
  });

  const router = useRouter();

  useEffect(() => {
    async function fetchJob() {
      const response = await fetch(`/api/company/jobs/${params.id}`);
      if (response.ok) {
        const job = await response.json();
        setFormData(job);
      } else {
        alert("Failed to fetch job details.");
        router.push("/company/jobs");
      }
    }
    fetchJob();
  }, [params.id, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`/api/company/jobs/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Job updated successfully!");
      router.push("/company/jobs"); // Redirect to company job listings
    } else {
      alert("Failed to update job.");
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Job Posting</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          className="border p-2 rounded"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Job Description"
          className="border p-2 rounded"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Salary Range"
          className="border p-2 rounded"
          value={formData.salaryRange}
          onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Job</button>
      </form>
    </div>
  );
}
