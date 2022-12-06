var imagesArray = [
"LoaderGifs/anime-dance.gif",
"LoaderGifs/ezgif-3-1e544b7efc.gif",
"LoaderGifs/ezgif-3-6fa8063428.gif",
"LoaderGifs/ezgif-3-9c8191848f.gif",
"LoaderGifs/ezgif-3-674a5330ea.gif",
"LoaderGifs/ezgif-3-b076b23b68.gif",
"LoaderGifs/ezgif-3-bbf2e8d3dc.gif",
"LoaderGifs/ezgif-3-bcba85d0e1.gif",
"LoaderGifs/ezgif-3-d0cb1ff397.gif",
"LoaderGifs/ezgif-3-d7d344de03.gif",
];
function loader(){
    var num = Math.floor(Math.random() * (imagesArray.length)); 
    document.canvas.src = imagesArray[num];
    setInterval(function(){$(".loader").fadeOut("slow")},1500)
    /* document.querySelector(".preloader").style.display="none"; */
}