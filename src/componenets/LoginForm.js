import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { InputComponenet } from "./InputComponent"
import { loginApiCall } from "../apiCalls"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useState } from "react"


const signupShema = yup.object({
    username: yup.string().required('Required'),
    password: yup.string().required('Required').min(5).max(10),
}).required('Required')


export const LoginForm = ()=>{

    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupShema),
    });

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const finalSubmit= async(data)=>{
        setLoading(true)
        try{
            const response = await loginApiCall(data)
        if(response.status === 200) {
            const token = response.data.token;
            localStorage.setItem("ecom-token",token)
            navigate("/dashboard")
        }else{

        }
        }catch (error) {
        toast.error("Invalid username/password")
        }finally{
            setLoading(false)
        }
    }
    
    console.log(errors);

    return (
        <div className="center-div">
            <div className="signup-form">
                <h1>Please Sign-in</h1>
                <form onSubmit={handleSubmit(finalSubmit)}>
                   
                    <InputComponenet
                      lable="User name"
                      name="username"
                      type="text"
                      placeholder="Enter username"
                      register={register}
                      errors={errors}
                    />
                    <InputComponenet
                      lable="Password"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      register={register}
                      errors={errors}
                    />
                    <button type="submit" className="btn btn-primary mt-10" >
                        {
                            loading ? <span className="spinner-border spimt-10nner-border-sm" role="status" aria-hidden="true"></span> : null
                        }
                        Signin
                    </button><br/>
                    
                    <a href= "/signup">Don't Have an account ? Signup here</a>
                </form>
            </div>
        </div>
    )
}