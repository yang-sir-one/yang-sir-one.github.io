/*
 * @Author: yangzhihong
 * @Date: 2022-07-10 17:03:29
 * @LastEditors: yangzhihong
 * @LastEditTime: 2022-07-10 17:04:51
 * @FilePath: \golang_coded:\BLOG\hexoblog\themes\butterfly\source\js\crash_cheat.js
 * @Description: 
 */
var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '看不见我🙈~看不见我🙈~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ๑•̀ㅂ•́) ✧被发现了～';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });