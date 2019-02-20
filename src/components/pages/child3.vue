<template>
  <div>
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">我是第三個</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
 
  props: {
    
  },
  created() {
      console.log(this.$route.params.id);
      const id = this.$route.params.id;
      this.$http.get(`http://randomusser.me/api/?seed=${id}`).then((re) =>{
          console.log(re);
      });
  },
};
</script>

