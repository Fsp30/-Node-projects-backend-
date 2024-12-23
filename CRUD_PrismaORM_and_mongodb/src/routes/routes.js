import express from 'express'
import {createUser, getAllUsers ,getUserById,updateUser,deleteUser} from '../controller/userController'

const router = express.Router()

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/', deleteUser)

export default router