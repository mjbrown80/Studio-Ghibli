<template>
    <div class="card">
      <div id="poster">
        <img :src="film.movie_banner" style="width: 100%" alt="" />
      </div>
        {{ film.title }}
        {{ film.original_title }}
        {{ film.original_title_romanised }}
      </div>
</template>

<script>
export default {
  props: ["film"],
};
</script>

<style>
#poster {
  background: #4e1a3d;
  padding: 10px;
  align-content: center;
 
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  max-width: 300px;
  margin: 0 10% 10%;
  padding: 10px;
  text-align: center;
  background: #05e0e9;
  height: 400px;
  display: inline-block;
  
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0, 0.2);
}


</style>