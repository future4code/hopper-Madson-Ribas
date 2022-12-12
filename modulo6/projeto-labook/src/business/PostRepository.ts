import { post } from "../model/post";

export interface PostRepository{
    insertPost (post: post): Promise<void>
    searchPost (id: string): Promise<any>
}