import * as api from "../api";

//action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "LIKE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //singup the userr
    const { data } = await api.signup(formData);
    dispatch({ type: "AUTH", payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //login the userr
    const { data } = await api.signin(formData);
    dispatch({ type: "AUTH", payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
