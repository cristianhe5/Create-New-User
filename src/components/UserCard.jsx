import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user,delateUsers,setInfoUpdate,setIsDisable}) => {

    const handleDelete = () => {
        delateUsers('/users',user.id)
    }
    const handleEdit = () => {
        setInfoUpdate(user)//para compartir la info del usuario
        setIsDisable(false)
    }
    
  return (
    <article className='userCard'>
        <h3 className='userCard__title'>{user.first_name} {user.last_name}</h3>
        <ul className='userCard__info'>
            <li className='userCard__info__item'><span className='userCard__info__label'>Email </span><span  className='userCard__info__value'>{user.email}</span></li>
            <li className='userCard__info__item'><span className='userCard__info__label'>Birthday </span><span className='userCard__info__value'>{user.birthday}</span></li>
        </ul>
        <button className='userCard__btn-trash' onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className='userCard__btn-edit' onClick={handleEdit}><i className='bx bxs-edit-alt' ></i></button>
    </article>
  )
}

export default UserCard