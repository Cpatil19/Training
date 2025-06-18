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
            const selectedItem = oEvent.getParameter("listItem");
            const bindingContext = selectedItem.getBindingContext("EmployeeModel");
            const employeeData = bindingContext.getObject();

            console.log("Navigating to EmployeeProfileDetail for employeeCode:", employeeData.employeeCode);

            this.getOwnerComponent().getRouter().navTo("TargetDetail", {
                employeeCode: employeeData.employeeCode
            });
        },

        onAddEmployee: function () {
            var newEmp = {
                employeeCode: "E" + Math.floor(Math.random() * 1000),
                firstName: "Casa",
                lastName: "Bella",
                department: "Marketing",
                designation: "Marketing Manager",
                email: "casa.bella@example.com",
                phone: "987-654-3210",
                location: "San Francisco",
                employmentHistory: [
                    {
                        company: "Bright Media",
                        position: "Marketing Assistant",
                        startDate: "2014-03-01",
                        endDate: "2016-08-31"
                    },
                    {
                        company: "Creative Solutions",
                        position: "Marketing Specialist",
                        startDate: "2016-09-01",
                        endDate: "2019-05-15"
                    },
                    {
                        company: "Casa Bella Inc",
                        position: "Marketing Manager",
                        startDate: "2019-06-01",
                        endDate: "Present"
                    }
                ]
            };
            var oModel = this.getView().getModel("EmployeeModel");
            var oData = oModel.getData();

            oData.employees.push(newEmp);
            oModel.setData(oData);

            sap.m.MessageToast.show("New employee added");
        },
        onUpdatePress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oContext = oButton.getBindingContext("EmployeeModel");
            var oEmployee = oContext.getObject();

            // For demo, just update the department (you can open a dialog for full edit)
            this.updateEmployee(oEmployee.employeeCode, { department: "SAP BTP" });
        },
        updateEmployee: function (employeeCode, updatedData) {
            var oModel = this.getView().getModel("EmployeeModel");
            var aEmployees = oModel.getProperty("/employees");
            var index = aEmployees.findIndex(emp => emp.employeeCode === employeeCode);

            if (index !== -1) {
                aEmployees[index] = { ...aEmployees[index], ...updatedData };
                oModel.setProperty("/employees", aEmployees);
                sap.m.MessageToast.show("Employee updated");
            }
        },
        onDeleteEmployee: function(oEvent) {
            var oContext = oEvent.getSource().getBindingContext("EmployeeModel");
            var sEmployeeCode = oContext.getProperty("employeeCode");
          
            var oModel = this.getView().getModel("EmployeeModel");
            var aEmployees = oModel.getProperty("/employees");
          
            var filteredEmployees = aEmployees.filter(emp => emp.employeeCode !== sEmployeeCode);
          
            oModel.setProperty("/employees", filteredEmployees);
          
            sap.m.MessageToast.show("Employee deleted successfully");
          }
    });
});