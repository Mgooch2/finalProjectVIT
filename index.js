document.addEventListener("DOMContentLoaded", (event) => {
    // variables
    let comment = document.querySelector(".revCom");
    let cart = document.querySelector(".cart");
    let myCart = document.querySelector(".myCart");
    let modal = document.getElementById("modal");
    let close = document.getElementById("close");
    let quantity = document.getElementById("quantity");
    let price = document.getElementById("price").innerText;
    let total = document.getElementById("total");
    let cartBtn = document.getElementById("myCart")

    
    
    //smooth scroll
    comment.onclick = function scroll(){
        comment.scrollIntoView({behavior: "smooth", block:"start"});
    }

    
    // add to cart button that adds item to cart  
    //when add to cart is clicked, quantity innertext = 1, total innertext = price
      cart.onclick =function addCart(){
          quantity.innerText = parseInt(1);
          total.innerText = "$" + parseFloat(price);
          cartBtn.innerText = "My Cart ("+ quantity.innerText + ")";
      }   
    
    

    // checkout button needs to open modal close button needs to close modal
    //opens modal on my Cart button click
    myCart.onclick = function openModal(){
        modal.style.display = "block";
    }

    close.onclick = function closeModal(){
        modal.style.display = "none";
    }

    //quantity button needs to count up and down and show number
    let up = document.getElementById("up");
    let down = document.getElementById("down");

    // total needs to be quantity times cost
});