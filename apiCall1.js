let url = "https://fakestoreapi.com/products"
let card = document.querySelector(".manCard")
let apiData
let apiDatafilter
let dataSerchFilter

function prodectCardData(item){
    let parentDiv = document.createElement("div")

     let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.id = item.id;

        deleteBtn.addEventListener("click", (event)=>{
        let deleteBtnId = event.target.id
            console.log(deleteBtnId);
            parentDiv.remove()
            apiData.filter((item) =>item.id !== parseInt(deleteBtnId))

        })

    let updateBtn = document.createElement("button")
    updateBtn.innerText = "Edit"
    updateBtn.className = "editBtn"
    updateBtn.id = item.id

    
        updateBtn.addEventListener("click",()=>{
        // let updateBtnId = event.target.id
        if(updateBtn.innerText === "Edit"){
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
        price.className = "prices"
        rating.className = "ratings"
        count.className = "counts"
        description.className = "descriptions"


        let nameInput = document.createElement("input")
        // nameInput.type = "text"
        nameInput.value = item.title
        nameInput.className = "nameInput"


        let priceInput = document.createElement("input")
        priceInput.type = "number"
        priceInput.value = item.price
        priceInput.className = "priceInput"


        let ratingInput = document.createElement("input")
        ratingInput.type = "number"
        ratingInput.value = item.rating.rate
        ratingInput.className = "ratinginput"

        let countInput = document.createElement("input")
        countInput.type = "number"
        countInput.value = item.rating.count
        countInput.className = "countInput"

        let descWordInput = document.createElement("input")
        // descWordInput.type = "text"
        descWordInput.value = item.description
        descWordInput.className = "descWordInput"

        
       
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
        cardlist.insertBefore(ratingInput, textRating)
        cardlist.insertBefore(count, textRating)
        cardlist.insertBefore(countInput, textRating)
        cardlist.insertBefore(description, textRating)
        cardlist.insertBefore(descWordInput, textRating)

            
        
        } else{
            updateBtn.innerText = "Edit"

            let newName = cardlist.querySelector(".nameInput").value
            let newPrice = cardlist.querySelector(".priceInput").value
            let newRating = cardlist.querySelector(".ratinginput").value
            let newCount = cardlist.querySelector(".countInput").value
            let newDesc = cardlist.querySelector(".descWordInput").value

            cardlist.querySelectorAll("input, .names, .prices, .ratings, .counts, .descriptions").forEach(el => el.remove());

            name.innerText = `Name  -  ${newName}`
            textPrice.innerText = `Price       -     ₹${newPrice}`
            textRating.innerText = `Rating       -     ₹${newRating}`
            textCount.innerText = `Count       -     ₹${newCount}`
            descWord.innerText = `Description  -   ${newDesc.split(" ").slice(0,15).join(" ") + "..."}`

            item.title = newName
            item.price = parseFloat(newPrice)
            item.rating.rate = parseFloat(newRating)
            item.rating.count = parseFloat(newCount)
            item.description = newDesc
}
    })

    let text =  document.createElement("p")
        text.innerText = item.title

        let cardlist = document.createElement("div")
        cardlist.className = "card"

        let name = document.createElement("p")
        let bageimg = document.createElement("img")
        bageimg.src = item.image
        name.innerText = `Name: \u00A0-\u00A0 ${item.title}`
        bageimg.className = "bageimg"
        name.className = "cardName"

        let textPrice = document.createElement("p")
        textPrice.innerText = `Price: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0₹${item.price}`
        textPrice.className  = "textPrice"

        //  let textRating = document.createElement("progress")
         let textRating = document.createElement("p")
         textRating.innerText = `Rating: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0 ${item.rating.rate}`
        textRating.className = "textRating"

        let textCount = document.createElement("p")
        textCount.innerText = `Count: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0₹ ${item.rating.count}`
        textCount.className = "textCount"

        let descWord = document.createElement("p")
        descWord.className = "descWord"

        let word = item.description.split(" ").slice(0,15).join(" ") + ("...")
        descWord.innerText = `Description:\u00A0-\u00A0 ${word}`

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

let getFacts = async()=>{
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
        apiDatafilter = apiData.filter((prodect)=>{
            return prodect.category==option;
        
           })
    }
        card.innerHTML = ""
        apiDatafilter.map((item)=>{

        prodectCardData(item)
   })
}

function changeProdect(event){
    let item = event.target.value
   dataSerchFilter = apiData.filter((data)=>{
    let itemuppercase = item.toUpperCase()
    let titleuppercase = data.title.toUpperCase()

    
    
    return titleuppercase.includes(itemuppercase)
    
    })
console.log(dataSerchFilter);
    card.innerHTML = ""
    dataSerchFilter.map((item)=>{
        prodectCardData(item)
        
    })
}