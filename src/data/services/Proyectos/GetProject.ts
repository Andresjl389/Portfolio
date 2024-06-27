import axios from "axios";
import {FastApi} from '../../../domain/interfaces'

export const getProjects = async() =>{
    try{
        const headers = {'content-type': 'application/json'}
        const response = await axios.get(`${FastApi.API_URL}/get_tech_stack`,{headers})

        const projectData = response.data
        console.log('Respose from getProject', projectData)
        return projectData
    }catch(error){
        console.log('Error al obtener los datos ',error)
    }
}