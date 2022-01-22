const db = require("../../models/db");

module.exports = {
    cartInfo: async(userId) => {
        if (!userId) {
            return {
                error: true,
                msg: "Invalid parameter"
            }
        };

        const users = await db.get("users").value();
        const user = users.filter((user) => user.id === userId);

        if (user.length !== 1) {
            return {
                statusCode: 404,
                msg: "PAGE NOT FOUND",
            }
        };

        if (user[0].email !== req.user.email) {
            return {
                statusCode: 403, 
                msg: "FORBIDDEN"
            }
        };
        
        return {
            statusCode: 200,
            msg: "OK",
            list: user[0].cart
        }
    }
}