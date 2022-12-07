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
let sliderimg = document.querySelector("#sliderimg");
var sliderimgarray = [
    "../img/kid1.jpg",
    "../img/kid2.jpg",
    "../img/kid3.jpg",
    "../img/kid4.jpg",
    "../img/kid5.jpg",
    "../img/kid6.jpg",
    "../img/kid7.jpg",
    ];
let slidertext = document.querySelector('.content1');
var quatesarray = [
    ""
]
function loader(){
    var num = Math.floor(Math.random() * (imagesArray.length)); 
    document.canvas.src = imagesArray[num];
    setInterval(function(){
        $(".loader").fadeOut("slow")},1500);       
    setInterval(function(){
        var num = Math.floor(Math.random() * (sliderimgarray.length));
        var num1 = Math.floor(Math.random() * (quatesarray.length));
        sliderimg.src = sliderimgarray[num];
        slidertext.textContent = quatesarray[num1];
    },5000);
    
    
}