$(document).ready(function(){
    initDatepicker("#birthday");
    
    initValidation("#user-data");
});

function initDatepicker(i) {
    $(i).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd.mm.yy',
        onClose: function() {
            // force the validation, and return input focus, to field
            $(this).valid();
            this.focus();
        }
    });
}

function initValidation(f) {
    $(f).validate(optionsForValidation());
}

function optionsForValidation() {
    var options = {
        debug: true,
        rules: {
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            birthday: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            gender: {
                required: true
            }
        },
        messages: {
            firstname: "Invalid first name",
            lastname: "Invalid last name",
            birthday: "Invalid birthday",
            email: "Invalid e-mail",
            gender: "Invalid gender",
        },
        submitHandler: function (form) {
            log("handleInput() invoked");
        },
        invalidHandler: function (form, validator) {
            log("handleInvalidInput() invoked: " + validator.numberOfInvalids());
        },
        success: function (label) {
            log("Validation successful");
        },
        wrapper: "li",
        errorLabelContainer: "#validation-messages"
    };

    return options;
}