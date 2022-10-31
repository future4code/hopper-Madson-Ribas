import { FriendRepository } from "../business/FriendsRepository";
import { friendship, FriendshipInterfaceDTO } from "../model/friendship";
import { BaseDatabase } from "./BaseDatabase";
import { TABLE_FRIENDSHIPS } from "./Tabbles";

export class FriendsDatabase extends BaseDatabase implements FriendRepository {
    public addFriend = async (friendship: friendship) => {

        try {
            const amizade1 = await FriendsDatabase.connection(TABLE_FRIENDSHIPS)
            .select('*')
            .where('user_id', '=', `${friendship.userId}`)
            .andWhere('friend_id', '=', `${friendship.friendId}`)

            const amizade2 = await FriendsDatabase.connection(TABLE_FRIENDSHIPS)
            .select('*')
            .where('user_id', '=', `${friendship.friendId}`)
            .andWhere('friend_id', '=', `${friendship.userId}`)



            if ( amizade1.length >= 1 || amizade2.length >= 1 )  {
                throw new Error("Amizade já existe")
            
            } else {
                await FriendsDatabase.connection.insert({ 
                    id: friendship.id,
                    user_id: friendship.userId,
                    friend_id: friendship.friendId
                }).into(TABLE_FRIENDSHIPS)
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public removeFriend = async (friendship: FriendshipInterfaceDTO) => {
        try {
            const amizade1 = await FriendsDatabase.connection(TABLE_FRIENDSHIPS)
            .select('*')
            .where('user_id', '=', `${friendship.userId}`)
            .andWhere('friend_id', '=', `${friendship.friendId}`)

            const amizade2 = await FriendsDatabase.connection(TABLE_FRIENDSHIPS)
            .select('*')
            .where('user_id', '=', `${friendship.friendId}`)
            .andWhere('friend_id', '=', `${friendship.userId}`)

            if ( amizade1.length > 0 ) {
                                       
                    await FriendsDatabase.connection(TABLE_FRIENDSHIPS)
                    .where('user_id', '=', `${friendship.userId}`)
                    .andWhere('friend_id', '=', friendship.friendId)
                    .del()

                } else if ( amizade2.length > 0 ) {
                    
                    await FriendsDatabase.connection(TABLE_FRIENDSHIPS)
                    .where('user_id', '=', `${friendship.friendId}`)
                    .andWhere('friend_id', '=', friendship.userId)
                    .del()

                } else {
                    throw new Error("Amizade não existe")
                }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}