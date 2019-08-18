function handleChange(event) {
  console.log("Handle Change", event.target.name);
  console.log("Handle Change", event.currentTarget.name);
}
var form = document.getElementById("form");
form.addEventListener("change", handleChange);
