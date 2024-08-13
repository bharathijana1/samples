import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// npm i @hookform/resolvers - for sing Schema => import {yupResolver } from '@hookform/resolvers/yup'
// npm i yup - for yup => import yup from 'yup'
// npm i react-hook-form - npm install => import { useForm } from 'react-hook-form'



const Schema = yup.object().shape({
    name: yup.string().required("*pls enter a name"),
    email: yup.string().email().required("*pls enter a email"),
    age: yup.number().integer().positive().required(),
    password: yup.string().required("*pls enter a password").min(4,"min 4 char required").max(10,"max 10 char required"),
    confirmpassword: yup.string().required("*pls enter a confirm password").oneOf([yup.ref("password"), null])
})

export const FormValidationUsingSchema = () => {

    const { register, handleSubmit, formState:{errors, isValid, isDirty} } = useForm({
        resolver: yupResolver(Schema),
        mode: 'onChange'
    });

  return (
    <>
    <div className="container border ">
        <h1 className='text-center'>Login form</h1>
        <form action="" className='d-flex justify-content-center align-item-center flex-row p-2'
        onSubmit={handleSubmit((data) => {
            console.log(data);
            
        })}>
            <div className="form-group d-flex flex-column w-50">
                <input {...register("name")} type="text" placeholder='Enter Name' />
                <p>{errors.name?.message}</p>
                <br />
                <input{...register("email")} type="email" placeholder='Enter Email' />
                <p>{errors.email?.message}</p>
                <br />
                <input{...register("age")} type="text" placeholder='Enter age' />
                <p>{errors.age?.message}</p>
                <br />
                <input{...register("password")} type="password" placeholder='Enter password' />
                <p>{errors.password?.message}</p>
                <br />
                <input{...register("confirmpassword")} type="password" placeholder='Confirm Password' />
                <p>{errors.confirmpassword?.message}</p>
                <br />
                <button type='submit' disabled= {isDirty && !isValid }>Submit</button>

            </div>
        </form>
    </div>
    </>
  )
}
