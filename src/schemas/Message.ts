import mongoose, { Document, Schema } from "mongoose";

type Message = Document & {
  to: String;
  text: String;
  created_at: Date;
  roomId: String;
};

const MessageSchema = new Schema<Message>({
  to: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  roomId: {
    type: String,
    ref: "ChatRoom",
  },
});

const Message = mongoose.model<Message>("Messages", MessageSchema);

export { Message, MessageSchema };
