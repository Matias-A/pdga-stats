let elems = document.getElementsByClassName("pane-page-title");
if (elems[0] !== undefined) {
    let elemdiv1 = elems[0];
    let elemdiv2 = elemdiv1.getElementsByClassName("pane-content")[0];
    if (elemdiv2 !== undefined) {
        let text = elemdiv2.getElementsByTagName("h1")[0];
        text.innerHTML += " (extension working)";
    }
}
