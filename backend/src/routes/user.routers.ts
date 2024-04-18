import express from 'express';
import { loginUser, logoutUser, registerUser, updateUser } from '../controllers/user.controller';

const router = express.Router();

// POST - create user
// POST - get user
// PUT - update user
// POST - logout user

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update', updateUser);
router.post('/logout', logoutUser);

export { router };
