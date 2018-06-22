sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sampleCoreElements.controller.homepage", {
		
		goToOverview : function(evt){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		
			if(evt.getSource().getTitle() === "Detail"){
					oRouter.navTo("materialInspection");
			}else{
				oRouter.navTo("materialoverview");
			}
			
			
		}
			
		
	});
});