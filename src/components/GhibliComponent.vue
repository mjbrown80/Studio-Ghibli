<template>
  <div>
    {{ film.title }}
    {{ film.original_title }}
    <img :src="film.movie_banner" alt="">
    
  </div>
</template>

<script>
export default {

    props: 
        ["film"]
    
}
</script>

<style>

</style>