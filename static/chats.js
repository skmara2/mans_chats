const ATJAUNOT=5000;

async function lasiChatu(){
    const atbilde=await fetch('/chats/lasi');
    const datuObjekts= await atbilde.json();
    raadiChataRindas(datuObjekts);
    await new Promise(resolve=>setTimeout(resolve, ATJAUNOT));
    lasiChatu();
}


function radiChatuVienkarsi(dati){
    const jaunaRinda="</br>";
    let chats="";
    let chataDiv=document.getElementById("chats");
    for(let rinda of dati ['chats']){
        chats=chats+rinda+jaunaRinda;
    }

    chataDiv.innerHTML=chats;
}
let kl=0;

async function suutiZinju(){
  
    let zinjasElements=document.getElementById('zinja0');
    let zinja0= zinjasElements.value;
    //console.log(zinja);
    zinjasElements.value="";
    
    if (zinja0 == "") {
    let n="Ierakstiet lietotājvārdu un nospiediet Pieteikties";
    console.log(n);
    document.getElementById("nav").value=n;
    }else{
      document.getElementById("nav").value="";
      let vv=zinja0;
      console.log(vv);
      document.getElementById("sveiciens").value="Sveicināti,";
      document.getElementById("sveiciens1").value=vv; 
      zinja0="Pievienojās "+zinja0;    
      console.log(zinja0);
      document.getElementById("b2").style.display = "block";
      document.getElementById("b1").style.display = "none";
      document.getElementById("zinja").style.display = "block";
      document.getElementById("zinja0").style.display = "none"; 
        const atbilde= await fetch('/chats/suuti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"chats": zinja0})
    });
    

const datuObjekts= await atbilde.json();
    
raadiChataRindas(datuObjekts);
}}

async function suutiZinju1(){
  
    let zinjasElements=document.getElementById('zinja');
    let zinja= zinjasElements.value;
    //console.log(zinja);
    zinjasElements.value="";
    
    if (zinja == "") {
    let n="Ierakstiet ziņu";
    console.log(n);
    document.getElementById("nav").value=n;
    }else{
      document.getElementById("nav").value="";
      let dd=new Date().toLocaleString();
      let v=document.getElementById("sveiciens1").value;
      zinja=v+":  "+" "+zinja+" "+" "+" "+dd;    
          console.log(zinja);
      
        const atbilde= await fetch('/chats/suuti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"chats": zinja})
    });
    

const datuObjekts= await atbilde.json();
    
raadiChataRindas(datuObjekts);
}}

let ievadesLauks = document.getElementById("zinja");
ievadesLauks.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
      
        suutiZinju1();

    }
})

/*var input = document.getElementById("zinja");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        alert("yes it works,I'm happy ");
    }
});*/



function raadiChataRindas(dati) {
    const chatUL = document.getElementById("chats");
    // novaacam ieprieksheejo saturu
    while (chatUL.firstChild) {
        chatUL.firstChild.remove();
    }
    for (let rinda of dati["chats"]) {
      chatLI = izveidoJaunuRindu(rinda);
      chatUL.appendChild(chatLI);
    }
    // noskrolleejam uz leju pie peedeejaa chata texta
    var chatScrollBox = chatUL.parentNode;
    chatScrollBox.scrollTop = chatScrollBox.scrollHeight;
  }
  
  
  function izveidoJaunuRindu(zinja) { 
    let newLI = document.createElement("li");
    newLI.className = "left clearfix"
    let newDiv = document.createElement("div"); 
    newDiv.className = "chat-body clearfix"
    let newContent = document.createTextNode(zinja); 
    newLI.appendChild(newDiv); 
    newDiv.appendChild(newContent); 
    return newLI;
  }

  