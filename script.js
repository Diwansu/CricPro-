
const players = [
  {
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png",
  },
  {
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png",
  },
  {
    
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png",
  },
  {
   
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png",
  },
  {
    
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png",
  },
  {
    
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png",
  },
  {

    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg",
  },
  {
    
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg",
  },
  {
    
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg",
  },
  {
  
    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg",
  },
  {

    source:
      "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg",
  },
];


const imgdiv = document.getElementById("imgDivContainer");
const info = document.getElementById("information");



function display(i) {
  imgdiv.style.display = "block";
  info.setAttribute("src", players[i].source);
}

function removeDisplay() {
  imgdiv.style.display = "none";
  info.setAttribute("src", "");
}