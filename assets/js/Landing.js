$(document).ready(function () {
  $("label").on("click", function () {
    $("label").css("font-weight", "400");
    $("label").css("width", "max-content");
    var elem = $("input[name='radio']").is(":checked");
    if (elem) {
      $(this).css("font-weight", "bold");
      $(this).css("width", "max-content");
    }
  });
});



$(document).ready(function () {
  $("#phone").on("click", function () {
    $("#phone").val("+90");
    $("#phone").mask("+00 000 000 0000");
  });
});





const button = document.querySelector('.top');
const displayButton = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};
const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
};
displayButton();
scrollToTop();



$(document).ready(function () {
  $(".hidden-reference-all-area").hide();
  $(".show-button").on("click", function () {
    $(".hidden-reference-all-area").slideToggle("slow");
  });
});




