const express = require('express')
const useController = require("../controller/user")
const router = express.Router();

// post users 
router.post("/postUser", useController.postUsers)

// get users 
router.get("/getUser", useController.getUser)

// get find by id 
router.get("/getUserById", useController.getUserId)

// deleted users 
router.delete("/deleteUser", useController.deletedUserById)

// update user by id 
router.put("/updateUser", useController.updateUserById)

module.exports = router