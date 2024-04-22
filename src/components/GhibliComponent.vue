<template>
  <div >
    <div class="card">
      <div id="poster">
        <img :src="film.movie_banner" style="width: 100%" alt="" />
      </div>
      <div class="card-details">
        <div details-content>
            <p>{{ film.title }}</p>
            <p>{{ film.original_title }}</p>
            <p>{{ film.original_title_romanised }}</p>
            <p>{{ film.director }}</p>
            <p>Release Date {{ film.release_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["film"],
};
</script>

<style scoped>
#poster {
  background: #FF2768;
  padding: 10px;
  align-content: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  margin: 20px;
  padding: 10px;
  text-align: center;
  background: #05e0e9;
  height: 400px;
  border: #FF2768;
  border-style: outset;
}
.card:hover {
    transform: scale(1.1);
}
.card-details {
  align-items: center;
  color: #4E1A3D;
  font-size: 20px;
  margin-top: 40px;
  
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0, 0.2);
}
</style>