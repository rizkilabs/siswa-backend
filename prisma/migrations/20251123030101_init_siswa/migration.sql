-- CreateTable
CREATE TABLE `Siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kodeSiswa` VARCHAR(191) NOT NULL,
    `namaSiswa` VARCHAR(191) NOT NULL,
    `alamatSiswa` VARCHAR(191) NULL,
    `tglSiswa` DATETIME(3) NOT NULL,
    `jurusanSiswa` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Siswa_kodeSiswa_key`(`kodeSiswa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
