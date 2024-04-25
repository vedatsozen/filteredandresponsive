
function allProducts() {


fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => {

let data = json.products;

let container = document.getElementById("container");

data.map(item=> {

container.innerHTML += `

<div class="productdiv">
<img  class="thumbnail" src=${item.thumbnail} />
<h1 class="title">${item.title}</h1>
<p class="description">${item.description}</p>
<h3>${item.price} $</h3>

</div>

`

})

})

};

allProducts();


function filterSmartphones() {

    
fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => {

let data = json.products;

    let container = document.getElementById("container");
    
    container.innerHTML = " "; // Clear previous content
    
    let smartphones = data.filter(item => item.category === "smartphones");

    smartphones.forEach(item => {
        container.innerHTML += `
            <div class="productdiv">
                <img class="thumbnail" src="${item.thumbnail}" />
                <h1 class="title">${item.title}</h1>
                <p class="description">${item.description}</p>
                <h3>${item.price} $</h3>
            </div>
        `;
    });
});

}


function filterLaptops() {

    
    fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(json => {
    
    let data = json.products;
    
        let container = document.getElementById("container");
        
        container.innerHTML = " "; // Clear previous content
        
        let smartphones = data.filter(item => item.category === "laptops");
    
        smartphones.forEach(item => {
            container.innerHTML += `
                <div class="productdiv">
                    <img class="thumbnail" src="${item.thumbnail}" />
                    <h1 class="title">${item.title}</h1>
                    <p class="description">${item.description}</p>
                    <h3>${item.price} $</h3>
                </div>
            `;
        });
    });
    
    }
            

    function filterGroceries() {

    
        fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(json => {
        
        let data = json.products;
        
            let container = document.getElementById("container");
            
            container.innerHTML = " "; // Clear previous content
            
            let groceries = data.filter(item => item.category === "groceries");
        
            groceries.forEach(item => {
                container.innerHTML += `
                    <div class="productdiv">
                        <img class="thumbnail" src="${item.thumbnail}" />
                        <h1 class="title">${item.title}</h1>
                        <p class="description">${item.description}</p>
                        <h3>${item.price} $</h3>
                    </div>
                `;
            });
        });
        
        }
                