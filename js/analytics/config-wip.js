
var Omni = Omni || {};

Omni.tracking = {

	setOmniture : function(account, server, type, pageName, version, href){
	    var s_account = account;
	    var s = s_gi(s_account);
		s_server = server;
   		s_prop6 = type;
        s_prop7 = pageName;
		s_prop8 = version;
		s_prop23 = href;
		s_prop24 = server;
		s_prop25 = s_account;
	},
	options : {
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
	    s.pageName=s_prop7;
	    var s_code = s.t();
	    if (s_code) {
	        document.write(s_code)
	    }
	
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
};