const siswaService = require("../services/siswa.service");
const { success, fail } = require("../utils/response");

async function create(req, res, next) {
  try {
    const body = req.body;

    const required = ["kodeSiswa", "namaSiswa", "tglSiswa", "jurusanSiswa"];
    for (const f of required) {
      if (!body[f]) return fail(res, 400, `${f} is required`);
    }

    const created = await siswaService.createSiswa(body);
    return success(res, 201, created, "Siswa created");
  } catch (err) {
    if (err.code === "P2002") return fail(res, 409, "kodeSiswa already exists");
    next(err);
  }
}

async function findAll(req, res, next) {
  try {
    const data = await siswaService.getAllSiswa();
    return success(res, 200, data, "List of siswa");
  } catch (err) {
    next(err);
  }
}

async function findOne(req, res, next) {
  try {
    const data = await siswaService.getSiswaById(req.params.id);
    if (!data) return fail(res, 404, "Siswa not found");
    return success(res, 200, data, "Siswa found");
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const exist = await siswaService.getSiswaById(id);
    if (!exist) return fail(res, 404, "Siswa not found");

    const updated = await siswaService.updateSiswa(id, req.body);
    return success(res, 200, updated, "Siswa updated");
  } catch (err) {
    if (err.code === "P2002") return fail(res, 409, "kodeSiswa already exists");
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const id = req.params.id;
    const exist = await siswaService.getSiswaById(id);
    if (!exist) return fail(res, 404, "Siswa not found");

    await siswaService.deleteSiswa(id);
    return success(res, 200, null, "Siswa deleted");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
