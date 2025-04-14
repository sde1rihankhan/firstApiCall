let url = "https://fakestoreapi.com/products"
let card = document.querySelector(".manCard")



let getFacts = async()=>{
    let responce =await fetch(url)
    console.log(responce);
    let data = await responce.json()
    console.log(data);
    data.map((item)=>{
    let text = document.createElement("p");
    text.innerText = item.title
    // card.appendChild(text)

    let cardlist = document.createElement("div")
    cardlist.className = "card"
    

    let name = document.createElement("p")
    let bageimg = document.createElement("img")
    bageimg.src = item.image
    cardlist.appendChild(bageimg)
    bageimg.className = "bageimg";

    name.innerText = `Name: \u00A0-\u00A0 ${item.title}`;
    name.className = "cardName"

    let nameSpan = document.createElement("span")
    nameSpan.className = "nameSpan"
    // name.innerText = item.title

    let textPrice = document.createElement("p")
        textPrice.innerText = `Price: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0₹${item.price}`
    textPrice.className = "textPrice"

    let priceSpan = document.createElement("span")
    priceSpan.className = "priceSpan"

    let textRating = document.createElement("p")
    textRating.innerText = `Rating: \u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item.rating.rate}`

    textRating.className = "textRating"

    let ratingSpan = document.createElement("span")
    ratingSpan.className = "ratingSpan"

    let textCount = document.createElement("p")
    textCount.innerText = `Count: \u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0₹${item.rating.count}`

    textCount.className = "textCount"

    let countSpan = document.createElement("span")
    countSpan.className = "countSpan"
     
    let textDescription = document.createElement("p")
    // textDescription.innerText = `Description: \u00A0\u00A0\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0\u00A0\u00A0₹${item.description}`
    textDescription.className = "textDescription"

    let descWord = document.createElement("p")
    descWord.className = "descWord"

    let words = item.description.split(" ").slice(0,15).join(" ") + ("...")
    descWord.innerText = `Description: \u00A0-\u00A0${words}`



    let description = document.createElement("p")
    description.className = "description"
    

    card.appendChild(cardlist)
    cardlist.appendChild(name)
    cardlist.appendChild(textPrice)
    cardlist.appendChild(textRating) 
    cardlist.appendChild(textCount)
    cardlist.appendChild(descWord)

    cardlist.appendChild(textDescription)
    cardlist.appendChild(description)


    // cardlist.appendChild(name)
    // textPrice.appendChild(priceSpan)
    // name.appendChild(nameSpan)
    // textRating.appendChild(ratingSpan)
    // textCount.appendChild(countSpan)
    })
    
}
getFacts()

