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
    function scroll(){
        comment.scrollIntoView({behavior: "smooth", block:"start"});
    }
    comment.addEventListener("click", scroll);

    
    // add to cart button that adds item to cart  
    //when add to cart is clicked, quantity innertext = 1, total innertext = price
      function addCart(){
          count= parseInt(quantity.innerText);
          count++;
          quantity.innerText = parseInt(count);
          total.innerText = "$" + parseFloat(price*count);
          cartBtn.innerText = "My Cart ("+ count+ ")";
      }   
      cart.addEventListener("click",addCart);
    

    // checkout button needs to open modal close button needs to close modal
    //opens modal on my Cart button click
    function openModal(){
        modal.style.display = "block";
    }
    myCart.addEventListener("click", openModal);

    //close modal on close button
    function closeModal(){
        modal.style.display = "none";
    }
    close.addEventListener("click", closeModal);

    //quantity button needs to count up and down and show number
    function upQty(){
        count = parseInt(quantity.innerText);
        count++;
        quantity.innerText= count;
        // total needs to be quantity times cost
        total.innerText = "$"+parseFloat(price)*count;

        cartBtn.innerText = "My Cart ("+ count + ")";
    }
    up.addEventListener("click",upQty);
    // down quantity
    function downQty(){
        count = parseInt(quantity.innerText);
        count--;
        quantity.innerText= count;
        // total needs to be quantity times cost
        total.innerText = "$"+parseFloat(price)*count;
        //my Cart in background update
        cartBtn.innerText = "My Cart ("+ count+ ")";
    }
    down.addEventListener("click",downQty);


    //empty cart reset count to zero reset price to $0 reset my Cart
    function emptyCart(){
        count = parseInt(0);
        quantity.innerText = count;
        total.innerText = "$"+ parseFloat(price)*count;
        cartBtn.innerText = "My Cart ("+ count + ")";
    }
    empty.addEventListener("click",emptyCart);


    //checkout button brings up modal
    //open modal
    function chkModalOpen(){
        closeModal();
        document.getElementById("chk-total").innerText = "Your Total is: "+ total.innerText;
        chkModal.style.display = "block"; 
    }
    checkout.addEventListener("click",chkModalOpen);
    
    //close modal
    function chkModalClose(){
        chkModal.style.display = "none";
        emptyCart();
    } 
    chkclose.addEventListener("click", chkModalClose);

    // leave comment functions
    let newRow;
    let newName;
    let newComment;
    let comTable = document.querySelector("tbody");
    let comm = document.getElementById("comment");


    function getName(){
        let input;
        let name = prompt("Please enter your name:","Anonymous");
        if(name == null || name ==""){
            input = "Submission Cancelled"
        }else{
            input = name;
        }
        return input;
    }
    function getComment(){
        let input;
        let comment = prompt("Please enter your comment", "Great Product");
        if(comment == null || comment ==""){
            input = "Submission Cancelled"
        }else{
            input = comment;
        }
        return input;
    }
    function revCom(){
        newRow = document.createElement("tr");
        newName = document.createElement("td");
        newComment = document.createElement("td");

        newName.innerText = getName();
        newComment.innerText = getComment();

        newRow.appendChild(newName);
        newRow.appendChild(newComment);

        comTable.appendChild(newRow);

    }
    comm.addEventListener("click", revCom)
});