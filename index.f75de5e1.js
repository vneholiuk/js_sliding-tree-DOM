"use strict";
const tree = document.querySelector(".tree");
const li = tree.querySelectorAll("li");
for (const item of li){
    const span = document.createElement("span");
    item.prepend(span);
    span.append(span.nextSibling);
}
tree.addEventListener("click", function(e) {
    if (e.target.tagName !== "SPAN") return;
    const parentContainer = e.target.parentNode.querySelector("ul");
    if (!parentContainer) return;
    parentContainer.hidden = !parentContainer.hidden;
});

//# sourceMappingURL=index.f75de5e1.js.map
