import { Request, Response } from "express";
import {PostBusiness} from "../business/PostBusiness"
import { PostInputDTO } from "../model/post";

export class PostController {
    constructor(private postBusiness: PostBusiness){}

    public createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, type, authorId} = req.body;

            const time = Date.now();
            const createdAt: Date = new Date(time)

            const input: PostInputDTO = {
                photo, 
                description, 
                type, 
                createdAt, 
                authorId
            };
            await this.postBusiness.createPost(input)

            res.status(201).send({message: "Post criado!"});
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public searchPost = async (req: Request, res: Response) => {
        try {
            const {id} = req.params

            const result = await this.postBusiness.searchPost(id);

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}