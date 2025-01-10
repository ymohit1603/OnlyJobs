import React from 'react';
import { api } from "@/trpc/server";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const ITEMS_PER_PAGE = 50;

const JobPostingsPage = async ({ searchParams }: { searchParams: Promise<{page?:string}> }) => {
  const pages=(await searchParams).page
  const currentPage = Number(pages) || 1;
  const jobs = await api.jobs.getJobs();

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, endIndex);

  return (
      <div className="container mx-auto p-8 rounded-2xl shadow-lg mt-10 mb-10 bg-gradient-to-br from-gray-900 to-black">
          <Table className="border border-gray-700">
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-gray-800 to-gray-900">
                  <TableHead className="w-1/5 text-gray-100 font-semibold py-4">Company Name</TableHead>
                  <TableHead className="w-1/5 text-gray-100 font-semibold">Title</TableHead>
                  <TableHead className="w-1/6 text-gray-100 font-semibold">Posted</TableHead>
                  <TableHead className="w-1/5 text-gray-100 font-semibold">Location</TableHead>
                  <TableHead className="w-1/6 text-gray-100 font-semibold">Wage</TableHead>
                  <TableHead className="w-1/6 text-gray-100 font-semibold">Tags</TableHead>
                  <TableHead className="w-1/6 text-gray-100 font-semibold">Apply</TableHead>            
                </TableRow>
              </TableHeader>
          </Table>
          {currentJobs.map((job) => (
            <div key={job.id}>
              <Table>
                <TableBody>
                  <TableRow className="hover:bg-gray-800 transition-colors duration-150 ease-in-out">
                    <TableCell className="w-1/5 font-medium text-gray-300">{job.companyName}</TableCell>
                    <TableCell className="w-1/5 text-gray-400">{job.title ?? '-'}</TableCell>
                    <TableCell className="w-1/6 text-gray-400">{job.posted?.toLocaleDateString() ?? '-'}</TableCell>
                    <TableCell className="w-1/5 text-gray-400">{job.location ?? '-'}</TableCell>
                    <TableCell className="w-1/6 text-gray-400">{job.wage ?? '-'}</TableCell>
                    <TableCell className="w-1/6">
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-200">
                        {job.tag ?? '-'}
                      </span>
                    </TableCell>
                    <TableCell className="w-1/6">
                      <Link 
                        href={job.applyUrl || '#'} 
                        className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-150 ease-in-out"
                      >
                        Apply
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 mt-4">
            <Link href={`?page=${Math.max(1, currentPage - 1)}`}>
              <Button 
                variant="outline"
                disabled={currentPage === 1}
              >
                Previous
              </Button>
            </Link>
            <span className="flex items-center px-4 text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <Link href={`?page=${Math.min(totalPages, currentPage + 1)}`}>
              <Button 
                variant="outline"
                disabled={currentPage >= totalPages}
              >
                Next
              </Button>
            </Link>
          </div>
      </div>
  );
};

export default JobPostingsPage;