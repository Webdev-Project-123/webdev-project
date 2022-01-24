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
            list.forEach((product) => {
                let book = db.get("products").find({ id: product.id }).value();
                
                if (book["in-stock"] < product.quantity) 
                    return {
                        statusCode: 500,
                        msg: "In stock is not enough",
                        name: product.title
                    }
            });
    
            await list.forEach((product) => {
                //Remove from cart
                let cart = db.get("users").find({ id: userId }).value().cart;

                let newList = cart.filter((item) => item.id !== product.id);

                db.get('users').find({ id: userId }).assign({ cart : newList }).write();
            
                let bought = db.get('users').find({ id : userId}).value().bought;

                // Add bought
                const dateObj = new Date();
                const date = ("0" + dateObj.getDate()).slice(-2);
                const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
                const year = dateObj.getFullYear();

                let bookbook = db.get("products").find({ id: product.id }).value().image;
                bought.push({ 
                    id: product.id,
                    title: product.title,
                    discount: product.discount,
                    quantity: product.quantity,
                    date: `${year}-${month}-${date}`,
                    image: bookbook.image,
                });

                db.get('users').find({ id: userId }).assign({ bought : bought }).write();

                // Update in stock
                let book = db.get("products").find({ id: product.id}).value();
                let temp = book["in-stock"] - product.quantity;
                db.get('products').find({ id: product.id }).assign({ "in-stock" : temp }).write();
            

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