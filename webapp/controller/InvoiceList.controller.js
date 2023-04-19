sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
	Controller,
    JSONModel,
    formatter,
    Filter,
    FilterOperator
) {
	"use strict";

	return Controller.extend("teamwork.net.fioridemo.controller.InvoiceList", {
        /**
         * @override
         */
        formatter: formatter,
        onInit: function() {
            var OviewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(OviewModel, "view")
        },
        onFilterInvoices: function(oEvent){

            //build filter array
            let aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if(sQuery){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            //filter binding
            const oList = this.byId("invoiceList");
            let oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onDetail: function() {
            const oList = this.getView().byId("invoiceList")
            const oSelectedItem = oList.getSelectedItem();
            let sTitle = oSelectedItem.getTitle();
            let sNumber = oSelectedItem.getNumber();
            let sNumberUnit = oSelectedItem.getNumberUnit();
            console.log(sTitle);
            console.log(sNumber)
            console.log(sNumberUnit)
            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteDetail");
            // Do something with the selected object data
          },
          onItemPress: function(oEvent) {
            console.log(oEvent.getSource());
            // Do something with the selected object data
          }           
	});
});