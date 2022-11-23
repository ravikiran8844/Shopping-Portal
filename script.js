let itemCount=document.getElementById("itemCount");
let selectedSize=document.getElementById("selectedSize");
let selectedColor=document.getElementById("selectedColor");
let mobileImg=document.getElementById("mobileImg");

let brown=()=>{
    selectedColor.textContent="COLOR:Brown"
}
let green=()=>{
    selectedColor.textContent="COLOR:Green"
}
let purple=()=>{
    selectedColor.textContent="COLOR:Purple"
}
let blue=()=>{
    selectedColor.textContent="COLOR:Blue"
}

let firstImage=()=>{
    mobileImg.src="./images/Rectangle 1.png"
}
let secondImage=()=>{
    mobileImg.src="./images/Rectangle 4.png"
}
let thirdImage=()=>{
    mobileImg.src="./images/Rectangle 2.png"
}
let fourthImage=()=>{
    mobileImg.src="./images/Rectangle 3.png"
}

let xs=()=>{
    selectedSize.textContent="SIZE:XS";
}

let s=()=>{
    selectedSize.textContent="SIZE:S";
}
let m=()=>{
    selectedSize.textContent="SIZE:M";
}
let l=()=>{
    selectedSize.textContent="SIZE:L";
}
let xl=()=>{
    selectedSize.textContent="SIZE:XL";
}

let count=1;
itemCount.textContent=count;


let decrement=()=>{
    if (count<=1){
        count=1;
        itemCount.textContent=count;
    }
    else{
        count=count-1;
        itemCount.textContent=count;

    }
}

let increment=()=>{
    count=count+1;
    itemCount.textContent=count;
}

let addToCart=()=>{
    alert("The product has been added to the cart")
}