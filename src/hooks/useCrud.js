import axios from "axios"
import { useState } from "react"


const useCrud = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()

    //GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    //POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setInfoApi([...infoApi, res.data])})
        .catch(err => console.log(err))
    }

    //DELETE
    const delateApi = (path,id) => {  
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url) 
        .then(res => {
            
            setInfoApi(infoApi.filter( e => e.id !== id ))
        })
        .catch(err => console.log(err))

    }

    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/` 
        axios.patch(url,data)
        .then(res => { 
            console.log(res.data)
            setInfoApi(infoApi.map( e => e.id === id ? res.data : e))//le paso res.data si lo encontro por su id, va actualizar ese elemento con los datos nuevos que le pase
        })
        .catch(err => console.log(err))

    }


    return [infoApi ,getApi ,postApi ,delateApi ,updateApi]
}

export default useCrud