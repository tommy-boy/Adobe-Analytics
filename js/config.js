jQuery( document ).ready(function($) {

    // Set-up the VisitorAPI component.
    var visitor = new Visitor(digitalData.VISITOR_API.MARKETING_CLOUD_ORG_ID, digitalData.VISITOR_API.NAMESPACE);
    visitor.trackingServer = digitalData.VISITOR_API.TRACKING_SERVER;

    // Set-up the AppMeasurement component.
    
    var appMeasurement = AppMeasurement.getInstance(digitalData.APP_MEASUREMENT.RSID);
    
	/************************** CONFIG SECTION **************************/
	/* You may add or alter any code config here. /
	appMeasurement.charSet="ISO-8859-1";
	/* Conversion Config */
	appMeasurement.currencyCode="USD";
	/* Link Tracking Config */
	appMeasurement.trackDownloadLinks=true;
	appMeasurement.trackExternalLinks=true;
	appMeasurement.trackInlineStats=true;
	appMeasurement.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
	appMeasurement.linkInternalFilters="javascript:"; //optional: add your internal domain here
	appMeasurement.linkLeaveQueryString=false;
	appMeasurement.linkTrackVars="None";
	appMeasurement.linkTrackEvents="None";
	    
    appMeasurement.visitor = visitor;
    appMeasurement.visitorNamespace = digitalData.VISITOR_API.NAMESPACE;
    appMeasurement.trackingServer = digitalData.APP_MEASUREMENT.TRACKING_SERVER;
    appMeasurement.account = digitalData.APP_MEASUREMENT.RSID;
    
    appMeasurement.server=digitalData.PAGE.Server;
    appMeasurement.pageName=digitalData.PAGE.PageInfo.pageNameUrl();
	appMeasurement.channel="";
	appMeasurement.pageType="";
	appMeasurement.prop1="";
	appMeasurement.prop2="";
	appMeasurement.prop3="";
	appMeasurement.prop4="";
	appMeasurement.prop5="";
	appMeasurement.prop6="";
	appMeasurement.prop7=digitalData.PAGE.PageInfo.pageNameUrl();
	appMeasurement.prop8="";
	
	var ssts_pagealias = digitalData.PAGE.PageInfo.pageNameUrl();
	if (ssts_pagealias != "") {
	  var ssts_parts = ssts_pagealias.split('/');
	  appMeasurement.prop17 = ssts_parts[0];
	  appMeasurement.prop18 = ssts_parts[1];
	  appMeasurement.prop19 = ssts_parts[2];
	  appMeasurement.prop20 = ssts_parts[3];
	}	

	appMeasurement.prop23=digitalData.PAGE.PageInfo.pageURL;
	appMeasurement.prop24=digitalData.PAGE.Server;
	appMeasurement.prop25 = digitalData.PAGE.PageInfo.pageURL;
	
	/* Conversion Variables */
	appMeasurement.campaign="";
	appMeasurement.state="";
	appMeasurement.zip="";
	appMeasurement.events = "event1,event15";
	appMeasurement.products="";
	appMeasurement.purchaseID="";
	appMeasurement.eVar1="";
	appMeasurement.eVar2="";
	appMeasurement.eVar3="";
	appMeasurement.eVar4="";
	appMeasurement.eVar5="";
	
	/* Use Context Variables */
	appMeasurement.contextData['Page Name']=digitalData.PAGE.PageInfo.pageNameUrl();
	appMeasurement.contextData['Download Name']="Book A";
	appMeasurement.contextData['Download URL']="download  url";
	
	console.log(appMeasurement.prop7);
	console.log(appMeasurement.prop17);
    console.log(appMeasurement.prop18);
    console.log(appMeasurement.prop19);

    // Create the VideoPlayer.
    //var videoPlayer = new VideoPlayer('movie');

    // Create the Analytics provider
    //var analyticsProvider = new AnalyticsProvider(appMeasurement);

    // ...and hook it up to the player.
    //analyticsProvider.attachToPlayer(videoPlayer);
    
    var s_code=appMeasurement.t();if(s_code)document.write(s_code);

});
