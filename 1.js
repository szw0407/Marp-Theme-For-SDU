// import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"


function render() {
    var code = document.getElementById("code").value;
    var rendered = document.getElementById("rendered");
    rendered.innerHTML = code;
    hljs.highlightElement(document.getElementById("code"))
  }

function showPopup() {
    hljs.highlightElement(document.getElementById("code"))
    var code = document.getElementById("code").value;
    var popup = window.open("", "popup", "width=800,height=600");
    popup.document.write("<html><head><title>Rendered Code</title>");
    popup.document.write("<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css\">");
    popup.document.write("</head><body>");
    popup.document.write(code);
    popup.document.write("</body></html>");

}
