import * as ajax from "./ajax.js";
import * as validate from "./validate.js";
import * as display from "./display.js";
let port = 5500;
let listSelector = ["fullName", "email", "password", "re-password", "phone", "address"];
let listSelectorEdit = ["fullNameEdit", "emailEdit", "phoneEdit", "addressEdit"];

display.showValidateEmpty(listSelector);
display.showValidateRepass("password", "re-password");

display.showValidateEmpty(listSelectorEdit);
display.showValidateRepass(listSelectorEdit);

ajax.getAllCustomer(port);

$(".form-create-customer").on("submit", function (e) {
    ajax.createNewCustomer(port, listSelector);
    e.preventDefault();
});

$(".update-customer").on("click", function () {
    let id = $(".update-customer").attr("id");
    ajax.editCustomer(port, listSelectorEdit, id);
});





