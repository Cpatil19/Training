sap.ui.define([
    "sap/ui/core/UIComponent",
    "deloitte/tranning/tranning/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models,JSONModel) => {
    "use strict";

    return UIComponent.extend("deloitte.tranning.tranning.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            var oModel = new JSONModel();
            oModel.loadData("mockdata/employee.json");
            this.setModel(oModel, "EmployeeModel");

            // enable routing
            this.getRouter().initialize();
        }
    });
});