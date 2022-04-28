sap.ui.define([
	"br/com/app/mockserver/sapui5appmockserver/controller/BaseController",
	"sap/m/ObjectListItem",
	"sap/m/ObjectAttribute"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, ObjectListItem, ObjectAttribute, MessageBox) {
        "use strict";

        return BaseController.extend("br.com.app.mockserver.sapui5appmockserver.controller.Detail", {
            onInit: function () {
                var oRouter = this.getRouter();
			    oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched : function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
    
                oView.bindElement({
                    path : "/Meetups(" + oArgs.MeetupID + ")",
                    events : {
                        change: this._onBindingChange.bind(this),
                        dataRequested: function (oEvent) {
                            oView.setBusy(true);
                        },
                        dataReceived: function (oEvent) {
                            oView.setBusy(false);
                        }
                    }
                });
            },
            _onBindingChange : function (oEvent) {
                if (!this.getView().getBindingContext()) {
                    //this.getRouter().getTargets().display("notFound");
                }
            },
            onPress:function(){
                MessageBox.alert("Link was clicked!");
            }
        });
    });
