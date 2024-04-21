<template>
  <div>
    <ghibli-component v-for="film in films" v-bind:key="film.id" :film="film"/>
    <h1>Studio Ghibli</h1>
  </div>
</template>

<script>
import ghibliService from'../service/GhibliService'
import GhibliComponent from'../components/GhibliComponent.vue'
export default {

    components: {
        GhibliComponent
    },
    data(){
        return{
            films: []
        }
    },
    created(){
        ghibliService.getMovies()
            .then((response) => {
                console.log(response)
                this.films = response.data
            })
    }
}
</script>

<style>

</style>