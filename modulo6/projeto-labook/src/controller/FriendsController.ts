import { Request, Response } from "express";
import { FriendsBusiness } from "../business/FriendsBusiness";
import { FriendshipInterfaceDTO } from "../model/friendship";

export class FriendsController {
    constructor(private friendsBusiness: FriendsBusiness) {}

    public addFriend = async (req: Request, res: Response) => {
        try {
            const { userId, friendId } = req.body;

            const input: FriendshipInterfaceDTO = {
                userId,
                friendId
            };

            await this.friendsBusiness.addFriend(input)

            res.status(200).send({message: "Amizade criada!"})

        } catch (error: any) {
            res.status(400).send(error.message)
        }        
    }

    public removeFriend = async (req: Request, res: Response) => {
        try {
            const { userId, friendId } = req.body;

            const input: FriendshipInterfaceDTO = {
                userId,
                friendId
            };

            await this.friendsBusiness.removeFriend(input)

            res.status(200).send({message: "Amizade desfeita!"})

        } catch (error: any) {
            res.status(400).send(error.message)
        }        
    }
}