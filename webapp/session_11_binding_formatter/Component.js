sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel'
], function(UIComponent, JSONModel) {
    'use strict';

    return UIComponent.extend("app.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            var oModel = new JSONModel({
                data: [{
                    fname: "Akshay",
                    lname: "Chaturvedi",
                    age: "31",
                    score: "98"
                }, {
                    fname: "Mr",
                    lname: "Professor",
                    age: "42",
                    score: "70"
                }, {
                    fname: "Tom",
                    lname: "Cruise",
                    age: "55",
                    score: "50"
                }]
            })

            this.setModel(oModel)
        }
    })

});