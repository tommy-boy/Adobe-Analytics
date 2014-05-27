var digitalData = digitalData || {};

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
	digitalData.rsid = 'gpapermobile158'
}else{
	digitalData.rsid = 'gpaper158'
};

digitalData = {	
    pageInstanceID: "AZCentral DataLayer-Dev", 
	PAGE: {
	    Server: location.hostname,
		PageInfo: {
			pageNameUrl: function(){
				pathName = window.location.pathname;
		    	urlArray = pathName.substring(1,pathName.length-1).split('/');
				if (pathName === '/'){
					pageName = domain;
					return pageName;
				} else {
					pageName = urlArray.join('/');
					return pageName;
				};
			},
			pageURL: location.href,
			pageTitle:  "AZ FactCheck",
			pageCat: "News",
			pageSubCat: "Politics",
			pageVersion: "",	 	
	    	siteSection: "Breaking News",
	    	hierarchy: "azcentral|news|news articles",
			pageID: "316",  
 			destinationURL: "http://azcentral.com/index.html", 
 			referringURL: "http://www.google.com/url?&q=&esrc=s", 
			sysEnv: "desktop", 
 			variant: "2", 
 			version: "1.14", 
 			breadCrumbs: ["home","Products","haircare"],
	    },
	    ContentInfo: {
	    	title: "Exclusive Facts",
	    	author: "TommyBoy",
	    	contentType: "Article",
	    	topics: "Breaking News, Interviews, Exclusives",
	    	publishDate: "2014-05-12",
 			effectiveDate: "2014-05-12", 
 			expiryDate: "2014-09-20", 
 			publisher: "BusDev"
	    },
	    Attributes: {
	    	country: "US", 
 			language: "en-US"
	    },
	    VisitorInfo: {
	    	type: "Return",
			state: "Logged In",
			value: "",
			historical: "", //information about key actions (did they leave a comment, etc.)
			anonymous: "",  //demographic data
			social: "", //are they a follower, etc.
	    }
	},
	
	EVENT: {
		EventInfo: { 
 			eventName: "Add News Portal", 
 			eventAction: "addportal", 
 			eventPoints: 200, 
 			type: "contentModifier", 
 			timeStamp: new Date(), 
 			effect: "include portal 1234"
		}
 	},
 	
 	USER: {
 		profile: {
 			profileInfo: { 
 				profileID: "humanbeing12345", 
 				userName: "me"
 			},
 			address: {
 				add1: "",
 				add2: "",
 				city: "",
 				state: "",
 				postalCode: "",
 				country: "USA"
 			},
 			social: {
 				twitter: "",
 				twitterInfo: "",
 				facebook: "",
 				facebookInfo: ""
 			},
 		} 
 	}, 
 		 
    PLAYER: {
        NAME: 'HTML5 basic media player',
        VIDEO_ID: 'fortune-teller'
    },

    VISITOR_API: {
        MARKETING_CLOUD_ORG_ID: 'sample-marketing-cloud-org-id',
        NAMESPACE: 'azcentral',
        TRACKING_SERVER: digitalData.rsid+'.112.2o7.net'
    },

    APP_MEASUREMENT: {
        RSID: digitalData.rsid,
        TRACKING_SERVER: digitalData.rsid+'.112.2o7.net'
    },

    HEARTBEAT: {
        TRACKING_SERVER: 'example.com',
        JOB_ID: 'sample-job',
        PUBLISHER: 'sample-publisher',
        CHANNEL: 'sample-channel',
        OVP: 'sample-ovp',
        SDK: 'sample-sdk'
    },

	OPTIONS : {
		channel : "",
		prop1 : "",
		eVar1 : ""
	},
	
		track : function(obj, propCodes, linkType){
	        // reset tracking properties
	        s.linkTrackVars = '';
	        s.linkTrackEvents = 'None';
	        // iterate through each property in propCodes
	        for (code in propCodes) {
	            s.linkTrackVars += code + ','; // build the CSV list
	            s1 = propCodes1;     // attach the prop code
	        }
	        // track it
	        s.tl(obj, linkType);
	    },
		
		trackPageView : function(){
		    //s.pageName=s_prop7;
		    //s.pageName="Blog:b2:Basic Tagging";
 			//s.events="event1,event21";
		
		    Omni.tracking.clearProperties();
		},
		
		trackEvent : function( eventInfo ) {
		    for( var prop in eventInfo ) {
		      omniture[prop] = eventInfo[prop];
		    }
	 	},
	  	
	  	customLinks : function (){
	    s.linkTrackVars="prop1,eVar7,products,events";
	    s.linkTrackEvents="event5,event9";
	    s.prop1="Link Click";
	    s.eVar7="index.html";
	    s.events="event5";
	    s.tl(true,'o','Custom Link Click');
		},
		
		trackMedia : function() {
	    	s.loadModule("Media");
	 	},
	  
	  	// Clears out any of the custom event info we sent, so that it isn't sent with each event
	    clearProperties : function() {
	  	    s.clearVars();
	    },
	    
}
console.log(digitalData);