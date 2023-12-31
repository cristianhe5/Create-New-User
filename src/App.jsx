import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)// si es false se desactiva la clase y se muestra si es true 
  const url = 'https://usercrud-dev-rdbf.4.us-1.fl0.io'
  const [users, getUsers, createUsers, delateUsers, updateUsers ] = useCrud(url)  

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users);

  const handelNewUser = () => {
    setIsDisable(false)

  }
  

  return (
    <div className='container'>
      <h1 className='app__title'>Users Information</h1>
      <div className='app__div-btn'>
        <button onClick={handelNewUser} className='app__btn'>Create new User</button>
      </div>
      <FormUser 
      createUsers={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      isDisable={isDisable}
      setIsDisable={setIsDisable}
      />
      <div className='app__userCard-container'>
        {
          users?.map( user => (
            <UserCard 
            key={user.id}
            user={user}
            delateUsers={delateUsers}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
            />


          ))
        }
      </div>
    </div>
  )
}

export default App
