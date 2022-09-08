function addrow(){
    "use strict"
    var tableBody=document.getElementById("table-body");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var row=document.createElement("tr");

    // if((product_id=="") ||  (product_name == "") || (product_price== ""))
    // {
    //     alert("Please fill all the boxes");
    // }

    td1.innerHTML=document.getElementById("product_id").value;
    td2.innerHTML=document.getElementById("product_name").value;
    td3.innerHTML=document.getElementById("product_price").value;
    if((td1.innerHTML=="") ||  (td2.innerHTML== "") || (td3.innerHTML== ""))
    {
        alert("Please fill all the boxes");
    }
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    tableBody.appendChild(row);

// if(product_id=="" && (product_name == null)&& (product_price== null))
    // {
        // document.getElementById("Demo1").innerHTML="plse enter detailes";
        // alert("Please fill all the boxes")
    
    // else if(product_name == null){
    //     alert("Please fill all the boxes")
    // }
    // else{
    //     alert("Please fill all the boxes")
    // }
}
// }