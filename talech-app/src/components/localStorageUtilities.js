
export function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products')) || [];
}


export function saveToLocalStorage(productsArray) {
    localStorage.setItem('products', JSON.stringify(productsArray));
}

