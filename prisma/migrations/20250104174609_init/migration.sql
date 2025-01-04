/*
  Warnings:

  - You are about to drop the column `jobType` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `JobPosting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobPosting" DROP COLUMN "jobType",
DROP COLUMN "tags",
ADD COLUMN     "tag" TEXT,
ADD COLUMN     "wage" TEXT;
