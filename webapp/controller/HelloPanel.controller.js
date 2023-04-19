sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, 
              MessageToast,
              Fragment) {
        "use strict";

        return Controller.extend("teamwork.net.fioridemo.controller.HelloPanel", {
            onShowHello: function(){
                let oBundle = this.getView().getModel("trans").getResourceBundle();
                let text = oBundle.getText("helloMsg", "thanh dep trai");
                MessageToast.show(text);
                console.log("Hello ", text);
            },
            onOpenDialog: function(){
                if(!this.pDialog){
                    this.pDialog = this.loadFragment({
                        name: "teamwork.net.fioridemo.view.HelloDialog"
                    });
                }
                this.pDialog.then(function(oDialog){
                    oDialog.open();
                });
            },
            onCloseDialog: function(){
                this.byId("helloDialog").close();
            }
        });
    });
