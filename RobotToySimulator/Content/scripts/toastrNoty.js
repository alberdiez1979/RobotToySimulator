toastrNotifications = {
    showToastrSuccess: function (message) {
        this.setDefaultToastrOptions();
        toastr.success(message);
    },

    showToastrWarning: function (message) {
        this.setDefaultToastrOptions();
        toastr.warning(message);
    },

    showToastrInfo: function (message) {
        this.setDefaultToastrOptions();
        toastr.info(message);
    },

    showToastrInfo: function (title, message) {
        this.setDefaultToastrOptions();
        toastr.info(message, title);
    },

    showToastrError: function (message) {
        this.setDefaultToastrOptions();
        toastr.error(message);
    },

    setDefaultToastrOptions: function () {

        toastr.options = {
            "closeButton": true,
            "newestOnTop": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
        }
    }
}