import mongoose, { Document, Schema } from "mongoose";

type User = Document & {
  email: String;
  socket_id: String;
  name: String;
  avatar: String;
};

const UserSchema = new Schema<User>({
  email: String,
  socket_id: String,
  name: String,
  avatar: String,
});

const User = mongoose.model<User>("Users", UserSchema);
export { User, UserSchema };
