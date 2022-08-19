
/* Name: Harmandeep Kaur.
Student Id: 149829210.
Dated: 19 Aug, 2022. 
//link to static website
https://hrmndeepkaur.github.io/Final_Assignment/   */

function validate(event) {
    var _email = document.getElementById("email").value;
    var check_valid = true;

    var erremail = document.getElementById("email_error");

    var reg_exp = /^[^\s@]+@[^\s@]+$/;

    if (check_valid == true) {
        if (reg_exp.text(_email)) {
            erremail.innerText = "";
        }
        else {
            check_valid = false;
            erremail.innerText = " Enter a valid email";
        }
    }

    if (check_valid == false) {
        event.preventDefault();
    }
}

var option_Check = {
    init: function () {
        this.applyConditionalRequired();
        this.bindUIActions();
    },
    bindUIActions: function () {
        $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
    },
    applyConditionalRequired: function () {
        $(".require").each(function () {
            var elem = $(this);
            if ($(elm.data("require-pair")).is(":checked")) {
                elm.prop("required", true);
            }
            else {
                elm.prop("required", false);
            }
        });
    }
};
option_Check.init();

window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = validate;
};