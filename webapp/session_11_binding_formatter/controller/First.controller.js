sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("app.controller.First", {
        // Event Handler
        onLiveChange: function(oEvent) {
            var sText = oEvent.getParameter("value")
            console.log(sText)
            var secondTextArea = this.byId("textArea2")
            // Methods
            secondTextArea.setValue(sText)
            secondTextArea.setWidth("50%")
        },
        // Lifecycle Methods
        onInit: function() {

        },
        onBeforeRendering: function() {

        },
        onAfterRendering: function() {

        },
        onExit: function() {

        }
    })

});