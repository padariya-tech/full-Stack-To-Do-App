const express = require('express')
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getprofile, logoutUser } = require('../controllers/user.controller');
const auth = require('../middleware/auth');
router.use(
    cors({
        credentials:true,
        origin:"http://localhost:5173"
    })
)

router.get('/',test)
router.post('/signup',registerUser)
router.post('/login',loginUser)
router.get('/profile',auth,getprofile)
router.get('/logout',auth,logoutUser)
module.exports = router
