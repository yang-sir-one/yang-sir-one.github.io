/*
 * @Author: your name
 * @Date: 2022-03-08 13:00:35
 * @LastEditTime: 2022-07-10 11:14:39
 * @LastEditors: yangzhihong
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \golang_coded:\BLOG\hexoblog\themes\butterfly\source\js\rdmbkg.js
 */
//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/10.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/11.png)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/9.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/1.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/12.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/14.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/13.jpg)"
  "url(../img/bg1/bg/1.png)",
  "url(../img/bg1/bg/2.jpg)",
  "url(../img/bg1/bg/3.jpg)",
  "url(../img/bg1/bg/4.jpg)",
  "url(../img/bg1/bg/2.jpg)",
  "url(../img/bg1/bg/5.jpg)",
  "url(../img/bg1/bg/6.jpg)",
  "url(../img/bg1/bg/2.jpg)",
  "url(../img/bg1/bg/7.png)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/10.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/11.png)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/9.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/1.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/12.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/14.jpg)",
  // "url(https://cdn.jsdelivr.net/gh/yang-sir-one/yangimg/13.jpg)"
  "url(../img/bg1/bg/1.png)",
  "url(../img/bg1/bg/2.jpg)",
  "url(../img/bg1/bg/3.jpg)",
  "url(../img/bg1/bg/4.jpg)",
  "url(../img/bg1/bg/2.jpg)",
  "url(../img/bg1/bg/5.jpg)",
  "url(../img/bg1/bg/6.jpg)",
  "url(../img/bg1/bg/2.jpg)",
  "url(../img/bg1/bg/7.png)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
