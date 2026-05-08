/*
  Warnings:

  - The `currency` column on the `options` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `order_options` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `type` on the `items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `payment_type` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "itemType" AS ENUM ('PACKAGE', 'LOOSE');

-- CreateEnum
CREATE TYPE "currencyType" AS ENUM ('INR', 'USD', 'EUR');

-- CreateEnum
CREATE TYPE "orderStatus" AS ENUM ('PENDING', 'FULFILLED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "paymentType" AS ENUM ('CASH', 'CASHLESS', 'HYBRID');

-- DropForeignKey
ALTER TABLE "order_options" DROP CONSTRAINT "fk_order_options_created_by";

-- DropForeignKey
ALTER TABLE "order_options" DROP CONSTRAINT "fk_order_options_option";

-- DropForeignKey
ALTER TABLE "order_options" DROP CONSTRAINT "fk_order_options_order";

-- DropForeignKey
ALTER TABLE "order_options" DROP CONSTRAINT "fk_order_options_updated_by";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "type",
ADD COLUMN     "type" "itemType" NOT NULL;

-- AlterTable
ALTER TABLE "options" DROP COLUMN "currency",
ADD COLUMN     "currency" "currencyType" NOT NULL DEFAULT 'INR';

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "status",
ADD COLUMN     "status" "orderStatus" NOT NULL DEFAULT 'PENDING',
DROP COLUMN "payment_type",
ADD COLUMN     "payment_type" "paymentType" NOT NULL;

-- DropTable
DROP TABLE "order_options";

-- DropEnum
DROP TYPE "currency_type";

-- DropEnum
DROP TYPE "item_type";

-- DropEnum
DROP TYPE "order_status";

-- DropEnum
DROP TYPE "payment_type";

-- CreateTable
CREATE TABLE "orderOptions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "option_id" UUID NOT NULL,
    "quantity" DECIMAL(10,3) NOT NULL,
    "p_unit" DECIMAL(10,2) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(6),
    "created_by" UUID NOT NULL,
    "updated_by" UUID NOT NULL,

    CONSTRAINT "orderOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orderOptions" ADD CONSTRAINT "fk_order_options_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderOptions" ADD CONSTRAINT "fk_order_options_option" FOREIGN KEY ("option_id") REFERENCES "options"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderOptions" ADD CONSTRAINT "fk_order_options_order" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderOptions" ADD CONSTRAINT "fk_order_options_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
