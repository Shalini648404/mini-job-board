/*"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salaryRange: "",
  });

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/company/jobs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Job created successfully!");
      router.push("/company/jobs"); // Redirect to company job listings
    } else {
      alert("Failed to create job.");
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a New Job</h1>
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
        <button className="bg-green-500 text-white px-4 py-2 rounded">Create Job</button>
      </form>
    </div>
  );
}*/
/*"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salaryRange: "",
  });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("/api/company/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Job created successfully!");
      router.push("/company/dashboard");
    } else {
      alert("Failed to create job.");
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create a Job Posting</h1>
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
          placeholder="Salary Range (e.g. 50,000 - 80,000)"
          className="border p-2 rounded"
          value={formData.salaryRange}
          onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
          required
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Create Job</button>
      </form>
    </div>
  );
}
*/
/*"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    salaryRange: "",
    companyId: "", // New field
  });
  const router = useRouter();
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/api/company/jobs", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
      
    });

  

    if (response.ok) {
      alert("Job created successfully!");
      router.push("/company/dashboard");
    }
    else{
      alert("Failed to create job.");
    }
    

    //const data = await response.json();
    //console.log("Job created:", data);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required className="input-field" />
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required className="input-field" />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="input-field" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="input-field" />
        <input type="text" name="salaryRange" placeholder="Salary Range" value={formData.salaryRange} onChange={handleChange} required className="input-field" />
        <input type="text" name="companyId" placeholder="Company ID" value={formData.companyId} onChange={handleChange} required className="input-field" />
        <button type="submit" className="btn-primary">Create Job</button>
      </form>
    </div>
  );
}
*/

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateJob() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    salaryRange: '',
    companyId: '',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/api/company/jobs', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Job created successfully!');
      router.push('/company/dashboard');
    } else {
      alert('Failed to create job.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-24" />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <input type="text" name="salaryRange" placeholder="Salary Range" value={formData.salaryRange} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <input type="text" name="companyId" placeholder="Company ID" value={formData.companyId} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">Create Job</button>
      </form>
    </div>
  );
}

