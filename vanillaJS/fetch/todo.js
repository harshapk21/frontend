fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((res)=>res.products.slice(0,5))
.then((res)=>createList(res))

function createList(listData){
    const container = document.querySelector('.container-list');
    for(let i=0;i<listData.length;i++){
        const listItem = document.createElement('p');
        listItem.textContent = listData[i].title;
        container.appendChild(listItem)
    }
}