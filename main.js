Webcam.set({
height:300,
width:300,
image_format:"png",
png_quality:100
});
Webcam.attach("#hi");

function bye(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";
});}
console.log("ml5.version",ml5.version);