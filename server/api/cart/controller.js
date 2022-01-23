const cartService = require("./service");

const createErr = require("http-errors");

module.exports = {
    cartInfo: async (req, res, next) => {
        try {
            const DTO = await cartService.cartInfo(req.params.userId);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    },

    cartAdd: async (req, res, next) => {
        try {
            const DTO = await cartService.cartAdd(req.params.userId, req.body.product);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    },

    cartDelete: async(req, res, next) => { 
        try {
            const DTO = await cartService.cartDelete(req.params.userId, req.body.id);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    }
}