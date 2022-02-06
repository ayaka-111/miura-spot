//マウスオーバーによるactiveの追加・削除
var parent = document.querySelectorAll(".has-sub");

  var node = Array.prototype.slice.call(parent, 0);

  node.forEach(function (element) {
    element.addEventListener(
      "mouseover",
      function () {
        element.querySelector(".sub").classList.add("active");
      },
      false
    );
    element.addEventListener(
      "mouseout",
      function () {
        element.querySelector(".sub").classList.remove("active");
      },
      false
    );
  });