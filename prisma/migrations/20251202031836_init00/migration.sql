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
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paternal_surename" TEXT NOT NULL,
    "maternal_surename" TEXT NOT NULL,
    "birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "croata_member" BOOLEAN NOT NULL,
    "membership_nimber" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "photo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "signed_agreement" BOOLEAN NOT NULL,
    "id_last_cr_rel" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "relationships_cat_description_key" ON "relationships_cat"("description");

-- CreateIndex
CREATE UNIQUE INDEX "org_region_cat_description_key" ON "org_region_cat"("description");

-- CreateIndex
CREATE UNIQUE INDEX "decades_cat_description_key" ON "decades_cat"("description");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_token_key" ON "password_reset_tokens"("token");

-- CreateIndex
CREATE INDEX "password_reset_tokens_token_idx" ON "password_reset_tokens"("token");

-- CreateIndex
CREATE INDEX "password_reset_tokens_email_idx" ON "password_reset_tokens"("email");
