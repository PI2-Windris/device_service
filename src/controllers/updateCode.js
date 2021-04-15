const updateCode = require("../models/updateCode");

const UpdateController = {
    get: async (req, res) => {
        try {
            return res.json(updateCode.find());            
        } catch (e) {
            res.json(e).status(404);
        }
    }
}


module.exports = UpdateController;