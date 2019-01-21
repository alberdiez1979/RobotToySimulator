var myboard = {
    init: function () {
    },
    leftMovement: function () {
        var $icon = $("#iconJet");
        var degs = myboard.getRotationDegrees($icon) - 90;
        $("#iconJet").css("transform", "rotate(" + degs + "deg)");
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
            toastrNotifications.showToastrError("You must write *PLACE* in Command field, write number 0 To 5 in X and Y Coordinate and choose a valid option to Facing field. ");

        }
    },

    rightMovement: function () {

        var $icon = $("#iconJet");
        var degs = myboard.getRotationDegrees($icon) + 90;
        $("#iconJet").css("transform", "rotate(" + degs + "deg)");
    },

    moveUnit: function () {

        var $icon = $("#iconJet");
        var degs = myboard.getRotationDegrees($icon);

        var facingOptions = Math.cos(degs).toFixed(2).toString();

        //var facingOptions = $("#facingOptions option:selected").val();
        var $jet = $("#fighter-jet");
        var currentTd = $jet.closest("td");
        var currentTr = $jet.closest("tr");

        switch (facingOptions) {
            case "1.00": {

                if (currentTd.next().length !== 0) {
                    currentTd.next().html($jet);
                    currentTd.html("");
                }
                else {
                    toastrNotifications.showToastrError("The movement is not allowing, Try again!");

                }
                break;
            }
            case "-0.45":
                if (currentTr.next().length !== 0) {
                    currentTr.next().children().eq(currentTd.index()).html($jet);
                    currentTd.html("");
                }
                else {
                    toastrNotifications.showToastrError("The movement is not allowing, Try again!");
                }
                break;

            case "-0.60":
                if (currentTd.prev().length !== 0) {
                    currentTd.prev().html($jet);
                    currentTd.html("");
                }
                else {
                    toastrNotifications.showToastrError("The movement is not allowing, Try again!");
                }
                break;


            case "0.98":

                if (currentTr.prev().length !== 0) {
                    currentTr.prev().children().eq(currentTd.index()).html($jet);
                    currentTd.html("");
                }
                else {
                    toastrNotifications.showToastrError("The movement is not allowing, Try again!");
                }
                break;





            default:

                break;
        }
    },
    getRotationDegrees: function (obj) {
        var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
        if (matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle + 360 : angle;
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


        var $icon = $("#iconJet");
        var degs = myboard.getRotationDegrees($icon);
        var facingOptions = Math.cos(degs).toFixed(2).toString();

        var face = "";
        switch (facingOptions) {
            case "1.00": {

                face = "EAST";
                break;
            }
            case "-0.45":
                face = "SOUTH";
                break;

            case "-0.60":
                face = "WEST";
                break;


            case "0.98":
                face = "NORTH";
                break;

            default:
                break;
        }

        var $jet = $("#fighter-jet");
        var currentTd = $jet.closest("td");
        var currentTr = $jet.closest("tr");
        var msgInfo = "The toy is placing in the X-Coordinate " + currentTd.index() + " , in the Y-Coordinate " + currentTr.index() +
            " and facing " + face;
       
        toastrNotifications.showToastrInfo(msgInfo);
    }
}