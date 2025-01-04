/*
  Warnings:

  - You are about to drop the column `companyId` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyName` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JobPosting" DROP CONSTRAINT "JobPosting_companyId_fkey";

-- AlterTable
ALTER TABLE "JobPosting" DROP COLUMN "companyId",
ADD COLUMN     "companyName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Company";
