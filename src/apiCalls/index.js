import axios from "axios";

export const SignupApiCall = async (userData) => {
    try {
        const response = await axios({
            method: "POST",
            url: "https://fakestoreapi.com/users",
            data: userData
        })

        console.log(response, 'response inside api call');
        return response
    }catch (error) {
        console.log(error);
        alert("somthing went wrong")
    }
}


export const loginApiCall = async (data) => {
    try{
        const response = await axios({
            method:'POST',
            url: "https://fakestoreapi.com/auth/login",
            data: data
        })
        console.log(response, "response inside api call");
        return response;
    }catch (error) {
        console.log(error);
    }
}

export const getAllProducts = async()=>{
    try{
        const response = await axios({
            method: 'GET',
            url: "https://fakestoreapi.com/products",
            
        })
        console.log(response, "inside api call")
        return response;
    }catch(error){
        console.log(error)
    }
}