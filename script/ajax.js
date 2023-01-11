import * as display from "./display.js"; 
import * as validate from "./validate.js";
function getAllCustomer(port){
    let result = [];
    $.ajax({
        method: "GET",
        url: `http://localhost:${port}/customer`,
        success: (result)=>{
            display.showAllCustomer(result);
        }
    })
    return result;
}
function getCustomer(id){
    $.ajax({
        method: "GET",
        url: `http://localhost:${port}/customer/${id}`,
        success: (result)=>{
            display.showEditCustomer(result);
        }
    })
}

function createNewCustomer(port,listSelector){
    if(validate.validateEmpty(listSelector) && validate.validateRePass("password","re-password")){
        $.ajax({
            method: "POST",
            url: `http://localhost:${port}/customer`,
            data:{
                "fullName": $("#"+listSelector[0]).val(),
                "email": $("#"+listSelector[1]).val(),
                "password": $("#"+listSelector[2]).val(),
                "address": $("#"+listSelector[4]).val(),
                "phone": $("#"+listSelector[5]).val(),
                "balance": 0,
                "deleted": 0,
            },
            success: display.showAlert(true, "Create Customer Successfully !")
        })
    }else{
        display.showAlert(false, "Create Customer Failed !")
    }
}
function editCustomer(port,listSelector,id){
    if(validate.validateEmpty(listSelector) && validate.validateRePass("password","re-password")){
        $.ajax({
            method: "PATCH",
            url: `http://localhost:${port}/customer/${id}`,
            data:{
                "fullName": $("#"+listSelector[0]).val(),
                "email": $("#"+listSelector[1]).val(),
                "password": $("#"+listSelector[2]).val(),
                "address": $("#"+listSelector[3]).val(),
                "blance": $("#"+listSelector[5]).val(),
                "deleted": 0,
            },
            success: display.showAlert(true, "Create Customer Successfully !")
        })
    }else{
        display.showAlert(false, "Create Customer Failed !")
    }
}
export {getAllCustomer, createNewCustomer, editCustomer, getCustomer};
