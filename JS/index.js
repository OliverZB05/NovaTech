const Cellphones = [
    {
        id: 1,
        name: "iPhone 13",
        brand: "Apple",
        price: 2000
    },

    {
        id: 2,
        name: "Samsung Galaxy A12",
        brand: "Samsung",
        price: 3000
    },

    {
        id: 3,
        name: "Samsung Galaxy 5G",
        brand: "Samsung",
        price: 5500
    },

    {
        id: 4,
        name: "POCO X3 PRO",
        brand: "POCO",
        price: 1000
    },

    {
        id: 5,
        name: "Redmi Note 10",
        brand: "Xiaomi",
        price: 1500
    },

    {
        id: 6,
        name: "OnePlus Nord 2 5G",
        brand: "OnePlus",
        price: 2500
    },

    {
        id: 7,
        name: "Moto G Power",
        brand: "Motorola.",
        price: 3500
    },

    {
        id: 8,
        name: "Google Pixel 5",
        brand: "Google",
        price: 5000
    }
];


const Tablets = [
    {
        id: 9,
        name: "Smart Kassel SK3401 7",
        brand: "Smart Kassel",
        price: 2000
    },

    {
        id: 10,
        name: "Lenovo M10",
        brand: "Lenovo",
        price: 3400
    },

    {
        id: 11,
        name: "iPad Pro 2gen A1701",
        brand: "Apple",
        price: 2200
    },

    {
        id: 12,
        name: "Samsung Note 10.1",
        brand: "Samsung",
        price: 1600
    },

    {
        id: 13,
        name: "Samsung Galaxy TabS7",
        brand: "Samsung",
        price: 4700
    },

    {
        id: 14,
        name: "XPLODE Tablet XP-1 10.1",
        brand: "XPLODE",
        price: 6400
    },

    {
        id: 15,
        name: "Philco TP7A6 7",
        brand: "Philco",
        price: 5400
    },

    {
        id: 16,
        name: "Alcatel 1T",
        brand: "Alcatel",
        price: 6000
    }
];


const OtherArticles = [
    {
        id: 17,
        name: "Xiaomi Redmi AirDots 3",
        brand: "Xiaomi",
        price: 2000
    },

    {
        id: 18,
        name: "Logitech H390",
        brand: "Logitech",
        price: 3400
    },

    {
        id: 19,
        name: "HyperX Cloud II",
        brand: "HyperX",
        price: 2200
    },

    {
        id: 20,
        name: "Aro De Luz Led",
        brand: "BODELTEC",
        price: 1600
    },

    {
        id: 21,
        name: "Joystick Para Ps4",
        brand: "BODELTEC",
        price: 4700
    },

    {
        id: 22,
        name: "Cornetas Db200",
        brand: "Bomber",
        price: 6400
    },

    {
        id: 23,
        name: "Xiaomi Redmi Watch",
        brand: "Xiaomi",
        price: 5400
    },

    {
        id: 24,
        name: "Samsung Watch Fit2", 
        brand: "Samsung",
        price: 6000
    }
];


const ShoppingCart = [];



//----------{ Product1 }----------
let Product1 = document.getElementById("SectionScroll-1");

