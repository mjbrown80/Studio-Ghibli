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
  background: #4e1a3d;
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
  border: #4e1a3d;
  border-style: outset;
}
.card-details {
  align-items: center;
}
.details-content {
    text-align: center;
    
}
.details-content p {
    margin: 0;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0, 0.2);
}
</style>