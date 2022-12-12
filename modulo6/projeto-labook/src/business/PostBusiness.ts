import { CustomError } from "../error/customError";
import { post, PostInputDTO } from "../model/post";
import { generateId } from "../services/generateId";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
    constructor(private postDatabase: PostRepository){}

    public createPost = async (input: PostInputDTO) => {
        try {
            const { photo, description, type, createdAt, authorId} = input;

            if (!photo || !description || !type || !createdAt || !authorId) {
                throw new CustomError(
                    406,
                    'Preencha os campos "photo", "description", "type", "createdAt", "authorId"'
                );
            }
            const id: string = generateId();

            const post: post = {id, photo, description, type, createdAt, authorId}
            await this.postDatabase.insertPost(post)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public searchPost = async (id: string) => {
        try {
            if (!id) {
                throw new CustomError(
                    406,
                    'Preencha o campo "id" '
                ); 
            }
            const result = await this.postDatabase.searchPost(id);

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}