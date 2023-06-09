import reducerComment from "./CommentSlice";
import reducerDocumnent from "./DocumentSlice";
import reducerImage from "./InfoImageSilce";
import reducerUser from "./UserSlice";

export const rootReducer = {
  user: reducerUser,
  infoimage: reducerImage,
  comments: reducerComment,
  documents: reducerDocumnent,
};
