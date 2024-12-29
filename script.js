// const deviceWidth = document.getElementById("sysWidth");
const form = document.getElementById("contact-form");

// console.log(deviceWidth);

// window.addEventListener("resize", () => {
//   deviceWidth.innerHTML = `${window.innerWidth}px`;
// });

const contact = document.querySelector("#contact");
const portfolio = document.querySelector("#portfolio");
const footerId = document.querySelector(".footer");

const pageContent = document.querySelectorAll("#pageContent");
pageContent.forEach((content) => {
  content.style.display = "none";
});
contact.style.display = "none";
portfolio.style.display = "none";

console.log(pageContent);

window.addEventListener("load", () => {
  const pageContent = document.querySelectorAll("#pageContent");
  pageContent.forEach((content) => {
    // content.style.display = "block";
  });

  contact.style.display = "block";
  portfolio.style.display = "block";
  footerId.style.display = "block";
  footerId.setAttribute("class", "footer");
  footerId.removeAttribute("style");

  let loader = document.getElementById("loader");
  let content = document.getElementById("content");

  loader.style.display = "none";
  content.style.display = "block";

  // Function handle contact form
  emailjs.init("o4j91-B7UVx9rxjNU");

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    let params = {
      lastname: document.getElementById("lastName").value,
      from_name: `${document.getElementById("firstName").value} ${
        document.getElementById("lastName").value
      }`,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log(params.from_name);

    //   if(params.lastname && params.message)
    const emailInput = document.getElementById("email");

    if (emailInput.checkValidity() && params.message) {
      emailjs
        .send("service_7q9kz4j", "template_pnnf8qa", params)
        .then((res) => {
          console.log("Success!" + res.status);
          response.setAttribute("class", "text-success");
          response.textContent = "Message sent successfully!";
        })
        .catch((error) => {
          console.error("Failed to send message:", error);
          response.style.color = "red";
          response.setAttribute("class", "text-danger");
          response.textContent =
            "Message failed. Check your connection and try again.";
        });

      console.log("yes");
    } else {
      response.setAttribute("class", "text-danger");
      response.textContent = "Invalid email address";
    }

    setTimeout(() => {
      response.textContent = "";
    }, 2000);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

  });
});

