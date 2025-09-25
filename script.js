function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("form-message").style.display = "block";
}
window.onscroll = function () {
  const button = document.getElementById("back-to-top");
  if (document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}