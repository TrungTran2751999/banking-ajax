function showAllCustomer(results){
    results.map((result, index)=>{
        let tableRow = 
        `<tr>
            <th scope="row">${index+1}</th>
            <td>${result.fullName}</td>
            <td>${result.email}</td>
            <td>${result.address}</td>
            <td>${result.address}</td>
            <td style="text-align: center;">
                <button type="button" id="editt-customer${result.id}" class="btn btn-outline-primary" data-toggle="modal" onclick="showEditModal(${result.id})" data-target="#exampleModalEdit"><i class="fas fa-edit"></i> Edit</button>
                <button type="button" class="btn btn-outline-danger" onclick="showAlertDelete(${result.id})">
                    <i class="fas fa-edit"></i> Delete
                </button>
            </td>
        </tr>`;
        document.querySelector("tbody").insertAdjacentHTML("beforeend",tableRow);
    })
}
function showEditCustomer(result){
    $("#fullNameEdit").val(result.fullName);
    $("#emailEdit").val(result.email);
    $("#phoneEdit").val(result.phone);
    $("#addressEdit").val(result.address);
}
function showAlert(status, message){
    if(status){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}
function showValidateRepass(selectorPass, selectorRepass){
    $("#"+selectorRepass).on("input", function () {
        let valuePass = $("#password").val();
        let valueRepass = $("#re-password").val();
        console.log(valuePass, valueRepass)
        if(valuePass !== valueRepass){
            $(`#error${selectorRepass}`).html(`Repassword is not right`);
            $("#"+selectorRepass).css({
                "border-color": "red"
            });
        }else{
            $(`#error${selectorRepass}`).html(``);
                $("#"+selectorRepass).css({
                    "border-color": "green"
                });
        } 
    });
}
function showValidateEmpty(listSelector){
    listSelector.map((selector)=>{
        $("#"+selector).on("input", function () {
            if($("#"+selector).val()===""){
                $(`#error${selector}`).html(`${selector} is invalid`);
                $("#"+selector).css({
                    "border-color": "red"
                });
            }else{
                $(`#error${selector}`).html(``);
                $("#"+selector).css({
                    "border-color": "green"
                });
            }
        });
    })
}
export{showAllCustomer, showAlert, showValidateRepass, showValidateEmpty, showEditCustomer}