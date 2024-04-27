import {getProjects} from '../../data'

const useProjectModel = () => {
    const GetProjectsInfo = async() => {
        const projectData = await getProjects()
        console.log("Data desde el modelo",projectData)
        return projectData
    }

    return({
        GetProjectsInfo
    })

}

export default useProjectModel;
