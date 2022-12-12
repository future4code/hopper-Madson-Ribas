import { PostRepository } from "../business/PostRepository";
import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_POSTS } from "./Tabbles";

export class PostDatabase extends BaseDatabase implements PostRepository {
    public insertPost = async(post: post) => {
        try {
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
        }).into(TABLE_POSTS)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public searchPost = async (id: string) => {
        try {
            const result = await PostDatabase.connection.select('*').from(TABLE_POSTS)
            .where('id', '=', `${id}`)

            return result
        } catch (error: any) {
            throw new Error(error.message) 
        }
    }
}