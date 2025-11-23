const prisma = require("../config/db");

async function createSiswa(data) {
  return prisma.siswa.create({
    data: {
      kodeSiswa: data.kodeSiswa,
      namaSiswa: data.namaSiswa,
      alamatSiswa: data.alamatSiswa,
      tglSiswa: new Date(data.tglSiswa),
      jurusanSiswa: data.jurusanSiswa,
    },
  });
}

async function getAllSiswa() {
  return prisma.siswa.findMany({
    orderBy: { createdAt: "desc" },
  });
}

async function getSiswaById(id) {
  return prisma.siswa.findUnique({ where: { id: Number(id) } });
}

async function updateSiswa(id, data) {
  const payload = {
    namaSiswa: data.namaSiswa,
    alamatSiswa: data.alamatSiswa,
    jurusanSiswa: data.jurusanSiswa,
  };

  if (data.kodeSiswa) payload.kodeSiswa = data.kodeSiswa;
  if (data.tglSiswa) payload.tglSiswa = new Date(data.tglSiswa);

  return prisma.siswa.update({
    where: { id: Number(id) },
    data: payload,
  });
}

async function deleteSiswa(id) {
  return prisma.siswa.delete({ where: { id: Number(id) } });
}

module.exports = {
  createSiswa,
  getAllSiswa,
  getSiswaById,
  updateSiswa,
  deleteSiswa,
};
