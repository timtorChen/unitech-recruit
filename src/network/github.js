import axios from 'axios'

const base = "https://api.github.com/users"

const getRepos = async( {username} )=>{
    return (await axios.get(`${base}/${username}/repos`)).data
}

const getGists = async( {username} )=>{
    return (await axios.get(`${base}/${username}/gists`)).data
}

export default {
    getRepos,
    getGists,
}