$(document).ready(function () {
    $("#ContentPlaceHolder1_docidentidad").attr("disabled", true);
    $("#ContentPlaceHolder1_telefono,#ContentPlaceHolder1_fax").mask("(999) 999-9999");

    $("#ContentPlaceHolder1_tipidentidad").change(function () {
        if ($(this).val() != 0) {
            $("#ContentPlaceHolder1_docidentidad").attr("disabled", false);

            if ($(this).val() != 0 && $(this).val() == 1) {

                $("#ContentPlaceHolder1_docidentidad").mask("9-99-9999999-9");

            } else if ($(this).val() != 0 && $(this).val() == 2) {

                $("#ContentPlaceHolder1_docidentidad").mask("999-9999999-9");

            }
        } else {
            $("#ContentPlaceHolder1_docidentidad").attr("disabled", true);
        }
        
    });
    
});
