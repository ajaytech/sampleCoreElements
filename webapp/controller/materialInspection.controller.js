sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sampleCoreElements/util/formatter"
], function(Controller,formatter) {
	"use strict";

	return Controller.extend("sampleCoreElements.controller.materialInspection", {
		formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sampleCoreElements.view.materialInspection
		 */
			onInit: function() {
			
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sampleCoreElements.view.materialInspection
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		
	/*	createDataBindViz : function(){
			var oData =  this.getView().getModel("detailPageList").getData();
			var oDataViz = {};
			
			for(var i=0;i<oData["Stock flow"].length;i++){
				oDataViz.push({
					"Type":oData[i]["Order Type"],
					"Date":oData[i]["Date"],
					"Quantity":i===0?oData[i]["Quantity Avail"]:oData[i]["Order Type"]==="SO"?(-1*oData[i]["Quantity"]):oData[i]["Quantity"]
					
				});
			}
			console.log(oDataViz);
		},*/
		

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sampleCoreElements.view.materialInspection
		 */
			onAfterRendering: function() {
		
			var oViz = this.byId("idVizFrame");
			var oData =  this.getView().getModel("showDetailMat").getData();
			var oDataViz = [];
			
			for(var i=0;i<oData["Stock flow"].length;i++){
				oDataViz.push({
					"Type":oData["Stock flow"][i]["Order Type"],
					"Date":oData["Stock flow"][i]["Date"],
					"Quantity":i===0?oData["Stock flow"][i]["Quantity Avail"]:oData["Stock flow"][i]["Order Type"]==="SO"?(-1*oData["Stock flow"][i]["Quantity"]):oData["Stock flow"][i]["Quantity"]
					
				});
			}
			var newVizModel = new sap.ui.model.json.JSONModel();
			newVizModel.setData(oDataViz);
			
			this.getView().setModel(newVizModel,"vizStockFlow");
			
			oViz.setVizProperties({
				legend: {
                    title: {
                        visible: true
                    },
                    label: {
                        text: {
                            negativeValue: "SO",
                            positiveValue: "PO"
                        }
                    }
                },
                title: {
                    visible: true,
                    text: 'Stock Flow'
                }
				
			});
			
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sampleCoreElements.view.materialInspection
		 */
		//	onExit: function() {
		//
		//	}

	});

});