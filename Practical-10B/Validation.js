function checkAlphaNumeric(e) {

    if ((e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122))
        return true;

    return false;
}

function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }

        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32)
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}

function IsDecimal(e, obj) {
    var chrCode = (e.which) ? e.which : event.keyCode
    if (chrCode == 45) { // Check dash(-) Position
        var currentRange = document.selection.createRange();
        var workRange = currentRange.duplicate();
        obj.select();
        var allRange = document.selection.createRange();
        var pos = 0;

        while (workRange.compareEndPoints("StartToStart", allRange) > 0) {
            workRange.moveStart("character", -1);
            pos++;
        }
        currentRange.select();

        if (pos > 0) {
            return false
        } else {
            return true
        }
    }
    if (e.type == 'blur' && obj.value != "") {
        var exp = obj.value;
        var r = new RegExp("[0-9/]");
        if (obj.value.match(",") == ",") {
            obj.value = obj.value.replace(",", '');
        }
        if (exp.match(r) == null) {
            obj.value = ""
            return false;
        }
    }
    if (chrCode == 46) { // Check dot(.)
        if (obj.value.indexOf(".") > 0) {
            return false;
        }
    }
    return (chrCode > 47 && chrCode < 58) || chrCode == 8 || chrCode == 45 || chrCode == 46 ? true : false;
}