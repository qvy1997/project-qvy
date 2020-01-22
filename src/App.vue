<template>
  <div id="app">
    <div class="background-header">
      <div class="container Header">
        <headerVue />
      </div>
    </div>
    <div class="mainPage">
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
