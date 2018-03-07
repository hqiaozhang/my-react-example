/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-20 16:52:17 
 * @Description: 页面缩放
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-20 16:52:45
 */

 import $ from 'jquery'

function zoom() {
  var x = window.innerWidth / 3360
  var y = window.innerHeight / 1890
  $('body').css('webkitTransform','scale(' + x + ',' + y + ')')    
  $('body').css('msTransform','scale(' + x + ',' + y + ')')       
  $('body').css('mozTransform','scale(' + x + ',' + y + ')')       
  $('body').css('oTransform','scale(' + x + ',' + y + ')')    
}
window.onresize = function(){
   zoom() 
}
zoom()