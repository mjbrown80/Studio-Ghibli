import axios from 'axios'

const http = axios.create ({
    baseURl: 'https://ghibliapi.vercel.app'
})

export default{
    getMovies(){
        return http.get()
    }
}