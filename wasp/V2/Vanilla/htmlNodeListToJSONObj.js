<div id="foo">
  <h1>Hello</h1>
  <p class="bar">
    <span>World!</span>
  </p>
</div>

function mapHTMLToObject(node) {
  let obj = {};
  obj.type = node.tagName;
  // getAttributes returns only custom attributes while .attributes return all attrinutes
  if (node.getAttributeNames().length) {
    let props = {};
    node.getAttributeNames().forEach((attribute) => {
      props[attribute] = node.getAttribute(attribute);
    });
    obj.props = props;
  }
  // node.children ignores text nodes, comments
  if (node.children.length) {
    obj.children = Array.from(node.children).map((childNode) =>
      mapHTMLToObject(childNode)
    );
  } else {
    obj.children = node.innerText;
  }
  return obj;
}

const main = document.getElementById("foo");
console.log(mapHTMLToObject(main));
