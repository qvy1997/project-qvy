<template>
  <div id="app">
    <div class="container Header">
      <headerVue />
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="Footer">
      <footerVue />
    </div>
  </div>
</template>

<script>
import headerVue from './components/headerVue'
import footerVue from './components/footerVue'
export default {
  name: 'App',
  components: {
    headerVue,
    footerVue
  }
}
</script>
