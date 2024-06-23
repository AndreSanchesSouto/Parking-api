-- CreateTable
CREATE TABLE "driver" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "year_born" CHAR(4) NOT NULL,
    "password" TEXT NOT NULL,
    "cellphone" CHAR(11) NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car" (
    "plate" VARCHAR(7) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "year" CHAR(4),
    "mercosul" BOOLEAN NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("plate")
);
