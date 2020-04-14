<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title=address.name>
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key=index>
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key=index>
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>   <!--{{category.title}}-->
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>

    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>

  import HeaderTop from "../../components/headerTop/HeaderTop";
  import ShopList from "../../components/ShopList/ShopList";

  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import {mapActions,mapState} from 'vuex'

  export default {
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      this.$store.dispatch('getCategorys')  //获取商品分类


    },
    computed:{
        ...mapState(['address','categorys']),

      categorysArr(){
        let arr = this.$store.state.categorys
        let arrCut = []
        let arrNew = []
        //如果数组长度大于8,就一直把它的前8个切除为二维数组的子数组
        while (arr.length > 8 ){
          arrCut = arr.splice(0,8);
          arrNew.push(arrCut);
          arrCut = []
        }
        //剩余的小于等于8的作为二维数组的最后一个子数组
        arrNew.push(arr);
        return arrNew
      }
    },
    watch:{ //监视商品分类categorys数组，获取到商品分类后就立即创建swiper实例对象
      categorysArr(){
        this.$nextTick(() => {  //数据一旦更新，执行回调函数，更新页面。
          //创建一个Swiper实例对象，来实现轮播
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    components: {
      HeaderTop,
      ShopList
    }
  }


</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
