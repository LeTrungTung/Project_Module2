import reducerComment from "./CommentSlice";
import reducerDocumnent from "./DocumentSlice";
import reducerImage from "./InfoImageSilce";
import reducerListUser from "./ListUserSlice";
import reducerUser from "./UserSlice";

export const rootReducer = {
  user: reducerUser,
  users: reducerListUser,
  infoimage: reducerImage,
  comments: reducerComment,
  documents: reducerDocumnent,
};