for (let i = 1; i <= 8; i++){

    let Card = document.createElement("div");
        Card.className="rowProducts1__card";
        Product1.append(Card);

        let IMGCard = document.createElement("div");
        IMGCard.className="IMGCard" + i;
        Card.append(IMGCard);

        if(IMGCard.className == "IMGCard" + 1){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[0].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[0].price}</h2> 

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 2){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[1].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[1].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 3){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[2].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[2].price}</h2> 

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 4){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[3].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[3].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 5){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[4].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[4].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 6){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[5].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[5].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 7){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[6].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[6].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        if(IMGCard.className == "IMGCard" + 8){
            Card.innerHTML += ` <h2 class="TextCard">${Cellphones[7].name}</h2> 
                                <h2 class="TextPrice">$${Cellphones[7].price}</h2>

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        
}
//----------{ Product1 }----------


//----------{ Product2 }----------
let Product2 = document.getElementById("SectionScroll-2");

for (let i = 1; i <= 8; i++){

    let Card2 = document.createElement("div");
        Card2.className="rowProducts2__card";
        Product2.append(Card2);

        let IMGCard2 = document.createElement("div");
        IMGCard2.className="IMGCard2--" + i;
        Card2.append(IMGCard2);

        
        if(IMGCard2.className == "IMGCard2--" + 1){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[0].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[0].price}</h2> 

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 2){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[1].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[1].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 3){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[2].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[2].price}</h2> 

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 4){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[3].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[3].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 5){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[4].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[4].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 6){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[5].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[5].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 7){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[6].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[6].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard2.className == "IMGCard2--" + 8){
            Card2.innerHTML += ` <h2 class="TextCard">${Tablets[7].name}</h2> 
                                <h2 class="TextPrice">$${Tablets[7].price}</h2>

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        
}
//----------{ Product2 }----------


//----------{ Product3 }----------
let Product3 = document.getElementById("SectionScroll-3");

for (let i = 1; i <= 8; i++){

    let Card3 = document.createElement("div");
        Card3.className="rowProducts3__card";
        Product3.append(Card3);

        let IMGCard3 = document.createElement("div");
        IMGCard3.className="IMGCard3--" + i;
        Card3.append(IMGCard3);

        
        if(IMGCard3.className == "IMGCard3--" + 1){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[0].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[0].price}</h2> 

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 2){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[1].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[1].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 3){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[2].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[2].price}</h2> 

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 4){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[3].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[3].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 5){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[4].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[4].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 6){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[5].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[5].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 7){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[6].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[6].price}</h2> 
                                
                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }



        if(IMGCard3.className == "IMGCard3--" + 8){
            Card3.innerHTML += ` <h2 class="TextCard">${OtherArticles[7].name}</h2> 
                                <h2 class="TextPrice">$${OtherArticles[7].price}</h2>

                                <div class="RowFlex">
                                <button class="ButtonPay"><p class="TextButton">Comprar</p></button>
                                </div> `;
        }

        
}
//----------{ Product3 }----------



