import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { InputComponenet } from "./InputComponent"
import { SignupApiCall } from "../apiCalls"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const signupShema = yup.object({
  fullname: yup.string().required('Required').min(2).max(50),
  phone: yup.string().required('Required').length(10, 'Recheck your number'),
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required').min(5).max(10),
  passwordConfirm: yup.string().required('Required').min(5).max(10).oneOf([yup.ref('password')],'passwords are not matching'),
}).required()


export const SignupForm = ()=>{
  
  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupShema),
  });

  const navigate = useNavigate()

  const finalSubmit= async (data) => {
    if(data.password !== data.passwordConfirm){
      alert("passwordS are not matching!")
      return;
    }
    
    const response = await SignupApiCall({
      "email": data.email,
      "username": data.fullname,
      "password": data.password,
      "phone": data.phone
    })

    if (response.status === 200) {
      toast.success("signup successful")
      navigate("/login")
    }else {
      toast.error("signup failed, please recheck the entered")
    }
  }

    
  console.log(errors);

  return (
    <div className="center-div">
      <div className="signup-form">
        <h1>Register Now!</h1>
        <form onSubmit={handleSubmit(finalSubmit)}>
          <InputComponenet
            lable="Username"
            name="fullname"
            placeholder="Enter user nmae"
            register={register}
            errors={errors}
          />
          <InputComponenet
            lable="Phone Number"
            name="phone"
            placeholder="Enter phone number"
            register={register}
            errors={errors}
          />
          <InputComponenet
            lable="Email address"
            name="email"
            type="email"
            placeholder="Enter email"
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
          <InputComponenet
            lable="Paasword Confirmation"
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            register={register}
            registerProps={{required: true}}
            errors={errors}
          />
          <button type="submit" className="btn btn-primary mt-10">Submit</button><br/>
          <a href= "/login">Have an account already? Login here</a>
        </form>
      </div>
    </div>
  )
}