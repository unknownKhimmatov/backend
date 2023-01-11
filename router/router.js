const express = require('express')
const useController = require("../controller/user")
const router = express.Router();


router.post("/postUsers", useController.postUsers)

module.exports = router