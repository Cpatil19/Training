sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("deloitte.tranning.tranning.controller.Details", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("TargetDetail").attachPatternMatched(this._onRouteMatched, this);
        },
        
        _onRouteMatched: function (oEvent) {
          var sEmployeeCode = oEvent.getParameter("arguments").employeeCode;
          var oModel = this.getOwnerComponent().getModel("EmployeeModel");
          var aEmployees = oModel.getProperty("/employees");
        
          var oEmployee = aEmployees.find(emp => emp.employeeCode === sEmployeeCode);
        
          if (oEmployee) {
            var sPath = "/employees/" + aEmployees.indexOf(oEmployee);
            this.getView().bindElement({
              path: sPath,
              model: "EmployeeModel"
            });
            console.log(`Bound to employee at ${sPath}`);
          } else {
            console.warn(`Employee with code ${sEmployeeCode} not found.`);
          }
        },
    })
})