import { FriendsDatabase } from "../data/FriendsDatabase";
import { CustomError } from "../error/customError";
import { friendship, FriendshipInterfaceDTO } from "../model/friendship";
import { generateId } from "../services/generateId";

export class FriendsBusiness {
    constructor(private friendsDatabase: FriendsDatabase) {}

    public addFriend = async (input: FriendshipInterfaceDTO) => {
        try {
            const { userId, friendId } = input;

            if ( !userId || !friendId ) {
                throw new CustomError(
                    406,
                    'Preencha os campos "userId" e "friendId"'
                );
            }
            const id: string = generateId();
            const friendship: friendship = {id, userId, friendId}
            await this.friendsDatabase.addFriend(friendship)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public removeFriend = async (input: FriendshipInterfaceDTO) => {
        try {
            const { userId, friendId } = input;

            if ( !userId || !friendId ) {
                throw new CustomError(
                    406,
                    'Preencha os campos "userId" e "friendId"'
                );
            }

            await this.friendsDatabase.removeFriend(input)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}