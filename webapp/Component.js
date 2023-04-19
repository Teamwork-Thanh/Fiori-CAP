/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "teamwork/net/fioridemo/model/models",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ],
    function (UIComponent, Device, models, JSONModel, ResourceModel) {
        "use strict";

        return UIComponent.extend("teamwork.net.fioridemo.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //Set model
                var oData = 
                {
                    employee: {
                        name: "Thanh dep trai",
                        age: "24",
                        company: "Teamwork Corp."
                    }
                };
                // var oModel = this.getModel("northwindModel");
                // oModel.read("/Invoices", {
                //     success: function(oData, oResnponse){
                //         console.log(oData);
                //         invoice
                //         console.log(oResnponse);
                //     },
                //     error: function(){
                //         console.log("Bad Network- No Data");
                //     }
                // })         

                let oViewModel = new JSONModel();
                oViewModel.setData(oData);
                this.setModel(oViewModel, "viewModel");

                //i18n
                var i18nModel = new ResourceModel({
                    bundleName: "teamwork.net.fioridemo.i18n.i18n"
                 });
                 this.setModel(i18nModel,"trans");
            }

        });
    }
);