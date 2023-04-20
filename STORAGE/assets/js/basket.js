function GetProducts() {
    let productlist = JSON.parse(localStorage.getItem('Products'))

    let x = ''

    productlist.forEach(product => {
        x += `
        <tr>
            <th id="${product.Id}" scope="row">${product.Id}</th>
            <td><img src=${product.Image}></td>
            <td>${product.Name}</td>
            <td><input type="number" min="1" value="${product.Count}"></td>
            <td>${product.Price}</td>
            <td>${((Number(product.Count)) * (Number(product.Price))).toFixed(2)}</td>
            <td><button class="btn btn-danger">Delete</button></td>
        </tr>
        `
    });

    document.querySelector('tbody').innerHTML = x

    if(productlist.length === 0) {
        document.querySelector('.alert').classList.remove('d-none')
        document.querySelector('table').classList.add('d-none')
    }

    else{
        document.querySelector('.alert').classList.add('d-none')
        document.querySelector('table').classList.remove('d-none')
    }
}

GetProducts()

let productlist = JSON.parse(localStorage.getItem('Products'))
let deletes = document.querySelectorAll('.btn')

for(let del of deletes) {
    del.onclick = function() {
        let id = this.parentElement.parentElement.firstElementChild.id
        let filteredProduct = productlist.filter(product => product.Id !== id)
        localStorage.setItem('Products', JSON.stringify(filteredProduct))

        let x = ''

        filteredProduct.forEach(product => {
            x += `
            <tr>
                <th id="${product.Id}" scope="row">${product.Id}</th>
                <td><img src=${product.Image}></td>
                <td>${product.Name}</td>
                <td><input type="number" min="1" value="${product.Count}"></td>
                <td>${product.Price}</td>
                <td>${((Number(product.Count)) * (Number(product.Price))).toFixed(2)}</td>
                <td><button class="btn btn-danger">Delete</button></td>
            </tr>
            `
        });

        document.querySelector('tbody').innerHTML = x
        window.location.reload()
    }
}

let inputs = document.querySelectorAll('input')

for(let input of inputs) {
    input.oninput = function() {
        let value = input.value

        let productlist = JSON.parse(localStorage.getItem('Products'))

        productlist.forEach(product => {
            product.Count = value
        });

        localStorage.setItem('Products', JSON.stringify(productlist))
        window.location.reload()
    }
}