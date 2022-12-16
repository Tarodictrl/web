var addSpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

function findChild(element, space, text) {
    var count = element.childNodes.length;

    if (element.nodeName == "#text") {
        if (element.data.trim().replace("\n") != "") {
            text = text + "<br>" + space + element.data;
        }
    }
    else {
        text = text + "<br>" + space + element.nodeName;
    }

    if (count == 0) {
        return text;
    }
    else if (count > 0) {
        for (var i = 0; i < count; i++) {
            text = findChild(element.childNodes[i], space + addSpace, text);
        }

        return text;
    }
}

function generateTree() {
    var tree = findChild(document.body, "", "");
    document.getElementById("tree__output").innerHTML += tree;
}