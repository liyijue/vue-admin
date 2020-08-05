<template>
  <div>
    <Header />
    <div class="layout-warp">
      <Aside />
      <Main />
    </div>
  </div>
</template>

<script>
import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main'

export default {
  components: {
    Aside,
    Header,
    Main
  }
}
</script>

<style lang="scss" scoped>
.layout-warp {
  display: flex;
  flex-direction: row;
}
</style>
