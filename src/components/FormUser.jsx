import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'

const FormUser = ({createUsers,infoUpdate,updateUsers,setInfoUpdate,isDisable,setIsDisable}) => {
    

    const {handleSubmit, register, reset} = useForm()

    useEffect(() => { // no olvidar poner el reset en el use effect para evirtar el ciclo infinito
      reset(infoUpdate) //infoUpdate= es la info del usuario
    }, [infoUpdate])
    
    
    const submit = data => {
        if(infoUpdate){
            //Update
            updateUsers('/users', infoUpdate.id, data)
            setInfoUpdate() //lo que guarda es undefined //le psamos el setter para hacerle un reset una ves que ya hayamos actualizado la informacion se borra todo y queda en limpio para volver a editar o crear

        }else{
            //Create
            createUsers('/users', data)

        }
        setIsDisable(true)//para que se cierre cuando le hagamos submit
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''

        })
    }
    const handelExit = () => {
        setIsDisable(true)
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''

        })
        setInfoUpdate()
    }

    return (
        <div className={`form-container ${isDisable && 'form__disable'}`}>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <h2 className='form__title'>User Form</h2>
                <div onClick={handelExit} className='form__x'>
                    <i className='bx bx-x' ></i>
                </div>
                <label className='form__label'>
                    <span className='form__span'>email </span>
                    <input className='form__input' {...register('email')} type="email" />
                </label>
                <label className='form__label'>
                    <span className='form__span'>password</span>
                    <input className='form__input'  {...register('password')} type="password" />
                </label>
                <label className='form__label'>
                    <span className='form__span'>first_name</span>
                    <input className='form__input'  {...register('first_name')} type="text" />
                </label>
                <label className='form__label'>
                    <span className='form__span'>last_name</span>
                    <input className='form__input'  {...register('last_name')} type="text" />
                </label>
                <label className='form__label'>
                    <span className='form__span'>birthday</span>
                    <input className='form__input' {...register('birthday')} type="date" />
                </label>
                <button className='form__btn'>Submit</button>
            </form>
        </div>
    )
}

export default FormUser