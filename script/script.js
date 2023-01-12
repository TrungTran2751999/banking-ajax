import * as ajax from "./ajax.js";
import * as validate from "./validate.js";
import * as display from "./display.js";
let port = 3300;
let listSelector = ["fullName", "email", "password", "re-password", "phone", "address"];
let listSelectorEdit = ["fullNameEdit", "emailEdit", "phoneEdit", "addressEdit"];

display.showValidateEmpty(listSelector);
display.showValidateRepass("password", "re-password");

display.showValidateEmpty(listSelectorEdit);
display.showValidateRepass(listSelectorEdit);

ajax.getAllCustomer(port);

$(".create-customer").on("click", function () {
    ajax.createNewCustomer(port, listSelector);
});

$(".update-customer").on("click", function () {
    let id = $(".update-customer").attr("id");
    ajax.editCustomer(port, listSelectorEdit, id);
});





