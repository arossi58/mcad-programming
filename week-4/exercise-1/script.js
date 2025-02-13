const myEmptyDiv = document.querySelector("#myEmptyDiv");

const heading = document.createElement("h1");
heading.innerHTML = "Llamas have four legs 🦙";
heading.addEventListener("click", headingClick);
myEmptyDiv.appendChild(heading);
function headingClick() {
    document.body.style.backgroundColor = "orange";
}