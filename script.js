let url = "https://fakestoreapi.com/products"
let card = document.querySelector(".manCard")
let apiData
let apiDatafilter
let dataSerchFilter

function prodectCardData(item){

    let parentDiv = document.createElement("div")

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.className = "deleteBtn"
    deleteBtn.id = item.id

    deleteBtn.addEventListener("click", (event) =>{
        let deleteBtnId = event.target.id
        console.log(deleteBtn);
        parentDiv.remove()
        apiData.filter((item) =>item.id !== parseInt(deleteBtnId))
    })
    
    let updateBtn = document.createElement("button")
    updateBtn.innerText = "Edit"
    updateBtn.className = "updateBtn"
    updateBtn.id = item.id

    updateBtn.addEventListener("click",()=>{
        if (updateBtn.innerText === "Edit") {
            updateBtn.innerText = "Update"

            let names = document.createElement("p")
            let price = document.createElement("p")
            let rating = document.createElement("p")
            let count = document.createElement("p")
            let description = document.createElement("p")

            names.innerText = "Name"
            price.innerText = "Price"
            rating.innerText = "Rating"
            count.innerText = "Count"
            description.innerText = "Description"

            names.className = "names"
            price.className = "price"
            rating.className = "rating"
            count.className = "count"
            description.className = "descriptions"


            let nameInput = document.createElement("input")
            let priceInput = document.createElement("input")
            let ratingInput = document.createElement("input")
            let countInput = document.createElement("input")
            let descWordInput = document.createElement("input")

            nameInput.className = "nameInput"
       
            priceInput.className = "priceInput"
            priceInput.type = "number"
            ratingInput.className = "ratingInput"
            ratingInput.type = "number"
            countInput.className = "countInput"
            countInput.type = "number"
            descWordInput.className = "descWordInput"

            nameInput.value = item.title
            priceInput.value = item.price
            ratingInput.value = item.rating.rate
            countInput.value = item.rating.count
            descWordInput.value = item.description

            name.innerText = "";
            textPrice.innerText = "";
            textRating.innerText = "";
            textCount.innerText = "";
            descWord.innerText = "";

            name.appendChild(nameInput);
            textPrice.appendChild(priceInput);
            textRating.appendChild(ratingInput);
            textCount.appendChild(countInput);
            descWord.appendChild(descWordInput);

            cardlist.insertBefore(names, textRating)
            cardlist.insertBefore(nameInput, textRating)
            cardlist.insertBefore(price, textRating)
            cardlist.insertBefore(priceInput, textRating)
            cardlist.insertBefore(rating, textRating)
            cardlist.insertBefore(ratingInput,textRating)
            cardlist.insertBefore(count, textRating)
            cardlist.insertBefore(countInput, textRating)
            cardlist.insertBefore(description, textRating)
            cardlist.insertBefore(descWordInput, textRating)
        
        }else{
            updateBtn.innerText = "Edit"

            let newName = cardlist.querySelector(".nameInput").value
            let newPrice = cardlist.querySelector(".priceInput").value
            let newRating = cardlist.querySelector(".ratingInput").value
            let newCount = cardlist.querySelector(".countInput").value
            let newDesc = cardlist.querySelector(".descWordInput").value
 
            cardlist.querySelectorAll("input, .names, .price, .rating, .count, .descriptions").forEach(el => el.remove());

            name.innerText = `Name  -  ${newName}`
            textPrice.innerText = `Price       -     ₹${newPrice}`
            textRating.innerText = `Rating       -     ₹${newRating}`
            textCount.innerText = `Count       -     ₹${newCount}`
            descWord.innerText = `Descripton  -   ${newDesc.split(" ").slice(0,10).join(" ")+"..."}`

            item.title = newName
            item.price = parseFloat(newPrice)
            item.rating.rate = parseFloat(newRating)
            item.rating.count = parseFloat(newCount)
            item.description = newDesc

        }
    })

   let cardlist = document.createElement("div")
    cardlist.className = "card"

    let bageimg = document.createElement("img")
    bageimg.className = "bageimg"
    bageimg.src = item.image

    let name = document.createElement("p")
    name.className = "cardName"
    name.innerText = `Name: \u00A0-\u00A0\u00A0${item.title}`

    let textPrice = document.createElement("p")
    textPrice.className = "textPrice"
    textPrice.innerText = `Price: \u00A0\u00A0\u00A0\u00a0-\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item.price}`

    let textRating = document.createElement("p")
    textRating.className = "textRating"
    textRating.innerText = `Rating: \u00A0\u00a0\u00A0-\u00A0\u00A0\u00A0\u00A0 ${item.rating.rate} `

    let textCount = document.createElement("p")
    textCount.className = "textCount"
    textCount.innerText = `Count: \u00a0\u00a0\u00a0-\u00a0\u00a0\u00a0\u00a0\u00a0${item.rating.count}`

    let descWord = document.createElement("p")
    descWord.className = "textDescription"

    let word = item.description.split(" ").slice(0,10).join(" ") + ("...")
    descWord.innerText = `Description: \u00a0\u00a0- \u00a0${word}`



    card.appendChild(cardlist)
    cardlist.appendChild(bageimg)
    cardlist.appendChild(name)
    cardlist.appendChild(textPrice)
    cardlist.appendChild(textRating)
    cardlist.appendChild(textCount)
    cardlist.appendChild(descWord)
    card.appendChild(parentDiv)
    parentDiv.appendChild(cardlist)
    parentDiv.appendChild(deleteBtn)
    parentDiv.appendChild(updateBtn)
}



let getFacts = async ()=>{
    let responce = await fetch(url)
    console.log(responce);
    let data = await responce.json()
    console.log(data);
    apiData = data

    data.map((item)=>{
            prodectCardData(item)
    })
}
getFacts()

function manClothing(event){
   let option = event.target.value
   if(option == "All"){
    apiDatafilter = apiData

   }else{
    apiDatafilter = apiData.filter((product)=>{
        return product.category == option

    })
   }
   card.innerHTML = ""
    apiDatafilter.map((item)=>{
        prodectCardData(item)
    })
}

function changeProduct(event){
    let item = event.target.value
    dataSerchFilter = apiData

    dataSerchFilter = apiData.filter((data)=>{
        let itemuppercase = item.toUpperCase()
        let titleuppercase = data.title.toUpperCase()
        return titleuppercase.includes(itemuppercase)
    })
    card.innerHTML = ""
    dataSerchFilter.map((item)=>{
        prodectCardData(item)
    })
}