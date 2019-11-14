const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.render('courses', {
		title: 'Courses',
		isCourses: 'active',
	});
});

module.exports = router;