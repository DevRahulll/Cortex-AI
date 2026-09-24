-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Test_email_key" ON "Test"("email");
