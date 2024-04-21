import axios from 'axios'

const http = axios.create ({
    baseURL: 'https://ghibliapi.vercel.app/films'
})

export default{
    getMovies(){
        return http.get()
    }
}