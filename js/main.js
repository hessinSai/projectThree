$(document).ready(function () {
  $(".carousel").carousel({
    interval: 3000
  });

  // navbar click
  $(".navbar-nav .nav-item a").on("click", function () {
    $(this).parent().addClass("active").siblings().removeClass("active");

    $("html, body").animate(
      {
        scrollTop: $($(this).data("link")).offset().top
      },
      500
    );
  });

  // Testimonials carousel
  const previous = $(".prevTes");
  const next = $(".nextTes");

  previous.on("click", goPrev);
  next.on("click", goNext);

  function goPrev() {
    // define selectors
    let prev = $(".tes-item.prev");
    let active = $(".tes-item.active");
    let next = $(".tes-item.next");

    // remove classes and add
    prev.removeClass("prev").addClass("active");
    next.removeClass("next").addClass("prev");
    active.removeClass("active").addClass("next");
  }
  function goNext() {
    // define selectors
    let prev = $(".tes-item.prev");
    let active = $(".tes-item.active");
    let next = $(".tes-item.next");

    // remove classes and add
    prev.removeClass("prev").addClass("next");
    next.removeClass("next").addClass("active");
    active.removeClass("active").addClass("prev");
  }
});
