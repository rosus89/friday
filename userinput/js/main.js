let input = document.querySelector("#username");
let output = document.querySelector(".greeting");
let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    input.value.length > 3 ? output.innerHTML = input.value : output.innerHTML = "Username too short"
    input.value = ""
})

