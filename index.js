const products_container = document.getElementById("products");



function createProductCard(product){
    const img = document.createElement("img");
            img.setAttribute("src", product.image)

    const title_product = document.createElement("h4");
        title_product.innerText = product.title;

    const category = document.createElement("span");
        category.innerText = product.category;
    const price = document.createElement("p");
        price.innerHTML = `Price: <span>$${product.price}</span>`;


    const product_card = document.createElement("div");
        product_card.classList.add("product");

        product_card.append(img, title_product, category, price);

        return product_card

}

const base_url = "https://fakestoreapi.com/products"

async function getAllProducts (){
    try {
        let result = await fetch(base_url)
        let products = await result.json()
        return products;
    } catch (error) {
        console.log(error);
    }
}



async function mountProducts(){
    let products = await getAllProducts()
    if (products && products.length> 0) {
        let product_cards= products.map(product=>createProductCard(product))
        products_container.append(...product_cards)
    }else{
        const errorElement = document.createElement("h4")
        errorElement.innerText = "Something went wrong with the products";
        errorElement.style.color = "red"
        products_container.appendChild(errorElement)
    }

    
}

mountProducts()