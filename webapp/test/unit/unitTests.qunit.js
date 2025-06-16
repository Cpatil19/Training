/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"deloitte/tranning/tranning/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
