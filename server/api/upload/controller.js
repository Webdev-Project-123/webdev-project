const R = require('ramda');
const createErr = require('http-errors');
const uploadService = require('./service');

module.exports = {
  view: async (req, res, next) => {
    const DTO = await uploadService.view();
    console.log("ok")
    res.status(200).json({
      list: DTO.list,
    });
  },

  update: async (req, res, next) => {
    const DTO = await uploadService.update(req.params.userId);

    
  },

  delete: async (req, res, next) => {
    const DTO = await uploadService.view(req.params.userId);

    
  },
};
