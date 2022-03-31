const numButtons=document.querySelectorAll(".buttonDesign")
        numButtons.forEach(item=>{
            item.addEventListener("click",clickNumber);
    })

const opeButtons=document.querySelectorAll(".operator")
    opeButtons.forEach(item=>{
        item.addEventListener("click",clickOperations);
})

const eqButton=document.querySelectorAll(".eqOperator")
    eqButton.forEach(item=>{
        item.addEventListener("click",evalFunc);
})

let num_array = []
let flag1=true

function clickNumber(){
    if(flag1==true){
        document.getElementById("result").value+=this.value;
        if(num_array.length==0){
            num_array[0]=this.value;
        }
        else{
        let newVal=num_array[num_array.length-1]+this.value;
        num_array[num_array.length-1]=parseInt( newVal);
        }
    }
    else if(flag1==false){
        document.getElementById("result").value+=this.value;
        
        num_array.push(parseInt(this.value))
        flag1=true;
    }

    
}

let oper_array = []    
function clickOperations(){
    flag1=false;
    document.getElementById("result").value+=this.value;
    oper_array.push(this.value)
}

function evalFunc(){
    let totalValue = num_array[0];

    for(i=0;i<num_array.length-1;i++){
        if (oper_array[i] == "+"){
            totalValue = totalValue + num_array[i+1];
        }
        else if(oper_array[i] == "-"){
            totalValue = totalValue - num_array[i+1];
        }
        else if(oper_array[i]=="*"){
            totalValue = totalValue * num_array[i+1];
        }
        else if(oper_array[i]=="/"){
            totalValue = totalValue / num_array[i+1];
        }
    }
    document.getElementById("result").value = totalValue;
}
            

