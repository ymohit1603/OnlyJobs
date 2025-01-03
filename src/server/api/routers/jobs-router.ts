import { db } from "@/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";



export const jobsRouter = createTRPCRouter({
    getJobs: publicProcedure
        .query(() => {
            return db.company.findMany({
                include: {
                    jobPostings: true
                }
            });
        })
    
})