function validateEmpty(listSelector){
    for(let i=0; i<listSelector.length; i++){
        if($("#"+listSelector[i]).val()===""){
            return false;
        }
    }
    return true;       
}

function validateRePass(selectorPass, selectorRepass){
    let valuePass = $("#"+selectorPass).val();
    let valueRepass = $("#"+selectorRepass).val();
    if(valuePass != valueRepass && valuePass == ""){
        return false;
    }else{
        return true;
    }
}

export{validateEmpty, validateRePass}