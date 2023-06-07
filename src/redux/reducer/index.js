import reducerImage from "./InfoImageSilce";
import reducerUser from "./UserSlice";

export const rootReducer = {
  user: reducerUser,
  infoimage: reducerImage,
};
