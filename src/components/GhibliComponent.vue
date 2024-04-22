<template>
  <div class="container">
    <div class="card">
      <div class="front-card-details">
        <div id="poster">
          <img :src="film.movie_banner" style="width: 100%" alt="" />
        </div>
        <div class="card-details">
          <div details-content>
            <p>{{ film.title }}</p>
            <p>{{ film.original_title }}</p>
            <p>{{ film.original_title_romanised }}</p>
            <p>{{ film.description }}</p>
            <p>{{ film.director }}</p>
            <p>Release Date {{ film.release_date }}</p>
            <p>Running time {{ film.running_time }}</p>
          </div>
          <div class="back-card-details">
            <div id="movie-poster">
            <img :src="film.image" style="width: 100%" />
            </div>
            <p>{{ film.title }}</p>
          </div>
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
  background: #ff2768;
  padding: 10px;
  align-content: center;
  border-radius: 2rem;
}
#poster img {
  border-radius: 2rem;
}
.container {
  width: 400px;
  height: 700px;
  perspective: 800px;
}
.container:hover > .card {
  cursor: pointer;
  transform: rotateY(180deg);
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 20px;
  padding: 10px;
  text-align: center;
  background: #05e0e9;
  height: 700px;
  border: #ff2768;
  border-style: outset;
  border-radius: 2rem;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 1500ms;
}

.front-card-details .back-card-details {
  position: absolute;
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
}
.front-card-details {
  /* height: 100%;
  width: 100%;
  position: relative; */
  transform: rotateY(0deg);
}
.card-details {
  align-items: center;
  color: #4e1a3d;
  font-size: 20px;
  margin-top: 40px;
}
.front-card-details {
}
.back-card-details {
  background-color: #05e0e9;
  position: absolute;
  transform: rotateY(180deg);
  top: 0;
  left: 0;
}
#movie-poster {
  background: #ff2768;
  padding: 10px;
  align-content: center;
  border-radius: 2rem;
}
#movie-poster img {
  border-radius: 2rem;
}
.card:hover .front-card-details {
    transform: rotateY(-180deg);
}
.card:hover .back-card-details {
    transform: rotateY(0deg);
}
</style>