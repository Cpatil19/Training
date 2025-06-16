sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("deloitte.tranning.tranning.controller.List", {
        onInit() {
            console.log("📌 onInit: View initialized.");
        },
        onBeforeRendering: function () {
            console.log("📌 onBeforeRendering: Before the view is rendered.");
        },
        onAfterRendering: function () {
            console.log("📌 onAfterRendering: After the view is rendered.");
        },

        onExit: function () {
            console.log("📌 onExit: Controller is being destroyed.");
        },
        onSelectEmployee: function (oEvent) {
            // const selectedItem = oEvent.getParameter("listItem");
            // const bindingContext = selectedItem.getBindingContext("EmployeeModel");
            // const employeeData = bindingContext.getObject();

            // console.log("Navigating to EmployeeProfileDetail for employeeCode:", employeeData.employeeCode);

            // this.getOwnerComponent().getRouter().navTo("TargetDetail", {
            //    // employeeCode: employeeData.employeeCode
            // });
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("TargetDetail");
        },
    });
});