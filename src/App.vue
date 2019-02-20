<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: '首頁' }">Home </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Page">Page</router-link>
      </li>
    </ul>
  </div>
</nav>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};

</script>


