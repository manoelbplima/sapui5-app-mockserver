sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/ObjectListItem",
	"sap/m/ObjectAttribute"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ObjectListItem, ObjectAttribute, MessageBox) {
        "use strict";

        return Controller.extend("br.com.app.mockserver.sapui5appmockserver.controller.View1", {
            onInit: function () {
                //var oJSONModel = this.initSampleDataModel();
                //this.getView().setModel(oJSONModel);
            },
            initSampleDataModel: function(){
               // var oModel = new JSONModel();
                //return oModel;
            },
            oncheck: function() {
                MessageBox.show("Please is correct?",
                {
                    icon: MessageBox.Icon.QUESTION,
                    title: "Please Response!",
                    actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                    emphasizedAction: MessageBox.Action.YES,
                    onClose: function(oAction) {
                        sap.m.MessageToast.show(oAction, {
                            duration: 3000,  
                        }) 
                    }
                })
            },
            onPress: function() {
                var oList = this.byId("list");
                oList.bindItems({
                    path: "/Meetups",
                    parameters: {
                        custom: {
                            first: "3"
                        }
                    },
                    template: new ObjectListItem({
                        title: "{Title}",
                        number: {
                            path: 'EventDate',
                            type: 'sap.ui.model.type.DateTime',
                            formatOptions: {
                                style: 'medium'
                            }
                        },
                        attributes: [
                            new ObjectAttribute({
                                text: "{Description}"
                            })
                        ]
                    })
                });
            }
        });
    });
