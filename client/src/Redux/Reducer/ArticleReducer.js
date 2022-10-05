import { GET_ARTICLES } from "../Types/ArticleTypes";

const initialState = {
  articles: [
    {
      _id: 1,
      title: "text",
      location: " String",
      description: "String",
      price: 0,
    },
  ],
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES:
      return { ...state, articles: payload };
    default:
      return state;
  }
};
export default articleReducer;
