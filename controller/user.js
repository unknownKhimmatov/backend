const Users = require("../model/user")


// post users 
const postUsers = async (req, res) => {
    try {
        const {
            lastName,
            firstName,
            email,
            sinf,
            daraja
        } = req.body;

        // information will save

        if (lastName || firstName) {
            const createUsers = new Users({
                lastName,
                firstName,
                email,
                sinf,
                daraja
            });


            // information saved 
            await createUsers.save()
            res.json({
                succes: true,
                massage: "information save"
            })


            // information don't saved
        } else {
            res.json({
                succes: false,
                massage: "information don't save"
            })
        }


    } catch (error) {
        console.log("==============================");
        console.log("error", error);
        console.log("==============================");
    }
}

// get users
const getUser = async (req, res) => {
    try {
        const user = await Users.find()
        res.json({
            succes: true,
            massage: user
        })
    } catch (error) {
        console.log("error", error);
    }
}

// get id users 

const getUserId = async (req, res) => {
    try {
        const {
            id
        } = req.query;

        const user = await Users.findById({
            _id: id
        })
        res.json({
            succes: true,
            data: user
        })
    } catch (error) {
        console.log("error", error);
    }
}

// deleted use by id 
const deletedUserById = async (req, res) => {
    try {

        const {
            id
        } = req.query;

        const user = await Users.findByIdAndRemove({
            _id: id
        })

        res.json({
            succes: true,
            massage: "information is deleted"
        })

    } catch (error) {
        console.log("===============================");
        console.log("error", error);
        console.log("===============================");
    }
}

// update user by id 

const updateUserById = async (req, res) => {
    try {
        const {
            id
        } = req.query

        const {
            lastName,
            firstName,
            email,
            sinf,
            daraja
        } = req.body;

        const user = await Users.findById({
            _id: id
        })

        if (user) {
            (user.lastName = lastName)
            (user.firstName = firstName)
            (user.email = email)
            (user.sinf = sinf)
            (user.daraja = daraja)
            await user.save()
                .then(() =>
                    res.json({
                        succes: true,
                        data: user,
                        massage: "information updated"
                    })
                )
                .catch(() =>
                    res.json({
                        succes: false,
                        massage: "information don't updated"
                    })
                )
        } else {
            res.json({
                succes: false,
                massage: "bunday idga ega malumot yo`q"
            })
        }

    } catch (error) {
        res.json({
            succes: false,
            massage: "bunday idga ega malumot yo`q"
        })
        console.log("==================================");
        console.log("error", error);
        console.log("==================================");
    }
}

module.exports = {
    postUsers,
    getUser,
    getUserId,
    deletedUserById,
    updateUserById
}