sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/ValueState'
], function(Controller, ValueState) {
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
        },
        formatScoreState: function(iValue) {
            if (iValue > 90) {
                return ValueState.Success
            } else if (iValue > 60) {
                return ValueState.Warning
            } else return ValueState.Error
        },
        formatName: function(sFname, sLname) {
            return sFname + ' ' + sLname
        }
    })

});