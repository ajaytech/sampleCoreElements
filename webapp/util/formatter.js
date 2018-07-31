sap.ui.define(function(){
	"use strict";
	var minQuntityUpperRange = 10;
	var minQuntityLowerRange = 4;
	var Success = "Good";
	var Error = "Error";
	var wanring = "Neutral";
	
	return {
	minQuntityUpperRange : minQuntityUpperRange,
	minQuntityLowerRange : minQuntityLowerRange,
	
	formatBarColor : function(sQuantity){
			
			if(sQuantity>minQuntityUpperRange){
				
				return Success;
				
			}else if(sQuantity<minQuntityUpperRange && sQuantity>minQuntityLowerRange){
				
				return wanring;
			}else{
				
				return Error;
			}
			return Error;
		},
	formatAvailMatStock : function(sStatus){
			if(sStatus.indexOf("Shortage")!=-1){
				
				if(sStatus.indexOf("No")!=-1){
					return Success;
				}
				return Error;
			}else{
				return Success;
			}
		}
	
		
	};
});