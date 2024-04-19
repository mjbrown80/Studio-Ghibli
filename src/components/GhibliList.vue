<template>
  <div>

  </div>
</template>

<script>
import ghibliService from'../service/GhibliService'
export default {

    created(){
        ghibliService.getMovies()
            .then((response) => {
                console.log(response)
            })
    }
}
</script>

<style>

</style>