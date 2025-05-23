import mongoose, { Document, Schema } from "mongoose";
import { v4 as uuid } from "uuid";
import { User } from "./User";

type ChatRoom = Document & {
  idUsers: User[];
  idChatRoom: String;
};

const ChatRoomSchema = new Schema<ChatRoom>({
  idUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  ],
  idChatRoom: {
    type: String,
    deafault: uuid(),
  },
});

const ChatRoom = mongoose.model<ChatRoom>("ChatRoom", ChatRoomSchema);
export { ChatRoom, ChatRoomSchema };
