let search = document.getElementById('search')
let productcontainer = document.getElementById('productcontainer')
let divCnt = productcontainer.querySelectorAll('div')

console.log('Total divs found:', divCnt)

search.addEventListener('keyup', function() {
    let searchVal = search.value.toLowerCase()
    console.log('User typed:', searchVal)  // shows what user is typing

    divCnt.forEach(function(div) {

        let productName = div.querySelector('h2')
        console.log('Current div:', div)           // shows which div forEach is on right now
        console.log('h2 found inside:', productName) // shows the <h2> element found

        if (productName) {
            let name = productName.textContent.toLowerCase()
            console.log('Product name text:', name) // shows the actual plant name text

            if (name.includes(searchVal)) {
                console.log(name, '✅ MATCH — showing')
                div.style.display = 'block'
            } else {
                console.log(name, '❌ NO MATCH — hiding')
                div.style.display = 'none'
            }
        }
    })
})