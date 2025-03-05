
const str = "Red brown fox";
const tags = [
  [1, 3, "a"],
  [5, 7, "b"],
];
// starting & ending index are always strictly pointed to index element.
// Difference lies in how we include the tags & element
// for starting index , we first add tag & add element but in end index we // first add ele & then closning tag
const resultStr = "";

// Stack again helps with keeping track of parsing
function Stack() {
  let items = [];
  let top = 0;
  //Push an item in the Stack
  this.push = function (element) {
    items[top++] = element;
  };

  //Pop an item from the Stack
  this.pop = function () {
    return items[--top];
  };

  //Peek top item from the Stack
  this.peek = function () {
    return items[top - 1];
  };
}

// Having an instance in stack is very helpful with persistence of text , end index etc at multiple levels
function Tag(start, end, tag, text = "") {
  this.start = start;
  this.end = end;
  this.text = text;
  this.tag = tag;
  this.length = this.end - this.start;
}

// stack & having a Tag instance has made up to a deadly combo with persistence of text & also proritising parsing.

function parseStringToHTML(str, tags) {
  // having a array trace helps with avoiding string indices(parseInt or Number) with object.
  let trace = Array(str.length).fill(null);
  const stack = new Stack();
  // Storing tags based on starting tag index
  for (let i = 0; i < tags.length; i++) {
    let itag = tags[i];
    const [start, end, tag] = itag;
    const newTag = new Tag(start, end, tag);
     // Ideally we should have a new function that does this
    if (!trace[start]) trace[start] = [];
    trace[start] = [...trace[start], newTag];
    trace[start].sort((tag1, tag2) => tag2.length - tag1.length);
  }

  stack.push(new Tag(0, Number.MAX_SAFE_INTEGER, ""));

  for (let i = 0; i < str.length; i++) {
    // each time trace is found for that index , we push that node to stack to isolate & track text opening , closing & content & later add this up to parent.
    while (trace[i] && trace[i].length) {
      const current = trace[i].shift();
      current.text = current.text + `<${current.tag}>`;
      // This is triggered only incase of over-lapping problems , for non-overlapping , prev stack instance is resolved
      if (current.end > stack.peek().end) {
        // important to do +1
        const split = new Tag(stack.peek().end + 1, current.end, current.tag);
        current.end = stack.peek().end;
        // As said before , separate fn could have helped with sorting automatically , refer LB
        trace[stack.peek().end + 1] = [split];
      }
      stack.push(current);
    }
    // very smartly designed
    stack.peek().text += str[i];
    
    //To handle multiple tags needed to be end at same char in str.
    // The split done & new trace index introduced helps here as well
    while (stack.peek().end === i) {
      stack.peek().text += `</${stack.peek().tag}>`;
      const temp = stack.peek().text;
      stack.pop();
      stack.peek().text += temp;
    }
  }
  document.getElementById("output").innerText = stack.peek().text;
}

console.log(parseStringToHTML(str, tags), "<p>hello</p>");
