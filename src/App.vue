<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  /**
   * 根据屏幕大小自适应
   * px/rem = 40
   */
  function resize() {
    window.setPro = 1;
    (function(doc, win) {
      var docEl = doc.documentElement,
        resizeEvt =
          "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          window.setPro = clientWidth / 960;
          docEl.style.fontSize = 10 * window.setPro + "px";
        };
      recalc();
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);
  }
  resize();
</script>

<style lang="scss">
@import './assets/font/font.css';
#app {
    width: 96rem;
    height: 54rem;
    padding-bottom: 25%;
    overflow: hidden;
    background-size: contain;
}
</style>
