sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';

    return UIComponent.extend("app.Component", {
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            rootView: {
                viewName: "app.view.First",
                type: "XML",
                id: "app"
            }
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
        }
    })

});