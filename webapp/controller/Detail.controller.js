sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(
	Controller,
	History
) {
	"use strict";

	return Controller.extend("teamwork.net.fioridemo.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteDetail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},
		onNavBack: function(){
			let oHistory = History.getInstance();
			let sPreviousHash = oHistory.getPreviousHash();
			if(sPreviousHash !== undefined){
				window.history.go(-1);
			}else{
				let oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteMain",{}, true );
			}
		}        
	});
});