-- CreateTable
CREATE TABLE "ContactForms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "enterprise" TEXT NOT NULL,
    "subject" JSONB NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ContactForms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactForms_email_key" ON "ContactForms"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ContactForms_telephone_key" ON "ContactForms"("telephone");
