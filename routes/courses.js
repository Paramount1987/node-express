const { Router } = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', async (req, res) => {
	const courses = await Course.getAll();

	res.render('courses', {
		title: 'Courses',
		isCourses: 'active',
		courses
	});
});

module.exports = router;