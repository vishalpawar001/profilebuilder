const express = require('express')
const passport = require('passport')
const upload = require('../utils/multer')

const router = express.Router()

const { fetchStudents,  facultyLogin, getAllSubjects,
    updatePassword, forgotPassword, postOTP, uploadMarks, updateProfile ,getAllSkillReq} = require('../controller/facultyController')

router.post('/login', facultyLogin)

router.post('/forgotPassword', forgotPassword)

router.post('/postOTP', postOTP)

router.post('/updateProfile', passport.authenticate('jwt', { session: false }), upload.single("avatar") ,updateProfile)

router.post('/fetchStudents', passport.authenticate('jwt', { session: false }), fetchStudents)

router.post('/fetchAllSubjects', passport.authenticate('jwt', { session: false }), getAllSubjects)
// router.post('/getAllSkillReq', passport.authenticate('jwt', { session: false }), getAllSkillReq)

// router.post('/markAttendence', passport.authenticate('jwt', { session: false }), markAttendence)

router.post('/uploadMarks', passport.authenticate('jwt', { session: false }),uploadMarks)

router.post('/updatePassword', passport.authenticate('jwt', { session: false }), updatePassword)

module.exports = router
