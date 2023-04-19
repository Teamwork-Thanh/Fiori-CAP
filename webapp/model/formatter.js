sap.ui.define([], function() {
	"use strict";
	return {
        statusText: function(sStatus){
            const resourceBundle = this.getOwnerComponent().getModel("trans").getResourceBundle();
            switch (sStatus){
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");       
                default:
                    return sStatus;    
            }
        }
	};
});