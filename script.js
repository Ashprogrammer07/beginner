var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup")
var addbutton=document.getElementById("add-popup-button")
addbutton.addEventListener('click',function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})
var cancelbutton=document.getElementById("Cancel-text")
cancelbutton.addEventListener('click',function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})
var addbook = document.getElementById("add-book")
var container=document.querySelector(".container")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdesc=document.getElementById("bookdesc")
addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}<h2>
    <h5>${bookauthor.value}<h5>
    <p>${bookdesc.value}<p>
    <button class='delbtn'>Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})
var delete_item=document.getElementById("delete_item")
var delbutton = document.querySelector(".delbtn")
delbutton.addEventListener('click',function(event){
    event.target.parentElement.remove()
})