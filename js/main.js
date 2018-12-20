document.addEventListener("DOMContentLoaded", function() {
var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});
Barba.Pjax.getTransition = function() {
  return HideShowTransition;
};
};
Barba.Prefetch.init();
Barba.Pjax.start();
