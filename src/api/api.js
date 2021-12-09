import axios from 'axios'

export const fetchImages = async (searchValue, page, limit) => {
    const {data} = await axios.get('https://www.flickr.com/services/rest/', {params: {
        method: "flickr.photos.search",
        api_key:"da1cfeaed68e0dfb536fcdd9597bcab9",
        tags: searchValue,
        extras: "url_s,tags",
        format: "json",
        nojsoncallback: 1,
        per_page: limit,
        page: page
    }})
    
    return data
}
