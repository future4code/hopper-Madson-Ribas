import express from 'express'
import { FriendsBusiness } from '../../business/FriendsBusiness'
import { FriendsDatabase } from '../../data/FriendsDatabase'
import { FriendsController } from '../FriendsController'

export const friendsRouter = express.Router()

const friendsDatabase = new FriendsDatabase()
const friendsBusiness = new FriendsBusiness(friendsDatabase)
const friendsController = new FriendsController(friendsBusiness)

friendsRouter.post('/addFriend', (req, res) => friendsController.addFriend(req, res))
friendsRouter.post('/removeFriend', (req, res) => friendsController.removeFriend(req, res))


