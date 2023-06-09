// All the visual changes that happen on the front-end when the user is logged-in (if a token in stored in localStorage)

const editModeStatus = () => {
  const btnLog = document.querySelector("#btn-login");
  const btnModify = document.querySelector(".modal-btn");
  const editTopBar = document.querySelector(".header__editMode");

  const btnModify2 = document.querySelector("#iconModify2");
  const btnModify3 = document.querySelector("#iconModify3");
  const logLink = document.querySelector(".log-link");

  if (localStorage.hasOwnProperty("token")) {
    editTopBar.style.display = "flex";
    btnModify.style.display = "inline-block";
    btnModify2.style.display = "flex";
    btnModify3.style.display = "flex";

    // Hide the log-in button
    btnLog.style.display = "none";

    // Create a log-out button
    const btnLogOut = document.createElement("a");
    btnLogOut.innerText = "logout";
    btnLogOut.classList.add("hover");
    btnLogOut.addEventListener("click", () => {
      logLink.removeChild(btnLogOut);
      btnLog.style.display = "inline-block";
      localStorage.clear();
      editModeStatus();
    });

    logLink.appendChild(btnLogOut);
  } else {
    editTopBar.style.display = "none";
    btnModify.style.display = "none";
    btnModify2.style.display = "none";
    btnModify3.style.display = "none";
  }
};

export { editModeStatus };
