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
         document.title = 'ηδΈθ§ζπ~ηδΈθ§ζπ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ΰΉβ’Μγβ’Μ) β§θ’«εη°δΊο½';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });