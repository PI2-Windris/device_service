const { findOne } = require("../models/updateCode");
const updateCode = require("../models/updateCode");

const UpdateController = {
    get: async (req, res) => {
        try {
            return res.json(updateCode.find());
        } catch (e) {
            res.json(e).status(404);
        }
    },

    latest: async (req, res) => {
        try {
            const newest = await updateCode.findOne().sort({ 'createdAt': 'desc' });
            return res.json(newest);
        } catch (e) {
            res.json(e).status(404);
        }
    },

    version: async (req, res) => {
        try {
            const newest = await updateCode.findOne({version: req.params.version});
            return res.json(newest);
        } catch (e) {
            res.json(e).status(404);
        }
    },

    store: async (req, res) => {
        try {
            const { version, firmware } = req.body;

            const data = updateCode.create({
                version: version,
                code: firmware,
            })

            return res.json(data);
        } catch (e) {
            res.json(e).status(404);
        }

    },
}


module.exports = UpdateController;