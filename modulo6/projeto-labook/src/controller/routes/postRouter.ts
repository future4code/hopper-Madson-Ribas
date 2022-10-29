import express from "express"
import { PostBusiness } from "../../business/PostBusiness"
import { PostDatabase } from "../../data/PostDatabase"
import { PostController } from "../PostController"

export const postRouter = express.Router()

const postDatabase = new PostDatabase()
const userBusiness = new PostBusiness(postDatabase)
const postController = new PostController(userBusiness)

postRouter.post('/newPost', (req, res) => postController.createPost(req, res))
postRouter.get('/search/:id', postController.searchPost)