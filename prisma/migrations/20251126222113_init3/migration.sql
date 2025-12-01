/*
  Warnings:

  - Added the required column `lastname` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "lastname" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserExt" (
    "id" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "member" BOOLEAN NOT NULL,
    "membershipNumber" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExt_id_key" ON "UserExt"("id");
