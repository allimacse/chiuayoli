const express = require('express');
const { PostController } = require('../controllers/index.js');
const { PostValidator } = require('../validators/index.js');
const { verifyToken } = require('../middlewares/index.js');

const router = express.Router();

router.post('/posts', verifyToken, PostValidator.create, PostController.create);

router.get('/posts', verifyToken, PostController.find)

router.get('/posts/:id', verifyToken, PostController.findOne);

module.exports = router;
