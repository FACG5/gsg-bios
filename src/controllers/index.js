const express = require('express');

const login = require('./login');
const adminHomePage = require('./adminHomePage');
const cohorts = require('./cohorts');
const students = require('./Students');
const { authCheck } = require('./middleware');

const router = express.Router();
router.get('/admin/login', login.get);
router.post('/admin/login', login.post);

router.get('/admin', authCheck, adminHomePage.get);
router.get('/admin/logout', authCheck, adminHomePage.logout);
router.get('/admin/cohorts', authCheck, cohorts.get);
router.get('/admin/cohorts/:cohortID/students', authCheck, cohorts.getStudents);
router.post('/admin/cohorts/:cohortID/newStudent', authCheck, students.post);
router.get('/admin/cohorts', cohorts.get);
router.get('/admin/cohorts/:cohortID/students', cohorts.getStudents);

module.exports = router;
