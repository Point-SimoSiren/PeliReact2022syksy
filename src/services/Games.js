import Axios from 'axios'

const baseUrl = 'https://localhost:7206/api/pelit'

// Hakee kaikki pelit
const getAll = () => {
    return Axios.get(baseUrl)
}

// Uuden lisäys
const addNew = (object) => {
    return Axios.post(baseUrl, object)
}

// Poistaminen id:n perusteella
const remove = (id) => {
    return Axios.delete(`${baseUrl}/${id}`)
}


export default { getAll, addNew, remove }
