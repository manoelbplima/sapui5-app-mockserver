/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"brcomappmockserver/sapui5-app-mockserver/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
