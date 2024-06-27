/*
  Warnings:

  - You are about to drop the `Valet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Valet";

-- CreateTable
CREATE TABLE "valet" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "email" TEXT NOT NULL,
    "cellphone" CHAR(11) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "valet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "valet_cpf_key" ON "valet"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "valet_email_key" ON "valet"("email");
