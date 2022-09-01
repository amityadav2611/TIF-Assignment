const express = require('express');
const router = express.Router();


const roleControllers = require("../controllers/roleController");
router.post("/role", roleControllers.createRole)
router.get("/role", roleControllers.getRoles)


const userControllers = require("../controllers/userControllers");
router.post("/user/signup", userControllers.createUser)
router.post("/user/signin", userControllers.siginUser)
router.get("/user", userControllers.allUser)
router.get("/user/:id", userControllers.getUserById)


const schoolControllers = require("../controllers/schoolController");
router.post("/school", schoolControllers.createSchool)
router.get("/school", schoolControllers.getSchool)
router.get("/school/students", schoolControllers.schoolDetails)


const studentControllers = require("../controllers/studentController");
router.post("/student", studentControllers.createStudent)
router.get("/student", studentControllers.getStudent)


module.exports = router;