import React from 'react';
import { api } from "@/trpc/server";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const JobPostingsPage = async () => {
  const jobs = await api.jobs.getJobs();
  return (
      <div className="container mx-auto p-4 rounded-lg shadow-md mt-10 mb-10 " >
          <Table>
            <TableCaption>Recent Job Postings</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Job Type</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Apply</TableHead>               
                </TableRow>
              </TableHeader>
          </Table>
      {jobs.map((job) => (
        <div key={job.id}>
          <Table>
            <TableBody>
              {job.jobPostings.map((posting) => (
                <TableRow key={posting.id}>
                  <TableCell>{job.name}</TableCell>
                  <TableCell>{posting.title ?? '-'}</TableCell>
                  <TableCell>{(posting.posted) ?.toLocaleDateString() ?? '-'}</TableCell>
                  <TableCell>{posting.location ?? '-'}</TableCell>
                  <TableCell>{posting.jobType ?? '-'}</TableCell>
                  <TableCell>{posting.tags ?? '-'}</TableCell>
                  <TableCell>
                    <Link href={posting.applyUrl || '#'}>Apply</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default JobPostingsPage;