<template>
  <div class="hello">
  <router-link to="/Page/" >卡一</router-link>
  <router-link to="/Page/child2">卡二</router-link>
  <router-link to="/Page/child3">卡三</router-link>
   <div class="card" style="width: 18rem;">
   <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
 
  props: {
    
  },
};
</script>

