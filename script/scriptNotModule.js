let port = 3300;
function showEditModal(id){
    $(".update-customer").attr("id", id);
    $.ajax({
        method: "GET",
        url: `http://localhost:${port}/customer/${id}`,
        success: (result)=>{
            showEditCustomer(result);
        }
    })
}
function showEditCustomer(result){
    $("#fullNameEdit").val(result.fullName);
    $("#emailEdit").val(result.email);
    $("#phoneEdit").val(result.phone);
    $("#addressEdit").val(result.address);
}