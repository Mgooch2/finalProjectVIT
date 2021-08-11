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
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let empty = document.getElementById("empty");
    let chkModal = document.getElementById("modal-chkout")
    let checkout = document.getElementById("cart-final");
    let chkclose = document.getElementById("chkclose");
    let count;


    
    
    //smooth scroll
    comment.onclick = function scroll(){
        comment.scrollIntoView({behavior: "smooth", block:"start"});
    }

    
    // add to cart button that adds item to cart  
    //when add to cart is clicked, quantity innertext = 1, total innertext = price
      cart.onclick =function addCart(){
          count= parseInt(quantity.innerText);
          count++;
          quantity.innerText = parseInt(count);
          total.innerText = "$" + parseFloat(price*count);
          cartBtn.innerText = "My Cart ("+ count+ ")";
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

 

    up.onclick = function upQty(){
        count = parseInt(quantity.innerText);
        count++;
        quantity.innerText= count;
        // total needs to be quantity times cost
        total.innerText = "$"+parseFloat(price)*count;

        cartBtn.innerText = "My Cart ("+ count + ")";
    }
    down.onclick = function downQty(){
        count = parseInt(quantity.innerText);
        count--;
        quantity.innerText= count;
        // total needs to be quantity times cost
        total.innerText = "$"+parseFloat(price)*count;
        //my Cart in background update
        cartBtn.innerText = "My Cart ("+ count+ ")";
    }
 
    //empty cart reset count to zero reset price to $0 reset my Cart

    empty.onclick = function emptyCart(){
        count = parseInt(0);
        quantity.innerText = count;
        total.innerText = "$"+ parseFloat(price)*count;
        cartBtn.innerText = "My Cart ("+ count + ")";


    }

    //checkout button brings up 

    checkout.onclick = function chkModalOpen(){
        closeModal();
        // modal.style.display = "none";
        document.getElementById("chk-total").innerText = "Your Total is: "+ total.innerText;
        chkModal.style.display = "block"; 
    }

    chkclose.onclick = function chkModalClose(){
        chkModal.style.display = "none";
    } 

});