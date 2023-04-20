if(localStorage.getItem('Products') == null) {
    localStorage.setItem('Products',JSON.stringify([]))
}

let btns = document.querySelectorAll('button')

for(let btn of btns) {
    btn.onclick = function() {
        let productlist = JSON.parse(localStorage.getItem('Products'))

        let id = this.parentElement.parentElement.id
        let src = this.parentElement.previousElementSibling.firstElementChild.src
        let name = this.previousElementSibling.previousElementSibling.innerHTML
        let price = this.previousElementSibling.firstElementChild.innerHTML

        let toaster = document.querySelector('.toaster')

        toaster.style.right = '10%'

        setTimeout(() => {
            toaster.style.right = '-20%'
        }, 1000);

        let existProduct = productlist.find(product => product.Id === id)

        if(existProduct == undefined) {
            productlist.push({
                Id: id,
                Image: src,
                Name: name,
                Price: price,
                Count: 1,
            })

            toaster.innerHTML = 'Added'
            toaster.style.backgroundColor = 'green'
        }

        else{
            existProduct.Count += 1
            toaster.innerHTML = 'Already added'
            toaster.style.backgroundColor = 'red'
        }

        localStorage.setItem('Products',JSON.stringify(productlist))
        ShowCount()
    }
}

function ShowCount() {
    let count = document.querySelector('#count')
    let productlist = JSON.parse(localStorage.getItem('Products'))

    count.innerHTML = productlist.length
}

ShowCount()