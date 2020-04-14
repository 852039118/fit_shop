/*
  与后台交互模块(包含n个接口的请求函数)
  函数的返回值：promise对象
* */
import ajax from "./ajax";
// const BASE_URL = 'http://localhost:3000'
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
// export const reqAddress = (geohash) => ajax(BASE_URL + '/position/'+geohash)
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (latitude ,longitude ) => ajax(BASE_URL+'/shops',{latitude,longitude})
// 4、根据经纬度和关键字搜索商铺列表
// export const reqSearchShops = (geohash  ,keyword  ) => ajax('/search_shops',{geohash ,keyword })
// 5、获取一次性验证码
// export const reqCaptcha = () => ajax('/captcha')
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出

