/**
 * *************************************************苹果手机**********************************************
 */
 /**
  *解决用户弹起键盘收起的时候页面下不来，但是会导致个别按钮ios需要点击两次才会生效
  */
      $("input").blur(function () {
        window.scrollTo(0, document.documentElement.clientHeight);
     });

