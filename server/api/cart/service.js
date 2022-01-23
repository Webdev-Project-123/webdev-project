const db = require("../../models/db");

module.exports = {
    cartInfo: async(userId) => {
        try {
            const list = await db.get('users').find({ id : userId}).value();

            return {
                statusCode: 200,
                msg: "OK",
                cart: list.cart
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
            const list = await db.get('users').find({ id : userId}).value().cart;

            await list.push({ 
                id: product.id,
                title: product.title,
                discount: product.discount,
                quantity: product.quantity
            });

            await db.get('users').find({ id: userId }).assign({ cart : list }).write();

            return {
                statusCode: 200,
                msg: "Add Success",
            }
        } catch(error) {
            return {
                statusCode: 500,
                msg: error.msg
            }
        }
    },

    cartDelete: async(userId, id) => {
        try {
            const list = await db.get("users").find({ id: userId }).value().cart ;
            const newList = await list.filter((item) => item.id !== id);
            
            await db.get('users').find({ id: userId }).assign({ cart : newList }).write();

            return {
                statusCode: 200,
                msg: "Delete Success",
            }
        } catch(error) {
            return {
                statusCode: 500,
                msg: error.msg
            }
        }
    },
    
    cartPurchased: async(userId, list) => {
        try {
            await list.forEach((product) => {
                let cart = db.get("users").find({ id: userId }).value().cart;

                let newList = cart.filter((item) => item.id !== product.id);

                db.get('users').find({ id: userId }).assign({ cart : newList }).write();
            });
            
            await list.forEach((product) => {
                let bought = db.get('users').find({ id : userId}).value().bought;

                bought.push({ 
                    id: product.id,
                    title: product.title,
                    discount: product.discount,
                    quantity: product.quantity
                });

                db.get('users').find({ id: userId }).assign({ bought : bought }).write();
            });

            return {
                statusCode: 200,
                msg: "Purchase Success"
            }
        } catch(error) {
            return {
                statusCode: 500,
                msg: error.msg
            }
        }
    }
}