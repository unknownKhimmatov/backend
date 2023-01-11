const Users = require("../model/user")

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

module.exports = {
    postUsers
}