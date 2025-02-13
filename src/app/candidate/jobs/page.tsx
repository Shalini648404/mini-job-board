/*"use client";

import { useEffect, useState } from "react";

async function fetchJobs(category = "", location = "", search = "") {
  const url = `http://localhost:3002/api/jobs?category=${category}&location=${location}&search=${search}`;
  const res = await fetch(url);
  return res.json();
}

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then((data) => {
      setJobs(data);
      setFilteredJobs(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
    if (category) filtered = filtered.filter((job) => job.category === category);
    if (location) filtered = filtered.filter((job) => job.location === location);
    setFilteredJobs(filtered);
  }, [category, location, search, jobs]);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Available Jobs</h1>

      {/* Filters Section *//*}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input *//*}
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Dropdown *//*}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Software">Software</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
        </select>

        {/* Location Dropdown *//*}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="New York">New York</option>
          <option value="Hyd">Hyderabad</option>
        </select>
      </div>

      {/* Job Listings *//*}
      {loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : filteredJobs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
              <p className="text-gray-600 mt-2">{job.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                {job.category} | {job.location}
              </p>
              <a
                href={`/candidate/jobs/${job.id}`}
                className="block mt-3 text-blue-600 font-medium hover:underline"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No jobs found.</p>
      )}
    </div>
  );
}*/

"use client";

import { useEffect, useState } from "react";

// Define a TypeScript interface for a job
interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
}

// Function to fetch jobs
async function fetchJobs(category = "", location = "", search = ""): Promise<Job[]> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
  //const url = `http://localhost:3002/api/jobs?category=${category}&location=${location}&search=${search}`;
  const url = `${API_URL}/api/jobs?category=${category}&location=${location}&search=${search}`;
  const res = await fetch(url);
  return res.json();
}

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]); // Explicitly set Job[] type
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]); // Fix type here too
  const [category, setCategory] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchJobs()
      .then((data: Job[]) => {
        setJobs(data); // Now correctly recognized as Job[]
        setFilteredJobs(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  useEffect(() => {
    let filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
    if (category) filtered = filtered.filter((job) => job.category === category);
    if (location) filtered = filtered.filter((job) => job.location === location);
    setFilteredJobs(filtered);
  }, [category, location, search, jobs]);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Available Jobs</h1>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Software">Software</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
        </select>

        {/* Location Dropdown */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="New York">New York</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      {/* Job Listings */}
      {loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : filteredJobs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
              <p className="text-gray-600 mt-2">{job.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                {job.category} | {job.location}
              </p>
              <a
                href={`/candidate/jobs/${job.id}`}
                className="block mt-3 text-blue-600 font-medium hover:underline"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No jobs found.</p>
      )}
    </div>
  );
}

