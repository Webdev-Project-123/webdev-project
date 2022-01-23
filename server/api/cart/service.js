const db = require("../../models/db");

module.exports = {
    cartInfo: async(userId) => {
        try {
            const list = await db.get('users').find({ id : userId}).value();

            return {
                statusCode: 200,
                msg: "OK",
                list: list.cart
            }
        } catch(error) {
            return {
                statusCode: 500,
                msg: error.msg
            }
        }
    },

    cartAdd: async(userId, product) => {
        try {
            await db.get("users").find({ id: userId }).value().cart.push(product).write();
        } catch(error) {
            return {
                statusCode: 500,
                msg: error.msg
            }
        }
    },

    cartDelete: async(userId, id) => {
        try {
            await db.get("users").find({ id: userId }).value().cart.remove({ id: id }).write();
        } catch(error) {
            return {
                statusCode: 500,
                msg: error.msg
            }
        }
    }
}