import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

// npm i react-hook-form - npm install

export const FormValidation = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm(); 



  return (
    <>
    <div className="container d-flex justify-content-center align-item-center">

      <form action="" onSubmit={handleSubmit((data) => {
          console.log(data);
      })}>

        {/* name */}

        <div className="form-group p-3 m-2">
          <label htmlFor="name" >Name</label>
          <input type="text" id='name' className='form-control' name='name' placeholder='enter your name'

          {...register("name", { required:"name is required"})
          
          }

          />
          {errors ?.name && <p style={{color:"red"}}>{errors.name.message}</p>}
          {/* <label style={{color:"red"}}>*name is required</label> */}
        </div>

        {/* email */}

        <div className="form-group p-3 m-2">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' className='form-control' name='name' placeholder='enter your email' 
          {...register("email", {required:"Email is required"})
          } 
          
          />
          {errors?.email && <p style={{color:"red"}}>{errors.email.message}</p>}
          {/* <label style={{color:"red",display:"none"}}>* is required</label> */}
        </div>

        {/* password */}

        <div className="form-group p-3 m-2">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' className='form-control' name='name' placeholder='enter your password' 
          {...register("password", {required:"Password is required",
            minLength: {
                  value: 4,
                  message:"min 4 char must"
                  } 
            })
          } 
          
         />
        {errors?.password && <p style={{color:"red"}}>{errors.password.message}</p>}

          {/* <label style={{color:"red",display:"none"}}>*Password is required</label> */}
        </div>

        <div className="button text-center">
          <button type='submit' className="btn btn-success ">Submit</button>
        </div>
 

      </form>
    </div>
    </>
  )
}
