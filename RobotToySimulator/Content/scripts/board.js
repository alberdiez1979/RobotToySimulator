var myboard = {
    init: function () {
    },
    leftMovement: function () {
        var $jet = $("#fighter-jet");
        var currentTd = $jet.closest("td");
        currentTd.html('');
        $jet.html("<i id=\"iconJet\" class=\"fa fa-fighter-jet fa-rotate-180\"></i>");
        currentTd.html($jet);
    },

    placeMovement: function () {

        var commandValue = $("#commandId").val();
        var xCoordinate = $("#xCoordinateId").val();
        var yCoordinate = $("#yCoordinateId").val();
        var facingOptions = $("#facingOptions option:selected").val();

        if (commandValue.trim() == "PLACE" && commandValue.trim() != "" && facingOptions != "0") {
            var $jet = $("#fighter-jet");
            var currentTr = $jet.closest("tr");
            var currentTd = $jet.closest("td");
            var newTr = $('#testTable tr').eq(xCoordinate - 1);
            var newTd = $('#testTable tr td').eq(yCoordinate - 1);
            switch (facingOptions) {
                case "1":
                    $jet.html("<i id=\"iconJet\" class=\"fa fa-fighter-jet fa-rotate-180\"></i>");
                    break;
                case "2":
                    $jet.html("<i id=\"iconJet\" class=\"fa fa-fighter-jet fa-rotate-270\"></i>");
                    break;
                case "3":
                    $jet.html("<i id=\"iconJet\" class=\"fa fa-fighter-jet fa-rotate-90\"></i>");
                    break;
                case "4":
                    $jet.html("<i id=\"iconJet\" class=\"fa fa-fighter-jet\"></i>");
                    break;
            }
            if (currentTr.index() != newTr.index() || currentTd.index() != newTd.index()) {
                newTr.children().eq(newTd.index()).html($jet);
                currentTd.html('');
            }
        }
        else {
            $('#messageId').text('You must write *PLACE* in Command field, write number 0 To 5 in X and Y Coordinate and choose a valid option to Facing field. ')
            $(".myAlert-top").show();
            setTimeout(function () {
                $(".myAlert-top").hide();
            }, 2000);
        }
    },

    rightMovement: function () {
        var $jet = $("#fighter-jet");
        $jet.html("<i id=\"iconJet\" class=\"fa fa-fighter-jet\"></i>");
    },

    moveUnit: function () {
        var facingOptions = $("#facingOptions option:selected").val();
        var $jet = $("#fighter-jet");
        var currentTd = $jet.closest("td");
        var currentTr = $jet.closest("tr");

        switch (facingOptions) {
            case "1":
                if (currentTd.prev().length !== 0) {
                    currentTd.prev().html($jet);
                    currentTd.html("");
                }
                else {
                    $('#messageId').text('The movement is not allowing, Try again!');
                    $(".myAlert-top").show();
                    setTimeout(function () {
                        $(".myAlert-top").hide();
                    }, 2000);
                }
                break;
            case "2":
                if (currentTr.prev().length !== 0) {
                    currentTr.prev().children().eq(currentTd.index()).html($jet);
                    currentTd.html("");
                }
                else {
                    $('#messageId').text('The movement is not allowing, Try again!');
                    $(".myAlert-top").show();
                    setTimeout(function () {
                        $(".myAlert-top").hide();
                    }, 2000);
                }
                break;
            case "3":
                if (currentTr.next().length !== 0) {
                    currentTr.next().children().eq(currentTd.index()).html($jet);
                    currentTd.html("");
                }
                else {
                    $('#messageId').text('The movement is not allowing, Try again!');
                    $(".myAlert-top").show();
                    setTimeout(function () {
                        $(".myAlert-top").hide();
                    }, 2000);
                }
                break;
            case "4":
                if (currentTd.next().length !== 0) {
                    currentTd.next().html($jet);
                    currentTd.html("");
                }
                else {
                    $('#messageId').text('The movement is not allowing, Try again!');
                    $(".myAlert-top").show();
                    setTimeout(function () {
                        $(".myAlert-top").hide();
                    }, 2000);
                }
                break;
            default:
                $('#messageId').text('You must select a valid Facing option if you want move the toy.');
                $(".myAlert-top").show();
                setTimeout(function () {
                    $(".myAlert-top").hide();
                }, 2000);
                break;
        }
    },
    isNumberKey: function (evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode != 46 && charCode > 31
          && (charCode < 48 || charCode > 57))
            return false;

        return true;
    },
    report: function () {
        var msgInfo = '';
        var facingOptionsValue = $("#facingOptions option:selected").val();
        var facingOptionsText = $("#facingOptions option:selected").text();
        var $jet = $("#fighter-jet");
        var currentTd = $jet.closest("td");
        var currentTr = $jet.closest("tr");
        var msgInfo = "The toy is placing in the X-Coordinate " + currentTd.index() + " , in the Y-Coordinate " + currentTr.index();
        if (facingOptionsValue == 0) {
            msgInfo = msgInfo + " and there is not valid facing option selected";
        }
        else {
            msgInfo = msgInfo + " and facing " + facingOptionsText;
        }
        $('#reportMsgId').text(msgInfo);
        $(".myInfo-top").show();
    }
}