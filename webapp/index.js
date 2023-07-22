sap.ui.define([
    'sap/ui/core/mvc/XMLView'
], function(XMLView) {
    'use strict';
    XMLView.create({
        viewName: 'app.view.First'
    }).then(function(oView) {
        oView.placeAt("content")
    })
});