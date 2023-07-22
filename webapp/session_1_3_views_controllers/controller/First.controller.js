sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend("app.controller.First", {
        handleNavigate: function() {
            MessageToast.show("Navigating..")
            this.byId("app").to(this.byId("secondPage"))
        },
        onInit: function() {
            var oModel = new JSONModel({
                data: [{
                    "name": "Nell"
                }, {
                    "name": "Valerye"
                }, {
                    "name": "Nevile"
                }, {
                    "name": "Nataniel"
                }, {
                    "name": "Yvor"
                }]
            })
            this.getView().setModel(oModel)

        },
        onChange: function(oEvent) {
            var switchState = oEvent.getParameter("state")
            this.byId("flexBox").setVisible(switchState)
        }
    })

});