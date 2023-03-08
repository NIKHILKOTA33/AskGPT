
function Ask(){
const question = document.getElementById("input1").value;
document.getElementById("input1").value = "";
document.getElementById("output1").innerHTML =question;
document.getElementById("output2").innerHTML = "typing...";
axios.post("http://localhost:3000/chat",{
    question,
}).then((response)=>{
    
    document.getElementById("output2").innerHTML = response.data.answer;

})

}