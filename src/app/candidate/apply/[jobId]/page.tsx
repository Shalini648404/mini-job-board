"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface ApplyPageProps {
  params: { jobId: string };
}
 //export default function ApplyPage({ params }: { params: { jobId: string } }) {
  export default function ApplyPage({ params }: ApplyPageProps) {

  const [formData, setFormData] = useState({ name: "", email: "", resume: "", coverLetter: "" });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify({ ...formData, jobId: params.jobId }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Application submitted successfully!");
      router.push("/candidate/jobs");
    } else {
      alert("Failed to submit application.");
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Apply for Job</h1>
      <form className="flex flex-col space-y-4 mt-4" onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="Full Name" className="border p-2 rounded"
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input 
          type="email" placeholder="Email" className="border p-2 rounded"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input 
          type="url" placeholder="Resume URL" className="border p-2 rounded"
          value={formData.resume} onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
        />
        <textarea 
          placeholder="Cover Letter" className="border p-2 rounded"
          value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Submit Application</button>
      </form>
    </div>
  );
}
