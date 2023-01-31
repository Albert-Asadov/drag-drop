let img = document.querySelectorAll(".image");
let zone = document.querySelectorAll(".dropZone")
let item = document.querySelectorAll(".item");

item.forEach((img) =>{

    img.addEventListener("dragstart",function(event){

        event.dataTransfer.setData("id", event.target.id);

    });

});
zone.forEach((items)=>{

    items.addEventListener("dragover", function(event){
        event.preventDefault();
    });

    items.addEventListener("drop", function(event){
        let id = event.dataTransfer.getData("id");
        let DragElem = document.getElementById(id);
        let item = this.children[0];
        item.append(DragElem);
    });

});