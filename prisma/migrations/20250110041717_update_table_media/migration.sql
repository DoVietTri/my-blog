/*
  Warnings:

  - You are about to alter the column `type` on the `Media` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Media` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `folder` VARCHAR(191) NULL,
    ADD COLUMN `format` VARCHAR(191) NULL,
    ADD COLUMN `height` INTEGER NULL,
    ADD COLUMN `width` INTEGER NULL,
    MODIFY `type` VARCHAR(191) NULL;
