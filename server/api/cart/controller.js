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
    }
}