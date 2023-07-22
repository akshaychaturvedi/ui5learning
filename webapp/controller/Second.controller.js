sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("app.controller.Second", {
        openDialog: function() {
            if (!this.oDialog) {
                this.oDialog = this.loadFragment({
                    name: "app.fragment.Dialog"
                })
            }

            this.oDialog.then((oDialog) => {
                oDialog.open()
            })
        },
        onCloseDialog: function() {
            this.oDialog.then((oDialog) => {
                oDialog.close()
            })
        }
    })

});