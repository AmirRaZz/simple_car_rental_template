let current_value=document.getElementById("price-bar").value
document.getElementById("price-text").value = "$" + current_value
console.log(current_value)
function change(val){
    document.getElementById("price-text").value = "$" + val;
    if (val == 100){
        document.getElementById("price-text").value = "Max. $"+ val
    }
}