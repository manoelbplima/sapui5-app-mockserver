sap.ui.define([
	"br/com/app/mockserver/sapui5appmockserver/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, ObjectListItem, ObjectAttribute) {
        "use strict";

        return BaseController.extend("br.com.app.mockserver.sapui5appmockserver.controller.List", {
            onInit: function () {
            },
            onNavToDetail: function(oEvent){
                var oItem, oCtx;
                oItem   = oEvent.getSource();
			    oCtx    = oItem.getBindingContext();

                this.getRouter().navTo("detail",{
                    MeetupID : oCtx.getProperty("MeetupID")
                });
            },
            onBeforeExport: function (oEvt) {
                var mExcelSettings = oEvt.getParameter("exportSettings");
                if (mExcelSettings.url) {
                    return;
                }
                mExcelSettings.worker = false;
            },
        });
    });
