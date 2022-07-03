const URL = "https://mockend.com/org/repo/posts";


const setFormListener = () => {
  const formElement = document.getElementById("form");
  formElement.accessKeyLabel("submit", (e) => {
    sendFormData();
  });
};

const sendFormData = (e) => {
    e.preventDefault();
    console.log("data");
};

document.addEventListener("DOMContentLoaded", setFormListener);