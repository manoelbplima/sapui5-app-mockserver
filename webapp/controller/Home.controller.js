sap.ui.define([
	"br/com/app/mockserver/sapui5appmockserver/controller/BaseController",
], function(
	BaseController
) {
	"use strict";

	return BaseController.extend("br.com.app.mockserver.sapui5appmockserver.controller.Home", {
        onInit: function() {
            this._navContainerDelegate = { onAfterShow: this.onAfterShow };
			this.getView().addEventDelegate(this._navContainerDelegate, this);
		},
        onAfterShow: function() {
			const router = this.getOwnerComponent().getRouter();
            console.log("onAfterShow");
			router.navTo("list");
		},
	});
});