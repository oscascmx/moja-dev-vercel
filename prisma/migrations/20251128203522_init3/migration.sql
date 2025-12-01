/*
  Warnings:

  - You are about to drop the column `lastname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `UserExt` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birth` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `croata_member` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_last_cr_rel` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maternal_surename` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membership_nimber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paternal_surename` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signed_agreement` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "lastname",
ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "croata_member" BOOLEAN NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "id_last_cr_rel" TEXT NOT NULL,
ADD COLUMN     "maternal_surename" TEXT NOT NULL,
ADD COLUMN     "membership_nimber" TEXT NOT NULL,
ADD COLUMN     "paternal_surename" TEXT NOT NULL,
ADD COLUMN     "signed_agreement" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "UserExt";

-- CreateTable
CREATE TABLE "relationships_cat" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "relationships_cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_region_cat" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "org_region_cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decades_cat" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "decades_cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "last_croatian_relative" (
    "id" TEXT NOT NULL,
    "id_related_user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paternal_surename" TEXT NOT NULL,
    "maternal_surename" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "org_population" TEXT NOT NULL,
    "id_region" TEXT NOT NULL,
    "id_relation_ship" TEXT NOT NULL,
    "id_migration_decade" TEXT NOT NULL,
    "fst_migrated_country" TEXT NOT NULL,

    CONSTRAINT "last_croatian_relative_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "relationships_cat_description_key" ON "relationships_cat"("description");

-- CreateIndex
CREATE UNIQUE INDEX "org_region_cat_description_key" ON "org_region_cat"("description");

-- CreateIndex
CREATE UNIQUE INDEX "decades_cat_description_key" ON "decades_cat"("description");
