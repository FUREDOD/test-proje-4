<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/user-dashboard">User Dashboard</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="$router.push('/user-dashboard')">
        Go to User Dashboard
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    //HelloWorld,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    if (
      route.matched.length > 0 &&
      route.matched[0].meta.requiresAuth &&
      !store.getters.isAuthenticated
    ) {
      router.push("/login");
    }
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

.home {
  margin-top: 30px;
}
</style>
