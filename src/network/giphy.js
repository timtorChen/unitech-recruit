import axios from 'axios'

const apiKey = "OzoboDgNohhKCJsdIsZBBYLerisSvcOP"
const base = "https://api.giphy.com/v1"
const trendEndpoint = "gifs/trending"

const getTrends = async ( {page=0, perPage=20} )=>{
    const res = (await axios.get(`${base}/${trendEndpoint}`,{
        params:{
            api_key: apiKey,
            limit: perPage,
            offset: page*perPage
        }
    })).data

    const images = res.data
    return images
}

export default {
    getTrends
}