for (let i = 0; i <= 23; i++){
    let Click = document.getElementsByClassName("ButtonPay");
    Click[i].onclick = () =>{ 

    //===================={ Cellphones }====================
        if(Click[i].onclick == Click[0].onclick){
            let Question0 = confirm("¿Desea agregar " + Cellphones[0].name + " al carrito de compras?");

            while(Question0 == true){
                ShoppingCart.push(Cellphones[0]);
                break;
            }

            while(Question0 == false){
                break;
            }
        }



        if(Click[i].onclick == Click[1].onclick){
            let Question1 = confirm("¿Desea agregar " + Cellphones[1].name + " al carrito de compras?");

            while(Question1 == true){
                ShoppingCart.push(Cellphones[1]);
                break;
            }

            while(Question1 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[2].onclick){
            let Question2 = confirm("¿Desea agregar " + Cellphones[2].name + " al carrito de compras?");

            while(Question2 == true){
                ShoppingCart.push(Cellphones[2]);
                break;
            }

            while(Question2 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[3].onclick){
            let Question3 = confirm("¿Desea agregar " + Cellphones[3].name + " al carrito de compras?");

            while(Question3 == true){
                ShoppingCart.push(Cellphones[3]);
                break;
            }

            while(Question3 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[4].onclick){
            let Question4 = confirm("¿Desea agregar " + Cellphones[4].name + " al carrito de compras?");

            while(Question4 == true){
                ShoppingCart.push(Cellphones[4]);
                break;
            }

            while(Question4 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[5].onclick){
            let Question5 = confirm("¿Desea agregar " + Cellphones[5].name + " al carrito de compras?");

            while(Question5 == true){
                ShoppingCart.push(Cellphones[5]);
                break;
            }

            while(Question5 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[6].onclick){
            let Question6 = confirm("¿Desea agregar " + Cellphones[6].name + " al carrito de compras?");

            while(Question6 == true){
                ShoppingCart.push(Cellphones[6]);
                break;
            }

            while(Question6 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[7].onclick){
            let Question7 = confirm("¿Desea agregar " + Cellphones[7].name + " al carrito de compras?");

            while(Question7 == true){
                ShoppingCart.push(Cellphones[7]);
                break;
            }

            while(Question7 == false){
                break;
            }
        }
    //===================={ Cellphones }====================


    //===================={ Tablets }====================
        if(Click[i].onclick == Click[8].onclick){
            let Question8 = confirm("¿Desea agregar " + Tablets[0].name + " al carrito de compras?");

            while(Question8 == true){
                ShoppingCart.push(Tablets[0]);
                break;
            }

            while(Question8 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[9].onclick){
            let Question9 = confirm("¿Desea agregar " + Tablets[1].name + " al carrito de compras?");

            while(Question9 == true){
                ShoppingCart.push(Tablets[1]);
                break;
            }

            while(Question9 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[10].onclick){
            let Question10 = confirm("¿Desea agregar " + Tablets[2].name + " al carrito de compras?");

            while(Question10 == true){
                ShoppingCart.push(Tablets[2]);
                break;
            }

            while(Question10 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[11].onclick){
            let Question11 = confirm("¿Desea agregar " + Tablets[3].name + " al carrito de compras?");

            while(Question11 == true){
                ShoppingCart.push(Tablets[3]);
                break;
            }

            while(Question11 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[12].onclick){
            let Question12 = confirm("¿Desea agregar " + Tablets[4].name + " al carrito de compras?");

            while(Question12 == true){
                ShoppingCart.push(Tablets[4]);
                break;
            }

            while(Question12 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[13].onclick){
            let Question13 = confirm("¿Desea agregar " + Tablets[5].name + " al carrito de compras?");

            while(Question13 == true){
                ShoppingCart.push(Tablets[5]);
                break;
            }

            while(Question13 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[14].onclick){
            let Question14 = confirm("¿Desea agregar " + Tablets[6].name + " al carrito de compras?");

            while(Question14 == true){
                ShoppingCart.push(Tablets[6]);
                break;
            }

            while(Question14 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[15].onclick){
            let Question15 = confirm("¿Desea agregar " + Tablets[7].name + " al carrito de compras?");

            while(Question15 == true){
                ShoppingCart.push(Tablets[7]);
                break;
            }

            while(Question15 == false){
                break;
            }
        }
    //===================={ Tablets }====================


    //===================={ OtherArticles }====================
        if(Click[i].onclick == Click[16].onclick){
            let Question16 = confirm("¿Desea agregar " + OtherArticles[0].name + " al carrito de compras?");

            while(Question16 == true){
                ShoppingCart.push(OtherArticles[0]);
                break;
            }

            while(Question16 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[17].onclick){
            let Question17 = confirm("¿Desea agregar " + OtherArticles[1].name + " al carrito de compras?");

            while(Question17 == true){
                ShoppingCart.push(OtherArticles[1]);
                break;
            }

            while(Question17 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[18].onclick){
            let Question18 = confirm("¿Desea agregar " + OtherArticles[2].name + " al carrito de compras?");

            while(Question18 == true){
                ShoppingCart.push(OtherArticles[2]);
                break;
            }

            while(Question18 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[19].onclick){
            let Question19 = confirm("¿Desea agregar " + OtherArticles[3].name + " al carrito de compras?");

            while(Question19 == true){
                ShoppingCart.push(OtherArticles[3]);
                break;
            }

            while(Question19 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[20].onclick){
            let Question20 = confirm("¿Desea agregar " + OtherArticles[4].name + " al carrito de compras?");

            while(Question20 == true){
                ShoppingCart.push(OtherArticles[4]);
                break;
            }

            while(Question20 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[21].onclick){  
            let Question21 = confirm("¿Desea agregar " + OtherArticles[5].name + " al carrito de compras?");

            while(Question21 == true){
                ShoppingCart.push(OtherArticles[5]);
                break;
            }

            while(Question21 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[22].onclick){ 
            let Question22 = confirm("¿Desea agregar " + OtherArticles[6].name + " al carrito de compras?");

            while(Question22 == true){
                ShoppingCart.push(OtherArticles[6]);
                break;
            }

            while(Question22 == false){
                break;
            }
        }

        if(Click[i].onclick == Click[23].onclick){ 
            let Question23 = confirm("¿Desea agregar " + OtherArticles[7].name + " al carrito de compras?");

            while(Question23 == true){
                ShoppingCart.push(OtherArticles[7]);
                break;
            }

            while(Question23 == false){
                break;
            }
        }
    //===================={ OtherArticles }====================


            if(ShoppingCart.length < 6){
                    console.log("==============={ Carrito de compras }===============");
                        console.table(ShoppingCart);
                    console.log("==============={ Carrito de compras }===============");
            }else{
                console.log("LIMITE ALCANZADO");
                alert("LIMITE ALCANZADO");
            }

            if(ShoppingCart.length == 1){
                let SectionID = document.getElementById("SectionID");
                SectionID.innerHTML = ShoppingCart[0].id;

                let SectionName = document.getElementById("SectionName");
                SectionName.innerHTML = ShoppingCart[0].name;

                let SectionBrand = document.getElementById("SectionBrand");
                SectionBrand.innerHTML = ShoppingCart[0].brand;

                let SectionPrice = document.getElementById("SectionPrice");
                SectionPrice.innerHTML = ("$" + ShoppingCart[0].price);

                let FinalPrice = document.getElementById("FinalPrice");
                FinalPrice.innerHTML = ("$" + ShoppingCart[0].price);
            }


            if(ShoppingCart.length == 2){
                let SectionID2 = document.getElementById("SectionID2");
                SectionID2.innerHTML = ShoppingCart[1].id;

                let SectionName2 = document.getElementById("SectionName2");
                SectionName2.innerHTML = ShoppingCart[1].name;

                let SectionBrand2 = document.getElementById("SectionBrand2");
                SectionBrand2.innerHTML = ShoppingCart[1].brand;

                let SectionPrice2 = document.getElementById("SectionPrice2");
                SectionPrice2.innerHTML = ("$" + ShoppingCart[1].price);

                let FinalPrice2 = document.getElementById("FinalPrice");
                FinalPrice2.innerHTML = ("$" + (ShoppingCart[0].price + ShoppingCart[1].price));
            }


            if(ShoppingCart.length == 3){
                let SectionID3 = document.getElementById("SectionID3");
                SectionID3.innerHTML = ShoppingCart[2].id;

                let SectionName3 = document.getElementById("SectionName3");
                SectionName3.innerHTML = ShoppingCart[2].name;

                let SectionBrand3 = document.getElementById("SectionBrand3");
                SectionBrand3.innerHTML = ShoppingCart[2].brand;

                let SectionPrice3 = document.getElementById("SectionPrice3");
                SectionPrice3.innerHTML = ("$" + ShoppingCart[2].price);

                let FinalPrice3 = document.getElementById("FinalPrice");
                FinalPrice3.innerHTML = ("$" + (ShoppingCart[0].price + ShoppingCart[1].price + ShoppingCart[2].price));
            }


            if(ShoppingCart.length == 4){
                let SectionID4 = document.getElementById("SectionID4");
                SectionID4.innerHTML = ShoppingCart[3].id;

                let SectionName4 = document.getElementById("SectionName4");
                SectionName4.innerHTML = ShoppingCart[3].name;

                let SectionBrand4 = document.getElementById("SectionBrand4");
                SectionBrand4.innerHTML = ShoppingCart[3].brand;

                let SectionPrice4 = document.getElementById("SectionPrice4");
                SectionPrice4.innerHTML = ("$" + ShoppingCart[3].price);

                let FinalPrice4 = document.getElementById("FinalPrice");
                FinalPrice4.innerHTML = ("$" + (ShoppingCart[0].price + ShoppingCart[1].price + ShoppingCart[2].price + ShoppingCart[3].price));
            }


            if(ShoppingCart.length == 5){
                let SectionID5 = document.getElementById("SectionID5");
                SectionID5.innerHTML = ShoppingCart[4].id;

                let SectionName5 = document.getElementById("SectionName5");
                SectionName5.innerHTML = ShoppingCart[4].name;

                let SectionBrand5 = document.getElementById("SectionBrand5");
                SectionBrand5.innerHTML = ShoppingCart[4].brand;

                let SectionPrice5 = document.getElementById("SectionPrice5");
                SectionPrice5.innerHTML = ("$" + ShoppingCart[4].price);

                let FinalPrice5 = document.getElementById("FinalPrice");
                FinalPrice5.innerHTML = ("$" + (ShoppingCart[0].price + ShoppingCart[1].price + ShoppingCart[2].price + ShoppingCart[3].price + ShoppingCart[4].price));
            } 
}
}


        //----------{ SubmitButton }----------
            let Submit = document.getElementById("Submit");
            Submit.onclick = () =>{ 

                let SectionID = document.getElementById("SectionID");
                SectionID.innerHTML = "";

                let SectionName = document.getElementById("SectionName");
                SectionName.innerHTML = "";

                let SectionBrand = document.getElementById("SectionBrand");
                SectionBrand.innerHTML = "";

                let SectionPrice = document.getElementById("SectionPrice");
                SectionPrice.innerHTML = "";

                let FinalPrice = document.getElementById("FinalPrice");
                FinalPrice.innerHTML = "";
        


                let SectionID2 = document.getElementById("SectionID2");
                SectionID2.innerHTML = "";

                let SectionName2 = document.getElementById("SectionName2");
                SectionName2.innerHTML = "";

                let SectionBrand2 = document.getElementById("SectionBrand2");
                SectionBrand2.innerHTML = "";

                let SectionPrice2 = document.getElementById("SectionPrice2");
                SectionPrice2.innerHTML = "";



                let SectionID3 = document.getElementById("SectionID3");
                SectionID3.innerHTML = "";

                let SectionName3 = document.getElementById("SectionName3");
                SectionName3.innerHTML = "";

                let SectionBrand3 = document.getElementById("SectionBrand3");
                SectionBrand3.innerHTML = "";

                let SectionPrice3 = document.getElementById("SectionPrice3");
                SectionPrice3.innerHTML = "";



                let SectionID4 = document.getElementById("SectionID4");
                SectionID4.innerHTML = "";

                let SectionName4 = document.getElementById("SectionName4");
                SectionName4.innerHTML = "";

                let SectionBrand4 = document.getElementById("SectionBrand4");
                SectionBrand4.innerHTML = "";

                let SectionPrice4 = document.getElementById("SectionPrice4");
                SectionPrice4.innerHTML = "";



                let SectionID5 = document.getElementById("SectionID5");
                SectionID5.innerHTML = "";

                let SectionName5 = document.getElementById("SectionName5");
                SectionName5.innerHTML = "";

                let SectionBrand5 = document.getElementById("SectionBrand5");
                SectionBrand5.innerHTML = "";

                let SectionPrice5 = document.getElementById("SectionPrice5");
                SectionPrice5.innerHTML = "";


                if(ShoppingCart.length <= 5  && ShoppingCart.length !== 0 && ShoppingCart.length !== 1){
                    alert("¡Gracias por enviar los productos al carrito!");
                }

                if(ShoppingCart.length == 1){
                    alert("¡Gracias por enviar el producto al carrito!");
                }
                
                if(ShoppingCart.length == 0){
                    alert("Debes seleccionar un producto para poder enviar al carrito");
                }

                ShoppingCart.splice(0, 5);
            }
        //----------{ SubmitButton }----------
