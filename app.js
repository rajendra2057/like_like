const btnParent=document.getElementById('btnParent')

function noHandler(){
    if (btnParent.style.cssText.includes("column-reverse")){
        btnParent.style.cssText=("flex-direction:column")
    }
    else{
        btnParent.style.cssText=("flex-direction:column-reverse")
    }
}


function messageHandler(){
    alert("Thank you, I like you too")
}