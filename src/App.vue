<template>
<div>
  <lucas></lucas>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/educacao">Education</router-link> |
      <router-link to="/trabalho">Jobs</router-link> |
      <router-link to="/contato">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</div>
</template>

<script>
import lucas from '@/components/Navbar.vue';

export default {
  components: {
    lucas,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
