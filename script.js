
document.getElementById("details-form").addEventListener("submit", function(e){
  e.preventDefault();

  const params = {
    from_name: document.getElementById("user-name").value,
    email_id: document.getElementById("user-mail").value,
    message: document.getElementById("user-message").value
  };

  emailjs.send("service_6wtvcg8", "template_xzgg4pb", params)
  .then(() => {

    alert("Message Sent Successfully!");
    location.reload();
  })
  .catch((error) => {
    alert("Failed: " + error.text);
  });
});
const mobileMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
