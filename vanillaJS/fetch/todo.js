fetch('https://dummyjson.com/products')
  .then((res) => {
    return res.json();
  })
  .then((res) => res.products.slice(0, 5))
  .then((res) => createList(res))
  .catch((err) => alert(err));
/**
   * Doing res.json() is important to see the actual response from the api.
   * and it returns a promise whose resolved valuen is json , 
   * thats why .then() after .json.
   * 
REFER SCREENSHOT important.png for good info related to JSON , Java script objects,
res.json() , json.parse() & stringify()
*/

const random = {
  id: Date.now(),
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  images: ['https://cdn.dummyjson.com/product-images/1/1.jpg'],
};

function createList(listData) {
  const container = document.querySelector('.container-list');
  for (let i = 0; i < listData.length; i++) {
    const listItem = document.createElement('p');
    listItem.textContent = listData[i].title;
    container.appendChild(listItem);
  }
  const addButton = document.createElement('button');
  addButton.textContent = 'Add New Dummy Product';
  addButton.addEventListener('click', addDummyProduct);
  container.appendChild(addButton);
}

/**
 * 
When making a POST request with data using methods like fetch or XMLHttpRequest, you typically need to stringify 
the data before sending it because the body of an HTTP request can only contain strings or binary data. 
JSON (JavaScript Object Notation) is a common format for sending structured data, 
and JSON.stringify() converts a JavaScript object into a JSON string.

Here's why you should stringify the data before sending it in a POST request:

Data Format: Most server-side frameworks and APIs expect data to be sent in a specific format, such as JSON. 
By stringifying your JavaScript object using JSON.stringify(), you ensure that the data is formatted correctly
 before sending it.

Content-Type Header: When you send JSON data in a POST request, you typically need to set the Content-Type header 
to application/json to indicate to the server that the request body contains JSON data. 
Stringifying the data allows you to set this header appropriately.
 */

function addDummyProduct() {
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      random,
    }),
  })
    .then((res) => res.json())
    .then((res) => alert(`Product with Id ${res.id} added successfully`));
}
