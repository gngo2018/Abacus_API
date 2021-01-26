const User = require("../models").users
const bcrypt = require("bcrypt");

module.exports = {
    async getAllUsers(req, res) {
        try {
            const userCollection = await User.findAll();
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async getUserById(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId,
                }
            });
            res.status(200).send(user);
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async getAllUsersByCompanyId(req, res) {
        try {
            const userCollection = await User.findAll({
                where: {
                    company_id: req.params.companyId,
                }
            });
            if (userCollection) {
                res.status(201).send(userCollection);
            }
            else {
                res.status(404).send("No users for specified company Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async create(req, res) {
        try {
            //TODO: access newly created password from config file
            const hashedPassword = await bcrypt.hash('Abacus2021!', 10);
            const user = await User.create({
                email: req.body.email,
                company_id: req.body.companyId,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                password: hashedPassword,
                is_valid: false,
            })
            res.status(201).send(user);
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },
    async update(req, res) {
        try {
            const user = await User.findOne({
                id: req.params.userId,
            })
            if (user) {
                const updatedUser = await User.update({
                    email: req.body.email,
                    company_id: req.body.companyId,
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    password: hashedPassword,
                });
                res.status(201).send(updatedUser);
            }
            else {
                res.status(404).send("User Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
    async delete(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId,
                }
            });
            if (user) {
                user.destroy();
                res.status(200).send("User successfully deleted");
            }
            else {
                res.status(404).send("User Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    }
}