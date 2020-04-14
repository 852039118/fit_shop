<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide class="footer_guide" v-show="$route.meta.footerShow"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from "./components/footerGuide/FooterGuide";
  import {mapActions} from 'vuex'
  export default {
    mounted(){
      this.getAddress()
      // this.$store.dispatch('getAddress')
      // this.$store.dispatch('getCategorys')
      // this.$store.dispatch('getShops')
    },
    methods:{
      ...mapActions(['getAddress'])
    },
    components:{
      FooterGuide
    }
  }
</script >

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
