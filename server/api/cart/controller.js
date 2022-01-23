const cartService = require("./service");

const createErr = require("http-errors");

module.exports = {
    cartInfo: async (req, res, next) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const DTO = await cartService.cartInfo(userId);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    },

    cartAdd: async (req, res, next) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const DTO = await cartService.cartAdd(userId, req.body.product);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    },

    cartDelete: async(req, res, next) => { 
        try {
            const userId = parseInt(req.params.userId, 10);
            const DTO = await cartService.cartDelete(userId, req.body.id);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    },

    cartPurchased: async(req, res, next) => {
        try {
            const userId = parseInt(req.params.userId, 10);
            const DTO = await cartService.cartPurchased(userId, req.body.list);
            res.status(200).json(DTO);
        } catch(error) {
            next(createErr(500, error.msg));
        }
    }
}