<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  /**
   * 根据屏幕大小自适应
   * px/rem = 20
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
#app {
    width: 96rem;
    height: 56rem;
    padding-bottom: 25%;
    overflow: hidden;
    background: url("./assets/bg22.png") center no-repeat #101631;
    background-size: contain;
}
</style>
