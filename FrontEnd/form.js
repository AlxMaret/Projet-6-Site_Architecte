import { postWork } from "./fetch_functions.js";

const getFormData = () => {
  const submitForm = document.querySelector("#submit-form");
  const image = document.querySelector("#file-input").files[0];
  const title = document.querySelector("#titre").value;
  const category = document.querySelector("#categorie").value;

  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("category", category);

  //   Gets the token that will be used for the Fetch POST call
  const token = JSON.parse(localStorage.getItem("token"));

  //   Fetch POST call (fetch_functions.js)
  postWork(formData, token);
};

export { getFormData };
