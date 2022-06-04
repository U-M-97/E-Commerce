import { loginFailure, loginStart, loginSuccess ,
    getUserStart,
    getUserSuccess,
    getUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure} from "./userRedux";
import { publicReq, userReq } from "../requestMethod";
import { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure,  updateProductStart,
    updateProductSuccess,
    updateProductFailure, addProductStart,
    addProductSuccess,
    addProductFailure
    } from "./productRedux"    
import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart())

    try{
        const res = await publicReq.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch(err){
        dispatch(loginFailure())
    }
}

export const getUsers = async (dispatch) => {
    dispatch(getUserStart())

    try{
        const res = await userReq.get("/users")
        dispatch(getUserSuccess(res.data))
    } catch(err){
        dispatch(getUserFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())

    try{
        const res = await publicReq.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())

    try{
        const res = await userReq.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch(err){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())

    try{
        dispatch(updateProductSuccess(id, product))
    } catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())

    try{
        const res = await userReq.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch(err){
        dispatch(addProductFailure())
    }
}

export const addUser = async (user, dispatch) => {
    dispatch(addUserStart())

    try{
        const res = await userReq.post("/auth/register", user)
        dispatch(addUserSuccess(res.data))
    }catch(err){
        dispatch(addUserFailure())
    }
}

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart())

    try{
        const res = await userReq.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id))
    }catch(err){
        dispatch(deleteUserFailure())
    }
}