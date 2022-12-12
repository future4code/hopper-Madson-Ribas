import { friendship } from "../model/friendship"

export interface FriendRepository{
    addFriend (friendship: friendship): Promise<void>
    removeFriend (friendship: friendship): Promise<void>    
}