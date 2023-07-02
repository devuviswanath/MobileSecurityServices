const Service = require("../models/serviceModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");

const createService = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newService = await Service.create(req.body);
    res.json(newService);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllService = asyncHandler(async (req, res) => {
  try {
    const getServices = await Service.find();
    res.json(getServices);
  } catch (error) {
    throw new Error(error);
  }
});
const getaService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findService = await Service.findById(id);
    res.json(findService);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createService,
  getaService,
  getAllService,
};
