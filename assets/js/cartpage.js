const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const button = document.querySelector(".button");
const rating = document.querySelector(".rating");
const msg = document.querySelector(".msg");
const success = document.querySelector(".success");


function stars1(){
star1.style.color="#ff571e";
star2.style.color="#fff";
star3.style.color="#fff";
star4.style.color="#fff";
star5.style.color="#fff";
p1.style.display="block";
p2.style.display="none";
p3.style.display="none";
p4.style.display="none";
p5.style.display="none";
p1.style.color="red";
button.style.display="block"
}


function stars2(){
    star1.style.color="#ff571e";
    star2.style.color="#ff571e";
    star3.style.color="#fff";
    star4.style.color="#fff";
    star5.style.color="#fff";
    p1.style.display="none";
p2.style.display="block";
p3.style.display="none";
p4.style.display="none";
p5.style.display="none";
p2.style.color="orange";
button.style.display="block"
}
    
function stars3(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#000000";
    star4.style.color="#ffffff";
    star5.style.color="#ffffff";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="block";
    p4.style.display="none";
    p5.style.display="none";
    p3.style.color="lightblue";
    button.style.display="block"
   
    
    }
    
function stars4(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#000000";
    star4.style.color="#000000";
    star5.style.color="#ffffff";
    p1.style.display="none";
p2.style.display="none";
p3.style.display="none";
p4.style.display="block";
p5.style.display="none";
p4.style.color="lightgreen";
button.style.display="block"
    
    }
    
function stars5(){
    star1.style.color="#000000";
    star2.style.color="#000000";
    star3.style.color="#000000";
    star4.style.color="#000000";
    star5.style.color="#000000";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="block";
    p5.style.color="green";
    button.style.display="block"
    
    }

function submit(){
rating.style.display="none"
msg.style.display="none"
success.style.display="block"
button.style.display="none"

}


function submit(){
    rating.style.display="none"
    msg.style.display="none"
    success.style.display="block"
    button.style.display="none"
    
    }
    
    
    var url_string = window.location.href; // www.test.com?book=test
    var url = new URL(url_string);
    var paramValue = url.searchParams.get("book");
    fetchBook(paramValue);
    
    
    function fetchBook(paramValue){
        let xhr = new XMLHttpRequest();
        xhr.open("get","assets/db.json.txt",true);
        xhr.onload = function(){
            data =  this.response;
            data = JSON.parse(data);
            for(let x in data["books"]){
                if(data["books"][x].id == paramValue)
                {
                    document.getElementById("bookName").innerHTML = 'Book Name : '+ data["books"][x].name;
                    document.getElementById("book_img").src = data["books"][x].img_url;
                    document.getElementById("author").innerHTML = 'Author : '+ data["books"][x].author;
                    document.getElementById("discount_price").innerHTML = data["books"][x].discount_price;
                    document.getElementById("actual_price").innerHTML = data["books"][x].actual_price;
                }
    
                
            }
           
    
        };
        xhr.send();
    
    
    }