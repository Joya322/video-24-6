const sections = document.querySelectorAll("section");
// sections.forEach(section => section.style.border = "2px solid red");

sections.forEach(function (section) {
    section.style.border = "2px solid lightblue";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "5px";
    section.style.padding = "10px";
    section.style.backgroundColor = "lightgray"
})

