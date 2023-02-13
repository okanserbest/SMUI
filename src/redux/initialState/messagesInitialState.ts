export interface MessageType {
    senderID: number
    message: string
}

export interface UserMessagesType {
    userId: number
    userName: string
    photoUrl: string
    messages: Array<MessageType>
}

export const initialState: Array<UserMessagesType> = [
    {
        userId: 1,
        userName: "Charlie Kelly",
        photoUrl: "CharlieKelly",
        messages: [
            {
            senderID: 1,
            message: "we r goin to c the lions"
            },
            {
            senderID: 1,
            message: "they are doing a feed thing event at the zoo.."
            },
            {
            senderID: 0,
            message: "when?"
            },
            {
            senderID: 0,
            message: "see the lions or sea lions? also, is mac there with u??"
            },
            {
            senderID: 0,
            message: "see the lions or sea lions? also, is mac there with u??"
            },
         ]
    },
    {
        userId: 2,
        userName: "Malena Tudi",
        photoUrl: "MalenaTudi",
        messages: [{
            senderID: 0,
            message: "Hey, how’s it goin?"
        }]
    },
    {
        userId: 3,
        userName: "Jakob Curtis",
        photoUrl: "JakobCurtis",
        messages: [{
            senderID: 0,
            message: "Yo, are you going to the Jake’s wedding?"
        }]
    },
    {
        userId: 4,
        userName: "Abram Levin",
        photoUrl: "AbramLevin",
        messages: [{
            senderID: 0,
            message: "Amir said we’d be staying over for a while... but ..."
        }]
    },
    {
        userId: 5,
        userName: "Marilyn Herwitz",
        photoUrl: "MarilynhHerwitz",
        messages: [{
            senderID: 6,
            message: "hey, i got new memes for you"
        }]
    },
    {
        userId: 6,
        userName: "Desirae Saris",
        photoUrl: "DesiraeSaris",
        messages: [{
            senderID: 0,
            message: "GoT really took a nose dive huh"
        }]
    },
]