<template>
  <div id="app">
    <h1 class="title">{{ message }}</h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private message: string = 'Vue.ts TODO';

  private created() {
    this.$store.dispatch('loadData');
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  margin-top: 4rem;
}
</style>
