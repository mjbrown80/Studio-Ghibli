<template>
  <div class="container">
    <div
      class="card"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div class="front-card-details" v-show="!isHovering">
        <div id="movie-poster">
          <img :src="film.image" style="width: 100%" />
        </div>
      </div>
      <div class="back-card-details" v-show="isHovering">
        <div id="poster">
          <img :src="film.movie_banner" alt="" />
        </div>
        <div class="card-details">
          <div class="details-content">
            <p>{{ film.title }}</p>
            <p>{{ film.original_title }}</p>
            <p>{{ film.original_title_romanised }}</p>
            <div class="synopsis">Synopsis: {{ film.description }}</div>
            <p>Director: {{ film.director }}</p>
            <p>Release Date: {{ film.release_date }}</p>
            <p>Running time :{{ film.running_time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["film"],
  data() {
    return {
      isHovering: false,
    };
  },
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
  width: 100%;
}
.container {
  width: 300px;
  height: 100%;
  margin: 20px;
  padding: 10px;
}
.container:hover > .card {
  cursor: pointer;
  transform: rotateY(180deg);
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 10px;
  text-align: center;
  background: #05e0e9;
  height: 100%;
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
  transform: rotateY(0deg);
}
.card-details {
  align-items: center;
  color: #4e1a3d;
  font-size: 20px;
  margin-top: 0.5rem;
  height: 100%;
  overflow-y: auto;
}
.back-card-details {
  background-color: #05e0e9;
  transform: rotateY(180deg);
  display: none;
  z-index: 1;
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
  transform: rotateY(180deg);
}
.card:hover .back-card-details {
  display: block;
  transform: rotateY(0deg);
}
.details-content {
  transform: rotateY(180deg);
  font-size: medium;
}
.synopsis {
  max-height: 100px;
  overflow-y: auto;
  border: #ff2768;
  border-style: outset;
  padding: 10px;
}
</style>