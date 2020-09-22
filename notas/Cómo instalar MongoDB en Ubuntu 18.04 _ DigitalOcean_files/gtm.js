
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"635",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_defaultValue":"UA-26573244-13",
      "vtp_map":["list",["map","key","www.digitalocean.com","value","UA-26573244-1"],["map","key","cloud.digitalocean.com","value","UA-26573244-1"],["map","key","try.digitalocean.com","value","UA-26573244-1"],["map","key","marketplace.digitalocean.com","value","UA-26573244-1"],["map","key","hacktoberfest.digitalocean.com","value","UA-26573244-1"],["map","key","status.digitalocean.com","value","UA-26573244-1"],["map","key","go.digitalocean.com","value","UA-26573244-1"],["map","key","developers.digitalocean.com","value","UA-26573244-1"],["map","key","blog.digitalocean.com","value","UA-26573244-1"],["map","key","sponsorship.digitalocean.com","value","UA-26573244-1"],["map","key","sponsorships.digitalocean.com","value","UA-26573244-1"]]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",22],8,16],".getAttribute(\"data-js\")}catch(a){return\"\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"uuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"authn_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_paypal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketoFormID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",32],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],".substring(6)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",45],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",22],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],";return a=null==a||\"\"==a?\"undefined\":100\u003Ca.length?a.substring(0,100).toLowerCase()+\"...\":a.toLowerCase()})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"refcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.uuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"state"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","21","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",2]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",2]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",7],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",2]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",112,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",10],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",110,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",109,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",111,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",108,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",113,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":89
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",2]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",2]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",17],"\u0026var=",["macro",18]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":184
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":210
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/insight.adsrvr.org\/track\/conv\/?adv=4net0uk\u0026ct=0:ff77f96\u0026fmt=3",
      "tag_id":240
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"gYlbCMmhwKkBEMub9uED",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":241
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Lead\u0026noscript=1",
      "tag_id":242
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "tag_id":249
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"GenerateLead",
      "tag_id":250
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1068602\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":251
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"9BqyCNmR1aIBEMub9uED",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":253
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=InitiateCheckout\u0026noscript=1",
      "tag_id":259
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"OQmmCM-Ki60BEMub9uED",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":261
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1417234\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":262
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"Generic",
      "tag_id":263
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddToCart\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":266
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"K45VCPma7q4BEMub9uED",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":268
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1477010\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":269
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=AddToCart",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":270
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1537593\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":273
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=CompleteRegistration",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":275
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"zb6qCJTXgrMBEMub9uED",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":276
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=StartTrial\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":277
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Community",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"New Course Subscription",
      "vtp_eventLabel":"Subscribe",
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":279
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"q0xMCKb9m7kBEMub9uED",
      "vtp_rdp":false,
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":283
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_goalValue":"1",
      "vtp_tagId":"5871022",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"webinar_registration",
      "tag_id":284
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1689322\u0026fmt=gif\"",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":286
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Webinar%20Registration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":289
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Lead Gen",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Form Submit",
      "vtp_eventLabel":"Contact Sales",
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":291
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=DG_LeadForm",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":292
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=DG-LeadForm\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":293
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1764770\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",12],
      "tag_id":294
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"G-33CLOt0cIBEMub9uED",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":296
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","page","value",["macro",4]],["map","fieldName","title","value",["macro",25]],["map","fieldName","location","value",["macro",17]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":719
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"acquisition_funnel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",27],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",2]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","22","dimension",["macro",28]],["map","index","25","dimension",["macro",29]],["map","index","37","dimension",["macro",30]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":726
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":736
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"marketo_form_submit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"tech_talk_registration",
      "vtp_eventLabel":["template","form_id=",["macro",31]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",2]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":748
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":758
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_goalValue":"1",
      "vtp_eventCategory":"acquisition_funnel",
      "vtp_tagId":"5871022",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["macro",26],
      "tag_id":762
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"OrtOCOmE89wBEMub9uED",
      "vtp_rdp":false,
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":763
    },{
      "function":"__cl",
      "tag_id":764
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":765
    },{
      "function":"__cl",
      "tag_id":766
    },{
      "function":"__cl",
      "tag_id":767
    },{
      "function":"__cl",
      "tag_id":768
    },{
      "function":"__cl",
      "tag_id":769
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"758737_755",
      "vtp_enableTriggerStartOption":true,
      "tag_id":770
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",32],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",32],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){var e=function(b){var c=864E5;b=new Date(b);var d=new Date;c=Math.round(Math.abs((d.getTime()-b.getTime())\/c));return 1==c?\"Tomorrow\":1\u003Ec?\"Live soon\":\"In \"+c+\" days\"},a=[{title:\"Upcoming Tech Talk: How to Position Your Idea With User Research \\u276f\",url:\"https:\/\/www.digitalocean.com\/community\/tech_talks\/how-to-position-your-idea-with-user-research\",date:\"11 August 2020 16:00:00 GMT\"},{title:\"Upcoming Tech Talk: Securing Your Droplet \\u276f\",url:\"https:\/\/www.digitalocean.com\/community\/tech_talks\/securing-your-droplet\",\ndate:\"27 August 2020 15:00:00 GMT\"},{title:\"Upcoming Tech Talk: Modern Game Server Infrastructure in the Cloud \\u276f\",url:\"https:\/\/www.digitalocean.com\/community\/tech_talks\/modern-game-server-infrastructure-in-the-cloud\",date:\"6 August 2020 17:00:00 GMT\"},{title:\"Upcoming Tech Talk: Getting Started With Laravel \\u276f\",url:\"https:\/\/www.digitalocean.com\/community\/tech_talks\/getting-started-with-laravel\",date:\"12 August 2020 17:00:00 GMT\"},{title:\"Upcoming Tech Talk: Kubernetes Made Simple: An Overview of DigitalOcean Kubernetes \\u276f\",\nurl:\"https:\/\/www.digitalocean.com\/community\/tech_talks\/kubernetes-made-simple-an-overview-of-digitalocean-kubernetes\",date:\"05 August 2020 17:00:00 GMT\"}];a=a.filter(function(b){return new Date(b.date)\u003Enew Date});a.length\u0026\u0026(a=a[Math.floor(Math.random()*a.length)],document.querySelector('li[role\\x3d\"banner\"]').innerHTML='\\x3ca href\\x3d\"'+a.url+'\" data-pill\\x3d\"'+e(a.date)+'\" title\\x3d\"'+a.title+'\"\\x3e'+a.title+\"\\x3c\/a\\x3e\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"SignUp\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(d){d+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var c=0;c\u003Cb.length;c++){for(var a=b[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(d))return a.substring(d.length,a.length)}return\"\"}function setCookie(d,b,c){var a=new Date;a.setTime(a.getTime()+6E4*c);document.cookie=d+\"\\x3d\"+escape(b)+(null==c?\"\":\";expires\\x3d\"+a.toGMTString())}\nif(\"\"==getCookie(\"sessionID\")){var randomNumberString=Math.floor(1E7*Math.random()+1).toString();setCookie(\"sessionID\",randomNumberString,30)}else{var sessionID=getCookie(\"sessionID\");setCookie(\"sessionID\",sessionID,30)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2d65\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":243
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026amp;conversionId=1288866\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":244
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",34],8,16],"({name:\"Sep 2019 Test\",pct:.75,audience:function(){return-1===document.cookie.indexOf(\"last_logged_in_at\")\u0026\u0026-1===document.cookie.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"K8S_Dev_Signup_Event_KubeConNA2019New\")},variants:[{name:\"Control\",func:function(){}},{name:\"Received Promo\",func:function(){fetch(\"https:\/\/cloud.digitalocean.com\/referrals\/74a1c5d63dac\/register\",{method:\"GET\",mode:\"cors\",credentials:\"include\"});\ndataLayer.push({event:\"showReferralBanner\"})}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":246
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o20hg\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nuyk8\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2k38\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":267
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2og9\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2og9\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":272
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){$(\".sticky-wrap\").height()\u003E$(window).height()\u0026\u0026($(\".filters-box \\x3e .curriculum-filter-group, .filters-box \\x3e h3\").hide(),$(\".filters-box \\x3e h3:last\").show())});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _ubaq=_ubaq||[];_ubaq.push([\"trackGoal\",\"convert\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"d3pkntwtp2ukl5.cloudfront.net\/uba.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":280
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2xzp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2xzp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":288
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o33c2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o33c2\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",34],8,16],"({name:\"nginxconfig promo test\",audience:function(){return-1===document.cookie.indexOf(\"last_logged_in_at\")\u0026\u0026-1===document.cookie.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"refcode\")},variants:[{name:\"Control\",func:function(){}},{name:\"Received Promo\",func:function(){console.log(\"test\");fetch(\"https:\/\/cloud.digitalocean.com\/referrals\/74a1c5d63dac\/register\",{method:\"GET\",mode:\"cors\",credentials:\"include\"});dataLayer.push({event:\"showReferralBanner\"})}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":708
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g){(function(a,b,f,d,c){c=a[d]=a[d]||{};c._q=[];var e=[\"initialize\",\"identify\",\"updateOptions\",\"pageLoad\"];a=0;for(d=e.length;a\u003Cd;++a)(function(a){c[a]=c[a]||function(){c._q[a===e[0]?\"unshift\":\"push\"]([a].concat([].slice.call(arguments,0)))}})(e[a]);a=b.createElement(f);a.async=!0;a.src=\"https:\/\/cdn.pendo.io\/agent\/static\/\"+g+\"\/pendo.js\";b=b.getElementsByTagName(f)[0];b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"pendo\");pendo.initialize({cookieDomain:\".digitalocean.com\",visitor:{id:window.analytics\u0026\u0026\nwindow.analytics.user().id()||\"\",anonymous_id:window.analytics\u0026\u0026window.analytics.user().anonymousId()||\"\"}})})(\"aeeceff8-7525-4fd1-5f27-314ac5be4107\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":714
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-ezk6DY8pwNxCt\",labels:\"_fp.event.Conversion,_fp.pcat.INSERT+PRODUCT+CATEGORY,_fp.event.activation\",orderid:\"",["escape",["macro",28],7],"\",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":720
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-ezk6DY8pwNxCt\",labels:\"_fp.event.Conversion,_fp.pcat.INSERT+PRODUCT+CATEGORY,_fp.event.confirmed\",orderid:\"",["escape",["macro",28],7],"\",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":721
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-ezk6DY8pwNxCt\",labels:\"_fp.event.Conversion,_fp.pcat.INSERT+PRODUCT+CATEGORY,_fp.event.signup_start\",orderid:\"",["escape",["macro",28],7],"\",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":723
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-ezk6DY8pwNxCt\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":725
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-1010666955\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1010666955\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":732
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){analytics.identify({client_id:",["escape",["macro",36],8,16],"})})}catch(a){};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":734
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EMktoForms2.whenReady(function(b){b.onSubmit(function(){var a=b.vals();dataLayer.push({event:\"marketoFormSubmit\",marketoCompany:a.Company,marketoTitle:a.Title,marketoFormID:a.formid})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":746
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-ezk6DY8pwNxCt\",labels:\"_fp.event.Conversion,_fp.pcat.INSERT+PRODUCT+CATEGORY,_fp.event.engaged\",orderid:\"",["escape",["macro",28],7],"\",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":754
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026\"function\"===typeof analytics.track\u0026\u0026analytics.track(\"Web Interaction\",{action:",["escape",["macro",38],8,16],",category:",["escape",["macro",39],8,16],",name:",["escape",["macro",40],8,16],",value:",["escape",["macro",41],8,16],"})}catch(a){};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":757
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn.optimizely.com\/js\/18729900551.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":761
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"\/welcome"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"registered"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"cloud."
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"staging"
    },{
      "function":"_gt",
      "arg0":["macro",8],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"\/community"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"developers"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"hacktoberfest"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"community"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(www|business|www.s2r1.internal).digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"showReferralBanner"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"SPP Application Complete"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"https:\/\/sammydigitalocean.typeform.com\/to\/tcFM4F"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"TypeformSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"Hatch Application Complete"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"initiate_curriculum_subscribe"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"www\\.digitalocean\\.com\\\/community\\\/tech_talks\\\/.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"marketoFormSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Contact Sales"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"formSubmitted"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pageviewCuttlefish"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"acquisition_funnel"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"engaged"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_sw",
      "arg0":["macro",4],
      "arg1":"\/community"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.digitalocean.com\/community"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"true"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tools"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"\/pricing\/"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.digitalocean.com\/community\/curriculums\/"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tools\/nginx"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"activated"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"signup_start"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"register",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,3,4,5],["add",1,40,41,42,43,89]],
    [["if",6],["add",2,3,4,16,25,26,29,82,93]],
    [["if",7],["add",2,3,4,16,25,26,29,82,93]],
    [["if",0,1,8,9],["add",4,25,26,29,82,93]],
    [["if",11],["unless",10],["add",5,6,23,24,28,30,81,101,102]],
    [["if",3,12,13,14],["add",7,8,14,17]],
    [["if",1,3,15],["unless",16],["add",9,10]],
    [["if",1,3,17],["unless",16,18],["add",11,19]],
    [["if",1,3,19],["unless",16,18],["add",12,13,18]],
    [["if",20,21],["add",15]],
    [["if",3,13,14,22],["add",20,21]],
    [["if",1,23],["unless",24],["add",22,78]],
    [["if",11],["unless",25,26],["add",22,103]],
    [["if",1,2],["add",27],["block",0]],
    [["if",29,30],["unless",27,28],["add",31]],
    [["if",29,30,31],["unless",28],["add",31]],
    [["if",32],["add",31]],
    [["if",30,36],["add",32]],
    [["if",37],["add",33,34,35,84,85,86]],
    [["if",38,39],["add",33,34,35,84,85,86]],
    [["if",40],["add",36,37,38,39,88]],
    [["if",1,3,8,41],["add",44,45,46,47,90]],
    [["if",14,42],["add",48,49,50,51,52,91]],
    [["if",43,44],["add",53,54,55,56,65,94]],
    [["if",45,46],["add",57,58,59,60,61,95]],
    [["if",47],["add",62]],
    [["if",48],["add",63,67]],
    [["if",1,49],["add",64]],
    [["if",1,50],["add",64]],
    [["if",1,23],["add",66]],
    [["if",48,51],["add",68,105]],
    [["if",52],["add",69,71,72,73,74,83]],
    [["if",52,53],["add",70]],
    [["if",30],["add",75]],
    [["if",1,3],["unless",16],["add",76]],
    [["if",11,54],["add",76,97]],
    [["if",11,23],["unless",55],["add",76,97]],
    [["if",1,56,57],["add",77]],
    [["if",1,58],["add",77]],
    [["if",1],["unless",59],["add",79]],
    [["if",1,56],["add",80]],
    [["if",23,52,60],["add",87]],
    [["if",23,30,61],["add",87]],
    [["if",1,62],["add",92]],
    [["if",52,63],["add",96]],
    [["if",48,64],["add",98]],
    [["if",48,65],["add",99]],
    [["if",48,66],["add",100]],
    [["if",14,43,67],["add",104]],
    [["if",43,68],["add",106]],
    [["if",11,55],["add",107]],
    [["if",0,30],["unless",33,34],["block",31]],
    [["if",0,30],["unless",35],["block",31]]]
},
"runtime":[[50,"__qpx",[46,"a"],[50,"n",[46,"o","p"],[41,"q"],[3,"q",[0,[0,[0,[0,[0,"https://q.quora.com/_/ad/",[15,"h"]],"/pixel?tag\u003d"],[15,"o"]],"\u0026i\u003dgtm\u0026u\u003d"],[15,"m"]]],[22,[15,"p"],[46,[3,"q",[0,[15,"q"],[0,"\u0026em\u003d",[15,"p"]]]]]],["b",[15,"q"]]],[52,"b",["require","sendPixel"]],[52,"c",["require","setInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","getUrl"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["require","sha256"]],[52,"h",[17,[15,"a"],"pixel_id"]],[52,"i",[17,[15,"a"],"pixel_event"]],[52,"j",[17,[15,"a"],"email"]],[52,"k",["d","qp"]],[52,"l",["e",[45]]],[52,"m",["f",[15,"l"]]],[22,[29,[15,"i"],"ViewContent"],[46,[22,[15,"j"],[46,["g",[15,"j"],[51,"",[7,"o"],["n",[15,"i"],[15,"o"]]],[17,[15,"a"],"gtmOnFailure"]]],[46,["n",[15,"i"],[45]]]]]],[22,[28,[15,"k"]],[46,["b",[0,[0,[0,"https://q.quora.com/_/ad/",[15,"h"]],"/pixel?tag\u003dViewContent\u0026i\u003dgtm\u0026u\u003d"],[15,"m"]]]]],["c","qp","1",true],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__qpx":{"send_pixel":{"urls":["https:\/\/q.quora.com\/"]},"access_globals":{"keys":[{"key":"qp","read":true,"write":true,"execute":false}]},"get_url":{"urlParts":"any"}}}

,"security_groups":{
"nonGooglePixels":["__qpx"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var fa={Xf:!0},ha={};try{ha.__proto__=fa;da=ha.Xf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=ca,ja=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},pa=function(a){return a};var ra=function(a,b){this.a=a;this.i=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.s={};this.m=!1;this.F={}};ta.prototype.get=function(a){return this.s["dust."+a]};ta.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.s[a]=b))};ta.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var va=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new ta;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else sa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():sa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.uc=function(){for(var a=va(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var wa=function(a,b){if(sa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.s[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return sa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var za=function(){function a(f,g){if(b[f]){if(b[f].ic+g>b[f].max)throw Error("Quota exceeded");b[f].ic+=g}}var b={},c=void 0,d=void 0,e={yh:function(f){c=f},se:function(){c&&a(c,1)},Ah:function(f){d=f},Ja:function(f){d&&a(d,f)},Vh:function(f,g){b[f]=b[f]||{ic:0};b[f].max=g},Sg:function(f){return b[f]&&b[f].ic||0},reset:function(){b={}},zg:a};e.onFnConsume=e.yh;e.consumeFn=e.se;e.onStorageConsume=e.Ah;e.consumeStorage=e.Ja;e.setMax=e.Vh;e.getConsumed=e.Sg;e.reset=e.reset;e.consume=e.zg;return e};var Ba=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ta;this.a=this.s=void 0};Ba.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.i.m)if(a.F.Ja(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ba.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ja(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ba.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ba.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Da=function(a){var b=new Ba(a.F,a);a.s&&(b.s=a.s);b.S=a.S;b.a=a.a;return b};var Ea=function(){},Fa=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ga=function(a){return"number"==typeof a&&!isNaN(a)},Ha=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ja=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||
!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Oa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Wa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Xa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ya=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Za=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},$a=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ab=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var bb=function(a,b){ta.call(this);this.a=a;this.S=b};ja(bb,ta);bb.prototype.toString=function(){return this.a};bb.prototype.uc=function(){return new k(va(this))};bb.prototype.i=function(a,b){a.F.se();return this.S.apply(eb(this,a),Array.prototype.slice.call(arguments,1))};var eb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ha(d)?fb(e,d):d};c.prototype.F=function(d){return gb(this.m,d)};c.prototype.s=function(){return b.F};return new c(a,b)};
bb.prototype.Ma=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var gb=function(a,b){for(var c,d=0;d<b.length&&!(c=fb(a,b[d]),c instanceof ra);d++);return c},fb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof bb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var hb=function(){ta.call(this)};ja(hb,ta);hb.prototype.uc=function(){return new k(va(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ib=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,jb=function(a){if(null==a)return String(a);var b=ib.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},kb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},lb=function(a){if(!a||"object"!=jb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!kb(a,"constructor")&&!kb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||kb(a,b)},E=function(a,b){var c=b||("array"==jb(a)?[]:{}),d;for(d in a)if(kb(a,d)){var e=a[d];"array"==jb(e)?("array"!=jb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):lb(e)?(lb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var nb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=va(h),m=0;m<n.length;m++)l[n[m]]=g(h.get(n[m]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var m=h.uc(),q=0;q<m.length();q++)n[m.get(q)]=g(h.get(m.get(q)));return n}if(h instanceof hb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof bb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=mb(u[v],b);var w=b?b.F:za(),y=new Ba(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null;default:if(c)return c(h,b)}};return g(a)},mb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(Ha(h)||Oa(h)){var n=new k([]);d.push(h);e.push(n);for(var m in h)h.hasOwnProperty(m)&&n.set(m,
g(h[m]));return n}if(lb(h)){var q=new hb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new bb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=nb(this.a(v[w]),b);return g((0,this.m.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;if(void 0!==h&&c)return c(h,b)};return g(a)};var ob={control:function(a,b){return new ra(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ja(a.length+f.length);return new bb(a,function(){return function(g){var h=Da(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof ra)return l[n];for(var m=e.get("length"),q=
0;q<m;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=gb(h,f);if(t instanceof ra)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ja(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ja(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new hb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ja(g);c.set(e,f)}return c},undefined:function(){}};var pb=function(){this.m=za();this.a=new Ba(this.m)},qb=function(a,b,c){var d=new bb(b,c);d.m=!0;a.a.set(b,d)};pb.prototype.oc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};pb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=fb(this.a,arguments[c]);return b};pb.prototype.s=function(a,b){var c=Da(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=fb(c,arguments[e]);return d};var sb=function(a){if(a instanceof sb)return a;this.ra=a};sb.prototype.toString=function(){return String(this.ra)};var tb=function(a,b){return nb(a,b,function(c){})},ub=function(a,b){var c=void 0;return mb(a,b,c)};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):wa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):wa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var xb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),yb=new ra("break"),zb=new ra("continue"),Ab=function(a,b){return this.a(a)+this.a(b)},Bb=function(a,b){return this.a(a)&&this.a(b)},Cb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ia(xb,b))return ub(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof bb){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ia(wb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return wb[b].apply(a,f)}}if(a instanceof bb||a instanceof hb){if(a.has(b)){var g=a.get(b);if(g instanceof bb){var h=vb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof bb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}if(a instanceof sb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Fb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Gb=function(a){var b=Da(this.m),c=gb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Hb=function(){return yb},Ib=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ra)return d}},Jb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ca(b,d,e,
!0)}}},Kb=function(){return zb},Lb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Mb=function(a,b){return this.a(a)/this.a(b)},Nb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof sb,d=b instanceof sb;return c||d?c&&d?a.ra==b.ra:!1:a==b},Ob=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Pb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=gb(e,c);if(f instanceof ra){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof hb||b instanceof k||b instanceof bb)for(var g=b.uc(),h=g.length(),l=0;l<h;l++){var n=a(g.get(l)),m=gb(n,c);if(m instanceof ra){if("break"==m.a)break;if("return"==m.a)return m}}}
var Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){d.set(a,e);return d},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},Sb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=Da(d);f.add(a,e);return f},b,c)},Vb=function(a,b,c,d){function e(m,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,m.get(r))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Da(g);for(e(g,h);fb(h,b);){var l=gb(h,d);if(l instanceof ra){if("break"===l.a)break;if("return"===l.a)return l}var n=Da(g);e(h,n);fb(n,c);h=n}},Wb=function(a){return this.m.get(this.a(a))},Xb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof hb||a instanceof k||a instanceof bb)c=a.get(b);else if("string"==
typeof a)"length"==b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof sb)return;return c},Yb=function(a,b){return this.a(a)>this.a(b)},Zb=function(a,b){return this.a(a)>=this.a(b)},$b=function(a,b){a=this.a(a);b=this.a(b);a instanceof sb&&(a=a.ra);b instanceof sb&&(b=b.ra);return a===b},ac=function(a,b){return!$b.call(this,a,b)},bc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ra)return e},cc=function(a,b){return this.a(a)<this.a(b)},dc=function(a,
b){return this.a(a)<=this.a(b)},ec=function(a,b){return this.a(a)%this.a(b)},fc=function(a,b){return this.a(a)*this.a(b)},ic=function(a){return-this.a(a)},jc=function(a){return!this.a(a)},kc=function(a,b){return!Nb.call(this,a,b)},lc=function(){return null},mc=function(a,b){return this.a(a)||this.a(b)},nc=function(a,b){var c=this.a(a);this.a(b);return c},oc=function(a){return this.a(a)},pc=function(a){return Array.prototype.slice.apply(arguments)},qc=function(a){return new ra("return",this.a(a))},
rc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof bb||a instanceof k||a instanceof hb)&&a.set(b,c);return c},sc=function(a,b){return this.a(a)-this.a(b)},tc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ra){var l=f.a;if("break"==
l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof ra&&("return"==f.a||"continue"==f.a)))return f},uc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},vc=function(a){a=this.a(a);return a instanceof bb?"function":typeof a},wc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},xc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof ra)){if("break"==
e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof ra){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},yc=function(a){return~Number(this.a(a))},zc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Ac=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Bc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Fc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Gc=function(a,
b){return Number(this.a(a))|Number(this.a(b))};var Ic=function(){this.a=new pb;Hc(this)};Ic.prototype.oc=function(a){return Jc(this.a.i(a))};
var Lc=function(a,b){return Jc(Kc.a.s(a,b))},Hc=function(a){var b=function(d,e){var f=a.a,g=String(e);ob.hasOwnProperty(d)&&qb(f,g||d,ob[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){qb(a.a,String(d),e)};c(0,Ab);c(1,Bb);c(2,Cb);c(3,Fb);c(53,Gb);c(4,Hb);c(5,Ib);c(52,Jb);c(6,Kb);c(9,Ib);c(50,Lb);c(10,Mb);c(12,Nb);c(13,Ob);c(47,Qb);c(54,Rb);c(55,Sb);c(63,Vb);c(15,Wb);c(16,Xb);c(17,Xb);c(18,Yb);c(19,Zb);c(20,$b);c(21,ac);c(22,bc);c(23,cc);c(24,dc);c(25,ec);
c(26,fc);c(27,ic);c(28,jc);c(29,kc);c(45,lc);c(30,mc);c(32,nc);c(33,nc);c(34,oc);c(35,oc);c(46,pc);c(36,qc);c(43,rc);c(37,sc);c(38,tc);c(39,uc);c(40,vc);c(41,wc);c(42,xc);c(58,yc);c(57,zc);c(60,Ac);c(61,Bc);c(56,Cc);c(62,Fc);c(59,Gc)},Nc=function(){var a=Kc,b=Mc();qb(a.a,"require",b)},Oc=function(a,b){a.a.a.S=b};function Jc(a){if(a instanceof ra||a instanceof bb||a instanceof k||a instanceof hb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Pc=[],Qc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Rc=function(a){return Qc[a]},Sc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Wc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Xc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Yc=function(a){return Xc[a]};Pc[7]=function(a){return String(a).replace(Wc,Yc)};
Pc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Wc,Yc)+"'"}};var fd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,gd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},hd=function(a){return gd[a]};Pc[16]=function(a){return a};var jd;
var kd=[],md=[],nd=[],od=[],pd=[],qd={},rd,sd,td,ud=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},vd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=qd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):jd(c,e,b)},xd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=wd(a[e],b,c));
return d},yd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=qd[b];return c?c.priorityOverride||0:0},wd=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(wd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=kd[f];if(!g||b.qd(g))return;c[f]=!0;try{var h=xd(g,b,c);h.vtp_gtmEventId=b.id;d=vd(h,b);td&&(d=td.Bg(d,h))}catch(y){b.Ke&&b.Ke(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[wd(a[l],b,c)]=wd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,m=1;m<a.length;m++){var q=wd(a[m],b,c);sd&&(n=n||q===sd.Zb);d.push(q)}return sd&&n?sd.Eg(d):d.join("");case "escape":d=wd(a[1],b,c);if(sd&&Ha(a[1])&&"macro"===a[1][0]&&sd.hh(a))return sd.Fh(d);d=String(d);for(var t=2;t<a.length;t++)Pc[a[t]]&&(d=Pc[a[t]](d));return d;case "tag":var r=a[1];if(!od[r])throw Error("Unable to resolve tag reference "+r+".");return d={xe:a[2],
index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=zd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},zd=function(a,b,c){try{return rd(xd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ad=function(){var a=function(b){return{toString:function(){return b}}};return{Sd:a("convert_case_to"),Td:a("convert_false_to"),Ud:a("convert_null_to"),Vd:a("convert_true_to"),Wd:a("convert_undefined_to"),gi:a("debug_mode_metadata"),Ca:a("function"),wf:a("instance_name"),Af:a("live_only"),Cf:a("malware_disabled"),Df:a("metadata"),ii:a("original_vendor_template_id"),Hf:a("once_per_event"),Zd:a("once_per_load"),ce:a("setup_tags"),de:a("tag_id"),ee:a("teardown_tags")}}();var Bd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ja(Bd,Error);function Cd(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Cd(a[c],b[c])}};var Dd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ja(Dd,Error);var Ed=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Gd=function(){return function(a,b){a instanceof Dd||(a=new Dd(a,Fd));b&&a.a.push(b);throw a;}};function Fd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Hd=null,Kd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];Hd=Id(a);for(var e=0;e<md.length;e++){var f=md[e],g=Jd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],m=0;m<od.length;m++)c[m]&&!d[m]&&(n[m]=!0);return n},Jd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Hd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Id=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=zd(nd[c],a));return b[c]}};var Ld={Bg:function(a,b){b[Ad.Sd]&&"string"===typeof a&&(a=1==b[Ad.Sd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ad.Ud)&&null===a&&(a=b[Ad.Ud]);b.hasOwnProperty(Ad.Wd)&&void 0===a&&(a=b[Ad.Wd]);b.hasOwnProperty(Ad.Vd)&&!0===a&&(a=b[Ad.Vd]);b.hasOwnProperty(Ad.Td)&&!1===a&&(a=b[Ad.Td]);return a}};var Md=function(){this.a={}};function Nd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Bd(c,d,g);}}function Od(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Nd(e,b,d,g);Nd(f,b,d,g)}}}};var Sd=function(a){var b=Pd.C,c=this;this.i=new Md;this.a={};var d={},e=Od(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var h={};Na(g,function(l,n){var m=Qd(l,n);h[l]=m.assert;d[l]||(d[l]=m.K)});c.a[f]=function(l,n){var m=h[l];if(!m)throw Rd(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);m.apply(void 0,q);e.apply(void 0,q)}})},Ud=function(a){return Td.a[a]||
function(){}};function Qd(a,b){var c=ud(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Rd;try{return vd(c)}catch(d){return{assert:function(e){throw new Bd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Rd(a,b,c){return new Bd(a,b,c)};var Vd=!1;var Wd={};Wd.bi=Qa('');Wd.Kg=Qa('');var Xd=Vd,Yd=Wd.Kg,Zd=Wd.bi;
var oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;oe(b,"/*")&&(b=b.slice(0,-2));oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},qe=/^[a-z0-9-]+$/i,re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
te=function(a,b){var c;if(!(c=!se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!re.exec(n))throw Error("Invalid Wildcard");var m=n.slice(8),q=m.slice(0,m.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=m.slice(m.indexOf("/"));h=pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var we=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,xe={Fn:"function",DustMap:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=we.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var m=typeof l;l instanceof bb?m="Fn":l instanceof k?m="List":l instanceof hb?m="DustMap":
l instanceof sb&&(m="OpaqueValue");if(m!=h)throw Error("Error in "+a+". Argument "+f+" has type "+m+", which does not match required type "+(xe[h]||h)+".");}}};function ye(a){return""+a}
function ze(a,b){var c=[];return c};var Ae=function(a,b){var c=new bb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Be=function(a,b){var c=new hb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,Ae(a+"_"+d,e)):(Ga(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ce=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new hb;return d=Be("AssertApiSubject",c)};var De=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new hb;return d=Be("AssertThatSubject",c)};function Ee(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(tb(arguments[d],c));return ub(a.apply(null,b))}}var Ge=function(){for(var a=Math,b=Fe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ee(a[e].bind(a)))}return c};var He=function(a){var b;return b};var Ie=function(a){var b;return b};var Je=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Ke=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Le=function(a){F(this.i.a,["message:?string"],arguments);};var Me=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Ne=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.kg.apply(null,Array.prototype.slice.call(arguments,1))};var Oe=function(){Ne(this,"read_container_data");var a=new hb;a.set("containerId",'GTM-KHWBBT');a.set("version",'635');a.set("environmentName",'');a.set("debugMode",Xd);a.set("previewMode",Zd);a.set("environmentMode",Yd);a.m=!0;return a};var Pe=function(){return(new Date).getTime()};var Qe=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof bb)return"function";if(a instanceof sb){a=a.ra;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Re=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Xd||Zd)&&a.call(this,e.message)}}}return{parse:b(function(c){return ub(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(tb(c))})}};var Se=function(a){return Pa(tb(a,this.m))};var Te=function(a){return Number(tb(a,this.m))};var Ue=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ve=function(a,b,c){var d=null,e=!1;return e?d:null};var Fe="floor ceil round max min abs pow sqrt".split(" ");var We=function(){var a={};return{Tg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Wh:function(b,c){a[b]=c},reset:function(){a={}}}},Xe=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ye=function(){this.a={};this.i={}};Ye.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ye.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Fa(b)?Ae(a,b):Be(a,b)};
var $e=function(a){var b=Ze;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Fa(b)?Ae("getUserAgent",b):Be("getUserAgent",b)};function af(){var a={};return a};var H={hb:"_ee",$c:"_syn",li:"_uei",ji:"_pci",Lc:"event_callback",Xb:"event_timeout",ia:"gtag.config"};H.ja="allow_ad_personalization_signals";H.Zc="restricted_data_processing";H.pb="allow_google_signals";H.ka="cookie_expires";H.Ub="cookie_update";H.Db="session_duration";H.qa="user_properties";H.Ia="transport_url";H.O="ads_data_redaction";H.o="ad_storage";
H.M="analytics_storage";H.pf="region";H.rf="wait_for_update";H.ef=[H.ja,H.pb,H.Ub];H.ff=[H.ka,H.Xb,H.Db];var bf={},cf=function(a,b){bf[a]=bf[a]||[];bf[a][b]=!0},df=function(a){for(var b=[],c=bf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){cf("GTM",a)};var ef=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ef);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};oa(ef,Error);ef.prototype.name="CustomError";var ff=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ef.call(this,d+c[e])};oa(ff,ef);ff.prototype.name="AssertionError";var gf=function(a,b,c){if(null==a){var d=[a],e=Array.prototype.slice.call(arguments,2),f="Assertion failed";if(b){f+=": "+b;var g=e}else f+=": Expected to exist: %s.",g=d;throw new ff(""+f,g||[]);}return a},hf=function(a,b){throw new ff("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var jf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var kf;var lf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var mf;a:{var nf=la.navigator;if(nf){var of=nf.userAgent;if(of){mf=of;break a}}mf=""}var pf=function(a){return-1!=mf.indexOf(a)};var qf=function(){return pf("Firefox")||pf("FxiOS")},rf=function(){return(pf("Chrome")||pf("CriOS"))&&!pf("Edge")};var tf=function(a,b,c){this.a=c===sf?a:""};tf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var uf=function(a){if(a instanceof tf&&a.constructor===tf)return a.a;var b=typeof a;hf("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},sf={},vf=new tf(la.trustedTypes&&la.trustedTypes.emptyHTML||"",0,sf);var wf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},xf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=uf(vf);return!c.parentElement}),yf=function(a,b){if(a.tagName&&wf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(xf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=uf(b)};var zf=function(a){var b;if(void 0===kf){var c=null,d=la.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:pa,createScript:pa,createScriptURL:pa})}catch(f){la.console&&la.console.error(f.message)}kf=c}else kf=c}var e=(b=kf)?b.createHTML(a):a;return new tf(e,null,sf)};var B=window,L=document,Af=navigator,Bf=L.currentScript&&L.currentScript.src,Cf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Df=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ef=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Df(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=la.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var h=g.nonce||g.getAttribute("nonce");if(h&&ma.test(h)){na=h;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=L.getElementsByTagName("script")[0]||L.body||L.head;l.parentNode.insertBefore(d,l);return d},Ff=function(){if(Bf){var a=Bf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Gf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||
L.body||L.head;d.parentNode.insertBefore(c,d);Df(c,b);void 0!==a&&(c.src=a);return c},Hf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},If=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Jf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){B.setTimeout(a,0)},Kf=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Lf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Mf=function(a){var b=L.createElement("div");yf(b,zf("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Nf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Of=function(a){Af.sendBeacon&&Af.sendBeacon(a)||Hf(a)},Pf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Qf={},Rf=function(a){return void 0==Qf[a]?!1:Qf[a]};var Sf=[];function Tf(){var a=Cf("google_tag_data",{});a.ics||(a.ics={entries:{},set:Uf,update:Vf,addListener:Wf,notifyListeners:Xf,active:!1});return a.ics}
function Uf(a,b,c,d,e,f){var g=Tf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,m=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(m===e||(m===d?n!==e:!m&&!n)){var q=!!(f&&0<f&&void 0===l.update),t={region:m,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,Yf(a),Xf(),cf("TAGGING",2))},f)}}}
function Vf(a,b){var c=Tf();c.active=!0;if(void 0!=b){var d=Zf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Zf(a);f.quiet?(f.quiet=!1,Yf(a)):g!==d&&Yf(a)}}function Wf(a,b){Sf.push({qe:a,Og:b})}function Yf(a){for(var b=0;b<Sf.length;++b){var c=Sf[b];Ha(c.qe)&&-1!==c.qe.indexOf(a)&&(c.Se=!0)}}function Xf(){for(var a=0;a<Sf.length;++a){var b=Sf[a];if(b.Se){b.Se=!1;try{b.Og.call()}catch(c){}}}}
var Zf=function(a){var b=Tf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},$f=function(a){return!(Tf().entries[a]||{}).quiet},ag=function(){return Rf("gtag_cs_api")?Tf().active:!1},bg=function(a,b){Tf().addListener(a,b)},cg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!$f(b[e]))return!0;return!1}if(c()){var d=!1;bg(b,function(){d||c()||(d=!0,a())})}else a()},dg=function(a,b){if(!1===Zf(b)){var c=!1;bg([b],function(){!c&&Zf(b)&&(a(),c=!0)})}};var eg=[H.o,H.M],fg=function(a){var b=a[H.pf];b&&I(40);var c=a[H.rf];c&&I(41);for(var d=Ha(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<eg.length;f++){var g=eg[f],h=a[eg[f]],l=d[e];Tf().set(g,h,l,"MX","MX-CHH",c)}},gg=function(a){for(var b=0;b<eg.length;b++){var c=eg[b],d=a[eg[b]];Tf().update(c,d)}Tf().notifyListeners()},hg=function(a){var b=Zf(a);return void 0!=b?b:!0},ig=function(){for(var a=[],b=0;b<eg.length;b++){var c=Zf(eg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
jg=function(a,b){cg(a,b)};var lg=function(a){return kg?L.querySelectorAll(a):null},mg=function(a,b){if(!kg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ng=!1;if(L.querySelectorAll)try{var og=L.querySelectorAll(":root");og&&1==og.length&&og[0]==L.documentElement&&(ng=!0)}catch(a){}var kg=ng;var Pd={},R=null,Cg=Math.random();Pd.C="GTM-KHWBBT";Pd.cc="8q1";Pd.hi="";var Dg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Eg="www.googletagmanager.com/gtm.js";
var Fg=Eg,Gg=null,Hg=null,Ig="//www.googletagmanager.com/a?id="+Pd.C+"&cv=635",Jg={},Kg={},Lg=function(){var a=R.sequence||1;R.sequence=a+1;return a};
var Mg=function(){return"&tc="+od.filter(function(a){return a}).length},Pg=function(){Ng||(Ng=B.setTimeout(Og,500))},Og=function(){Ng&&(B.clearTimeout(Ng),Ng=void 0);void 0===Qg||Rg[Qg]&&!Sg&&!Tg||(Ug[Qg]||Vg.jh()||0>=Wg--?(I(1),Ug[Qg]=!0):(Vg.Mh(),Hf(Xg()),Rg[Qg]=!0,Yg=Zg=Tg=Sg=""))},Xg=function(){var a=Qg;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[$g,Rg[a]?"":"&es=1",ah[a],b?"&u="+b:"",c?"&ut="+c:"",Mg(),Sg,Tg,Zg,Yg,"&z=0"].join("")},bh=function(){return[Ig,"&v=3&t=t","&pid="+
Ka(),"&rv="+Pd.cc].join("")},ch="0.005000">Math.random(),$g=bh(),dh=function(){$g=bh()},Rg={},Sg="",Tg="",Yg="",Zg="",Qg=void 0,ah={},Ug={},Ng=void 0,Vg=function(a,b){var c=0,d=0;return{jh:function(){if(c<a)return!1;Ta()-d>=b&&(c=0);return c>=a},Mh:function(){Ta()-d>=b&&(c=0);c++;d=Ta()}}}(2,1E3),Wg=1E3,eh=function(a,b){if(ch&&!Ug[a]&&Qg!==a){Og();Qg=a;Yg=Sg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ah[a]="&e="+c+"&eid="+a;Pg()}},fh=function(a,b,c){if(ch&&!Ug[a]&&
b){a!==Qg&&(Og(),Qg=a);var d,e=String(b[Ad.Ca]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Sg=Sg?Sg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(qd[g]?"1":"2")+d;Yg=Yg?Yg+"."+h:"&ti="+h;Pg();2022<=Xg().length&&Og()}},gh=function(a,b,c){if(ch&&!Ug[a]){a!==Qg&&(Og(),Qg=a);var d=c+b;Tg=Tg?Tg+
"."+d:"&epr="+d;Pg();2022<=Xg().length&&Og()}};var hh={},ih=new La,jh={},kh={},nh={name:"dataLayer",set:function(a,b){E($a(a,b),jh);lh()},get:function(a){return mh(a,2)},reset:function(){ih=new La;jh={};lh()}},mh=function(a,b){if(2!=b){var c=ih.get(a);ch&&c!==oh(a.split("."))&&I(5);return c}return oh(a.split("."))},oh=function(a){for(var b=jh,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},ph=function(a,b){kh.hasOwnProperty(a)||(ih.set(a,b),E($a(a,b),jh),lh())},lh=function(a){Na(kh,function(b,c){ih.set(b,c);
E($a(b,void 0),jh);E($a(b,c),jh);a&&delete kh[b]})},qh=function(a,b,c){hh[a]=hh[a]||{};var d=1!==c?oh(b.split(".")):ih.get(b);"array"===jb(d)||"object"===jb(d)?hh[a][b]=E(d):hh[a][b]=d},rh=function(a,b){if(hh[a])return hh[a][b]},sh=function(a,b){hh[a]&&delete hh[a][b]};var vh=/:[0-9]+$/,wh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},zh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=xh(a.protocol)||xh(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(vh,"").toLowerCase());return yh(a,b,c,d,e)},yh=function(a,b,c,d,e){var f,g=xh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ah(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(vh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||cf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ia(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=wh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},xh=function(a){return a?a.replace(":",
"").toLowerCase():""},Ah=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Bh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||cf("TAGGING",1),c="/"+c);var d=b.hostname.replace(vh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Ch=function(a){function b(n){var m=n.split("=")[0];return 0>d.indexOf(m)?n:m+"=0"}function c(n){return n.split("&").map(b).filter(function(m){return void 0!=
m}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Bh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Dh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Fh=function(a,b,c,d){return Eh(d)?Dh(a,String(b||document.cookie),c):[]},Ih=function(a,b,c,d,e){if(Eh(e)){var f=Gh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Hh(f,function(g){return g.mc},b);if(1===f.length)return f[0].id;f=Hh(f,function(g){return g.Gb},c);return f[0]?f[0].id:void 0}}};function Jh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Fh(b,f,!1,d).indexOf(c)}
var Oh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Eh(c.La))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Kh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.uh);g=e(g,"samesite",
c.Qh);c.Th&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var m=Lh(),q=void 0,t=!1,r=0;r<m.length;++r){var u="none"!==m[r]?m[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}t=!0;if(!Nh(u,c.path)&&Jh(v,a,b,c.La))return 0}if(q&&!t)throw q;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Nh(n,c.path)?1:Jh(g,a,b,c.La)?0:1},Ph=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Oh(a,b,c)};
function Hh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Gh(a,b,c){for(var d=[],e=Fh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),mc:1*l[0]||1,Gb:1*l[1]||1}))}}return d}
var Kh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Qh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Rh=/(^|\.)doubleclick\.net$/i,Nh=function(a,b){return Rh.test(document.location.hostname)||"/"===b&&Qh.test(a)},Lh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Rh.test(e)||Qh.test(e)||a.push("none");
return a},Eh=function(a){if(!Rf("gtag_cs_api")||!a||!ag())return!0;if(!$f(a))return!1;var b=Zf(a);return null==b?!0:!!b};var Sh=function(){for(var a=Af.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ta()/1E3)].join(".")},Vh=function(a,b,c,d,e){var f=Th(b);return Ih(a,f,Uh(c),d,e)},Wh=function(a,b,c,d){var e=""+Th(c),f=Uh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Th=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Uh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Xh(a,b,c){var d,e=a.Cb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ta())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Yh=["1"],Zh={},ci=function(a){var b=$h(a.prefix);Zh[b]||ai(b,a.path,a.domain)||(bi(b,Sh(),a),ai(b,a.path,a.domain))};function bi(a,b,c){var d=Wh(b,"1",c.domain,c.path),e=Xh(c);e.La="ad_storage";Ph(a,d,e)}function ai(a,b,c){var d=Vh(a,b,c,Yh,"ad_storage");d&&(Zh[a]=d);return d}function $h(a){return(a||"_gcl")+"_au"};function di(){for(var a=ei,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ei,gi;function hi(a){ei=ei||fi();gi=gi||di();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,m=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(m=64));b.push(ei[l],ei[n],ei[m],ei[q])}return b.join("")}
function ii(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),m=gi[n];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}ei=ei||fi();gi=gi||di();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var ji;var ni=function(){var a=ki,b=li,c=mi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){If(L,"mousedown",d);If(L,"keyup",d);If(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},oi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};mi().decorators.push(f)},pi=function(a,b,c){for(var d=mi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,m=!!g.sameHost;if(l&&(m||n!==L.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[q])||m&&0<=l[q].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Wa(e,g.callback())}}return e},mi=function(){var a=Cf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qi=/(.*?)\*(.*?)\*(.*)/,ri=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,si=/^(?:www\.|m\.|amp\.)+/,ti=/([^?#]+)(\?[^#]*)?(#.*)?/;function ui(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var wi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hi(String(d))))}var e=b.join("*");return["1",vi(e),e].join("*")},vi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ji)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}ji=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^ji[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},yi=function(){return function(a){var b=Bh(B.location.href),c=b.search.replace("?",""),d=wh(c,"_gl",!1,!0)||"";a.query=xi(d)||{};var e=zh(b,"fragment").match(ui("_gl"));a.fragment=xi(e&&e[3]||"")||{}}},zi=function(a){var b=yi(),c=mi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Wa(d,e.query),a&&Wa(d,e.fragment));return d},
xi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=qi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],m=0;m<b;++m)if(n===vi(h,m)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=ii(t[r+1]);return q}}}}catch(u){}};
function Ai(a,b,c,d){function e(m){var q=m,t=ui(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}m=r;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+n}d=void 0===d?!1:d;var f=ti.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Bi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=pi(b,1,c),e=pi(b,2,c),f=pi(b,3,c);if(Xa(d)){var g=wi(d);c?Ci("_gl",g,a):Di("_gl",g,a,!1)}if(!c&&Xa(e)){var h=wi(e);Di("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,m=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Di(n,m,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Ci(n,m,q);break a}}"string"==typeof q&&Ai(n,m,q,void 0)}}
function Di(a,b,c,d){if(c.href){var e=Ai(a,b,c.href,void 0===d?!1:d);lf.test(e)&&(c.href=e)}}
function Ci(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Ai(a,b,c.action);lf.test(n)&&(c.action=n)}}}
var ki=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Bi(e,e.hostname)}}catch(g){}},li=function(a){try{if(a.action){var b=zh(Bh(a.action),"host");Bi(a,b)}}catch(c){}},Ei=function(a,b,c,d){ni();oi(a,b,"fragment"===c?2:1,!!d,!1)},Fi=function(a,b){ni();oi(a,[yh(B.location,"host",!0)],b,!0,!0)},Gi=function(){var a=L.location.hostname,b=ri.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(si,""),l=e.replace(si,""),n;if(!(n=h===l)){var m="."+l;n=h.substring(h.length-m.length,h.length)===m}return n},Hi=function(a,b){return!1===a?!1:a||b||Gi()};var Ii=/^\w+$/,Ji=/^[\w-]+$/,Ki=/^~?[\w-]+$/,Li={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Mi=function(){if(!Rf("gtag_cs_api")||!ag())return!0;var a=Zf("ad_storage");return null==a?!0:!!a},Ni=function(a,b){$f("ad_storage")?Mi()?a():dg(a,"ad_storage"):b?cf("TAGGING",3):cg(function(){Ni(a,!0)},["ad_storage"])},Qi=function(a){var b=[];if(!L.cookie)return b;var c=Fh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Oi(c[d]);e&&-1===Ia(b,e)&&b.push(e)}return Pi(b)};
function Ri(a){return a&&"string"==typeof a&&a.match(Ii)?a:"_gcl"}
var Ti=function(){var a=Bh(B.location.href),b=zh(a,"query",!1,void 0,"gclid"),c=zh(a,"query",!1,void 0,"gclsrc"),d=zh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||wh(e,"gclid",!1,void 0);c=c||wh(e,"gclsrc",!1,void 0)}return Si(b,c,d)},Si=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Ji))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Rf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Vi=function(a){var b=Ti();Ni(function(){return Ui(b,a)})};
function Ui(a,b,c){function d(n,m){var q=Wi(n,e);q&&(Ph(q,m,f),g=!0)}b=b||{};var e=Ri(b.prefix);c=c||Ta();var f=Xh(b,c,!0);f.La="ad_storage";var g=!1,h=Math.round(c/1E3),l=function(n){return["GCL",h,n].join(".")};a.aw&&(!0===b.Fi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Yi=function(a,b){var c=zi(!0);Ni(function(){for(var d=Ri(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Li[f]){var g=Wi(f,d),h=c[g];if(h){var l=Math.min(Xi(h),Ta()),n;b:{for(var m=l,q=Fh(g,L.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(Xi(q[t])>m){n=!0;break b}n=!1}if(!n){var r=Xh(b,l,!0);r.La="ad_storage";Ph(g,h,r)}}}}Ui(Si(c.gclid,c.gclsrc),b)})},Wi=function(a,b){var c=Li[a];if(void 0!==c)return b+c},Xi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Oi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Zi=function(a,b,c,d,e){if(Ha(b)){var f=Ri(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Wi(a[l],f);if(n){var m=Fh(n,L.cookie,void 0,"ad_storage");m.length&&(h[n]=m.sort()[m.length-1])}}return h};Ni(function(){Ei(g,b,c,d)})}},Pi=function(a){return a.filter(function(b){return Ki.test(b)})},$i=function(a,b){for(var c=Ri(b.prefix),d={},e=0;e<a.length;e++)Li[a[e]]&&(d[a[e]]=Li[a[e]]);Ni(function(){Na(d,function(f,g){var h=Fh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=Xi(l),
m={};m[f]=[Oi(l)];Ui(m,b,n)}})})};function aj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var bj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(ag()){var c=Ti();if(aj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Fi(function(){return d},3);Fi(function(){var e={};return e._up="1",e},1)}}},cj=function(){var a;if(Mi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Jd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Jd]||(g[b[h].Jd]=[]),g[b[h].Jd].push({timestamp:l[1],Qg:l[2]}))}a=g}else a={};return a};var dj=/^\d+\.fls\.doubleclick\.net$/;function ej(a,b){$f(H.o)?hg(H.o)?a():dg(a,H.o):b?I(42):jg(function(){ej(a,!0)},[H.o])}function fj(a){var b=Bh(B.location.href),c=zh(b,"host",!1);if(c&&c.match(dj)){var d=zh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function gj(a,b,c){if("aw"==a||"dc"==a){var d=fj("gcl"+a);if(d)return d.split(".")}var e=Ri(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!hg(H.o)&&c,g;g=Ti()[a]||[];if(0<g.length)return f?["0"]:g}var h=Wi(a,e);return h?Qi(h):[]}
var hj=function(a){var b=fj("gac");if(b)return!hg(H.o)&&a?"0":decodeURIComponent(b);var c=cj(),d=[];Na(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Qg);g=Pi(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},ij=function(a,b){var c=Ti().dc||[];ej(function(){ci(b);var d=Zh[$h(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Of(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=$h(b.prefix),m=Zh[n];m&&bi(n,m,b)}})};var jj=/[A-Z]+/,kj=/\s/,lj=function(a){if(p(a)&&(a=Sa(a),!kj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(jj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},nj=function(a){for(var b={},c=0;c<a.length;++c){var d=lj(a[c]);d&&(b[d.id]=d)}mj(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function mj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var oj=function(){var a=!1;return a};var qj=function(a,b,c,d){return(2===pj()||d||"http:"!=B.location.protocol?a:b)+c},pj=function(){var a=Ff(),b;if(1===a)a:{var c=Fg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Ej=function(a){return hg(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Ch(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var Fj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Gj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Hj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ij="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Kj=function(a){var b;b||(b=mh("gtm.whitelist"));b&&I(9);
var c=b&&Ya(Ra(b),Gj),d;d||(d=mh("gtm.blacklist"));d||(d=mh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Jj()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(Ra(d),"google")&&I(2);var e=d&&Ya(Ra(d),Hj),f={};return function(g){var h=
g&&g[Ad.Ca];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kg[h]||[],n=a(h,l);if(b){var m;if(m=n)a:{if(0>Ia(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ia(c,l[q])){I(11);m=!1;break a}}else{m=!1;break a}m=!0}n=m}var t=!1;if(d){var r=0<=Ia(e,h);if(r)t=r;else{var u=Ma(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Ia(l,"sandboxedScripts"))||c&&-1!==Ia(c,"sandboxedScripts")||(v=Ma(e,Ij));return f[h]=v}},Jj=function(){return Fj.test(B.location&&B.location.hostname)};var Lj={active:!0,isAllowed:function(){return!0}},Mj=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Nj=function(){};var Oj=!1,Pj=0,Qj=[];function Rj(a){if(!Oj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Oj=!0;for(var e=0;e<Qj.length;e++)O(Qj[e])}Qj.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function Sj(){if(!Oj&&140>Pj){Pj++;try{L.documentElement.doScroll("left"),Rj()}catch(a){B.setTimeout(Sj,50)}}}var Tj=function(a){Oj?a():Qj.push(a)};var Uj={},Vj={},Wj=function(a,b,c,d){if(!Vj[a]||Dg[b]||"__zone"===b)return-1;var e={};lb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Vj[a].tags.push(e)-1},Xj=function(a,b,c,d){if(Vj[a]){var e=Vj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Yj(a){for(var b=Uj[a]||[],c=0;c<b.length;c++)b[c]();Uj[a]={push:function(d){d(Pd.C,Vj[a])}}}
var bk=function(a,b,c){Vj[a]={tags:[]};Fa(b)&&Zj(a,b);c&&B.setTimeout(function(){return Yj(a)},Number(c));return ak(a)},Zj=function(a,b){Uj[a]=Uj[a]||[];Uj[a].push(Va(function(){return O(function(){b(Pd.C,Vj[a])})}))};function ak(a){var b=0,c=0,d=!1;return{add:function(){c++;return Va(function(){b++;d&&b>=c&&Yj(a)})},jg:function(){d=!0;b>=c&&Yj(a)}}};var ck=function(){function a(d){return!Ga(d)||0>d?0:d}if(!R._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ga(nh.get("gtm.start"))?nh.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Hg-b)}}};var gk={},hk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},ik=!1;
var jk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}ck();return B[b]},kk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=hk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var mk=function(a){},lk=function(){return B.GoogleAnalyticsObject||"ga"},nk=function(a,b){return function(){var c=hk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var sk=function(){return!1},tk=function(){var a={};return function(b,c,d){}};function uk(a,b,c,d){var e=od[a],f=vk(a,b,c,d);if(!f)return null;var g=wd(e[Ad.ce],c,[]);if(g&&g.length){var h=g[0];f=uk(h.index,{I:f,H:1===h.xe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function vk(a,b,c,d){function e(){if(f[Ad.Cf])h();else{var w=xd(f,c,[]),y=Wj(c.id,String(f[Ad.Ca]),Number(f[Ad.de]),w[Ad.Df]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ta()-C;fh(c.id,od[a],"5");Xj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ta()-C;fh(c.id,od[a],"6");Xj(c.id,y,"failure",z);h()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;fh(c.id,f,"1");var A=function(){var z=Ta()-C;fh(c.id,f,"7");Xj(c.id,y,"exception",z);x||(x=!0,h())};var C=Ta();try{vd(w,c)}catch(z){A(z)}}}var f=od[a],g=b.I,h=b.H,l=b.terminate;if(c.qd(f))return null;var n=wd(f[Ad.ee],c,[]);if(n&&n.length){var m=n[0],q=uk(m.index,{I:g,H:h,terminate:l},c,d);if(!q)return null;g=q;h=2===m.xe?l:q}if(f[Ad.Zd]||f[Ad.Hf]){var t=f[Ad.Zd]?pd:c.Yh,r=g,u=h;if(!t[a]){e=Va(e);var v=wk(a,t,e);g=v.I;h=v.H}return function(){t[a](r,u)}}return e}
function wk(a,b,c){var d=[],e=[];b[a]=xk(d,e,c);return{I:function(){b[a]=yk;for(var f=0;f<d.length;f++)d[f]()},H:function(){b[a]=zk;for(var f=0;f<e.length;f++)e[f]()}}}function xk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function yk(a){a()}function zk(a,b){b()};var Ck=function(a,b){for(var c=[],d=0;d<od.length;d++)if(a.Eb[d]){var e=od[d];var f=b.add();try{var g=uk(d,{I:f,H:f,terminate:f},a,d);g?c.push({af:d,Te:yd(e),oc:g}):(Ak(d,a),f())}catch(l){f()}}b.jg();c.sort(Bk);for(var h=0;h<c.length;h++)c[h].oc();return 0<c.length};function Bk(a,b){var c,d=b.Te,e=a.Te;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.af,h=b.af;f=g>h?1:g<h?-1:0}return f}
function Ak(a,b){if(!ch)return;var c=function(d){var e=b.qd(od[d])?"3":"4",f=wd(od[d][Ad.ce],b,[]);f&&f.length&&c(f[0].index);fh(b.id,od[d],e);var g=wd(od[d][Ad.ee],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Dk=!1,Ek=function(a,b,c,d,e){if("gtm.js"==b){if(Dk)return!1;Dk=!0}eh(a,b);var f=bk(a,d,e);qh(a,"event",1);qh(a,"ecommerce",1);qh(a,"gtm");var g={id:a,name:b,qd:Kj(c),Eb:[],Yh:[],Ke:function(){I(6)}};g.Eb=Kd(g);
var h=Ck(g,f);"gtm.js"!==b&&"gtm.sync"!==b||mk(Pd.C);if(!h)return h;for(var l=0;l<g.Eb.length;l++)if(g.Eb[l]){var n=od[l];if(n&&!Dg[String(n[Ad.Ca])])return!0}return!1};function Fk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Bh(""+c+b).href}}function Gk(a,b){return Hk()?Fk(a,b):void 0}function Hk(){var a=!1;return a};var Ik=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.I=function(){};this.H=function(){};this.eventId=void 0},Jk=function(a){var b=new Ik;b.eventModel=a;return b},Kk=function(a,b){a.targetConfig=b;return a},Lk=function(a,b){a.containerConfig=b;return a},Mk=function(a,b){a.a=b;return a},Nk=function(a,b){a.globalConfig=b;return a},Ok=function(a,b){a.I=b;return a},Pk=function(a,b){a.H=b;return a};
Ik.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Qk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var Rk;if(3===Pd.cc.length)Rk="g";else{var Sk="G";Rk=Sk}
var Tk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Rk,OPT:"o"},Uk=function(a){var b=Pd.C.split("-"),c=b[0].toUpperCase(),d=Tk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Pd.cc.length){var g="w";f="2"+g}else f="";return f+d+Pd.cc+e};var Vk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Wk=function(){return pf("iPhone")&&!pf("iPod")&&!pf("iPad")},Xk=function(){Wk()||pf("iPad")||pf("iPod")};pf("Opera");pf("Trident")||pf("MSIE");pf("Edge");!pf("Gecko")||-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")||pf("Trident")||pf("MSIE")||pf("Edge");-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")&&pf("Mobile");pf("Macintosh");pf("Windows");pf("Linux")||pf("CrOS");var Yk=la.navigator||null;Yk&&(Yk.appVersion||"").indexOf("X11");pf("Android");Wk();pf("iPad");pf("iPod");Xk();mf.toLowerCase().indexOf("kaios");var Zk=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var $k=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};qf();Wk()||pf("iPod");pf("iPad");!pf("Android")||rf()||qf()||pf("Opera")||pf("Silk");rf();!pf("Safari")||rf()||pf("Coast")||pf("Opera")||pf("Edge")||pf("Edg/")||pf("OPR")||qf()||pf("Silk")||pf("Android")||Xk();Object.freeze&&Object.freeze([]);var al=function(){this.a=function(a,b){return void 0===b?!1:b}};al.a=void 0;al.i=function(){return al.a?al.a:al.a=new al};var bl=function(){};var cl=function(a){this.i=a;this.a=null;this.s={};this.F=0;this.m=null};ja(cl,bl);var el=function(a){return"function"===typeof a.i.__tcfapi||null!=dl(a)};
cl.prototype.addEventListener=function(a){fl(this,"addEventListener",function(b,c){var d=c?b:{};d.internalErrorState=void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent?2:d.cmpStatus&&"error"!==d.cmpStatus?0:3;0!==d.internalErrorState&&(d.tcString="tcunavailable");a(d)})};
cl.prototype.removeEventListener=function(a){a&&a.listenerId&&fl(this,"removeEventListener",null,a.listenerId)};
var hl=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=gl(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&gl(a.purpose.consents,b)},gl=function(a,b){return!(!a||!a[b])},fl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(dl(a)){il(a);var f=++a.F;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},
dl=function(a){if(a.a)return a.a;a.a=Zk(a.i,"__tcfapiLocator");return a.a},il=function(a){a.m||(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},Vk(a.i,a.m))};var jl={1:0,3:0,4:0,7:3,9:3,10:3};function kl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var ll=kl("",550),ml=kl("",500);function nl(){var a=R.tcf||{};return R.tcf=a}
var ol=function(a,b){this.m=a;this.a=b;this.i=Ta();},pl=function(a){},ql=function(a){},wl=function(){var a=nl(),b=new cl(B,3E3),c=new ol(b,a);if((rl()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||el(b))){a.active=!0;a.Hb={};sl();var d=setTimeout(function(){tl(a);ul(a);d=null},ml);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)tl(a),ul(a),pl(c);else{var f;if(!1===e.gdprApplies)f=vl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in jl)if(jl.hasOwnProperty(h))if("1"===h){var l=e,n=void 0,m,q=l;(m=!1===q.gdprApplies||"error"===q.cmpStatus)||(n=void 0===n?!1:n,m=al.i().a(gf(1902),n)&&0!==q.internalErrorState);g["1"]=m||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!1===l.gdprApplies||"tcunavailable"===l.tcString?!0:hl(l,"1"):!1}else{var t;var r=void 0,u=jl[h];r=
void 0===r?"755":r;var v;b:{if(e.publisher&&e.publisher.restrictions){var w=e.publisher.restrictions[h];if(void 0!==w){v=w[void 0===r?"755":r];break b}}v=void 0}if(0===v)t=!1;else{var y=u;2===u?(y=0,2===v&&(y=1)):3===u&&(y=1,1===v&&(y=0));t=0===y?hl(e,h,r):1===y?e.purpose&&e.vendor?gl(e.purpose.legitimateInterests,h)&&gl(e.vendor.legitimateInterests,void 0===r?"755":r):!1:!0}g[h]=t}f=g}f&&(a.tcString=e.tcString||"tcempty",a.Hb=f,ul(a),pl(c))}}),ql(c)}catch(e){d&&(clearTimeout(d),d=null),tl(a),ul(a)}}};
function tl(a){a.type="e";a.tcString="tcunavailable";a.Hb=vl()}function sl(){var a={};fg((a.ad_storage="denied",a.wait_for_update=ll,a))}var rl=function(){var a=!1;a=!0;return a};function vl(){var a={},b;for(b in jl)jl.hasOwnProperty(b)&&(a[b]=!0);return a}function ul(a){var b={};gg((b.ad_storage=a.Hb["1"]?"granted":"denied",b))}
var xl=function(){var a=nl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},yl=function(){var a=nl();return a.active?a.tcString||"":""},zl=function(a){if(!jl.hasOwnProperty(String(a)))return!0;var b=nl();return b.active&&b.Hb?!!b.Hb[String(a)]:!0};function Al(a,b,c){function d(q){var t;R.reported_gclid||(R.reported_gclid={});t=R.reported_gclid;var r=f+(q?"gcu":"gcs");if(!t[r]){t[r]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(ag()){var y=hg(H.o);v("gcs",ig());q&&v("gcu","1");v("rnd",m);if((!f||g&&"aw.ds"!==g)&&hg(H.o)){var x=Qi("_gcl_aw");v("gclaw",x.join("."))}v("url",String(B.location).split(/[?#]/)[0]);v("dclid",Bl(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",yl());"1"===zi(!1)._up&&v("gtm_up","1");v("gclid",Bl(b,f));v("gclsrc",g);v("gtm",Uk(!c));var A=w+"/pagead/landing?"+u.join("&");Of(A)}}var e=Ti(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=ag();if(l||n){var m=""+Sh();n?jg(function(){d();hg(H.o)||dg(function(){return d(!0)},H.o)},[H.o]):d()}}function Bl(a,b){var c=a&&!hg(H.o);return b&&c?"0":b}var om=function(){var a=!0;zl(7)&&zl(9)&&zl(10)||(a=!1);var b=!0;b&&!nm()&&(a=!1);return a},nm=function(){var a=!0;zl(3)&&zl(4)||(a=!1);return a};function Im(){var a=R;return a.gcq=a.gcq||new Jm}
var Km=function(a,b,c){Im().register(a,b,c)},Lm=function(a,b,c,d){Im().push("event",[b,a],c,d)},Mm=function(a,b){Im().push("config",[a],b)},Nm=function(a,b,c){Im().push("get",[a,b],c)},Om={},Pm=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Qm=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";this.a=d;this.i=e},Jm=function(){this.m={};this.i={};this.a=[]},Rm=function(a,b){var c=lj(b);return a.m[c.containerId]=a.m[c.containerId]||new Pm},
Sm=function(a,b,c){if(b){var d=lj(b);if(d&&1===Rm(a,b).status){Rm(a,b).status=2;var e={};ch&&(e.timeoutId=B.setTimeout(function(){I(38);Pg()},3E3));a.push("require",[e],d.containerId);Om[d.containerId]=Ta();if(oj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Gk(c,g)||h;Ef(l)}}}},Tm=function(a,b,c,d){if(d.da){var e=Rm(a,d.da),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.da]),l=E(e.containerConfig),n=E(e.i),m=E(a.i),q=mh("gtm.uniqueEventId"),t=lj(d.da).prefix,r=Pk(Ok(Nk(Mk(Lk(Kk(Jk(g),h),l),n),m),function(){
gh(q,t,"2");}),function(){gh(q,t,"3");});try{gh(q,t,"1");f(d.da,b,d.m,r)}catch(u){gh(q,t,"4");}}}};
Jm.prototype.register=function(a,b,c){if(3!==Rm(this,a).status){Rm(this,a).m=b;Rm(this,a).status=3;c&&(Rm(this,a).i=c);var d=lj(a),e=Om[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var h=mh("gtm.uniqueEventId"),l=g,n=Ta()-f;if(ch&&!Ug[h]){h!==Qg&&(Og(),Qg=h);var m=l+"."+Math.floor(f-e)+"."+Math.floor(n);Zg=Zg?Zg+","+m:"&cl="+m}delete Om[d.containerId]}this.flush()}};
Jm.prototype.push=function(a,b,c,d){var e=Math.floor(Ta()/1E3);Sm(this,c,b[0][H.Ia]||this.i[H.Ia]);this.a.push(new Qm(a,e,c,b,d));d||this.flush()};
Jm.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Rm(this,c.da).status&&!a)return;ch&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(m,q){E($a(m,q),b.i)});break;case "config":var d=c.a[0],e=!!d[H.Yb];delete d[H.Yb];var f=Rm(this,c.da),g=lj(c.da),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Tm(this,H.ia,d,c);f.a=!0;delete d[H.hb];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.da]);break;case "event":Tm(this,c.a[1],c.a[0],c);break;case "get":}this.a.shift()}};var Um=function(a,b,c){};var Vm=function(a,b,c,d){};var Wm=function(a){};var Xm=function(a,b,c){};var Ym=function(a,b){return!0};var Zm=function(a,b){var c;return c};var $m=function(a){};var an=!1,bn=[];function cn(){if(!an){an=!0;for(var a=0;a<bn.length;a++)O(bn[a])}}var dn=function(a){an?O(a):bn.push(a)};var en=function(a){F(this.i.a,["listener:!Fn"],arguments);Ne(this,"process_dom_events","window","load");dn(nb(a))};var fn=function(a,b){var c;var d=ub(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var gn=function(a){var b;F(this.i.a,["path:!string"],arguments);Ne(this,"access_globals","read",a);var c=a.split("."),d=B,e;for(e=0;e<c.length-1;e++){var f=c[e];d===B&&d[f]&&!d.hasOwnProperty(f)&&I(47);d=d[c[e]];if(null==d)return;d===L&&I(48);d===B&&I(49)}var g=c[e];d===B&&d[g]&&!d.hasOwnProperty(g)&&I(47);b=d[c[e]];var h=ub(b,this.m);void 0===h&&void 0!==b&&I(45);return h};var hn=function(a,b){var c=null;return ub(c,this.m)};var jn=function(a){var b;return ub(b,this.m)};var kn=function(a){var b;return b};var ln=function(a,b){b=void 0===b?!0:b;var c;return c};var mn=function(a){var b=null;return b};var nn=function(a,b){var c;return c};var on=function(a,b){var c;return c};var pn=function(a){var b="";return b};var qn=function(a){var b="";F(this.i.a,["component:?string"],arguments),Ne(this,"get_url",a),b=zh(Bh(B.location.href),a);return b};var Ze=function(){Ne(this,"get_user_agent");return B.navigator.userAgent};var rn=function(a,b){};var sn={},tn=function(a,b,c,d){};var un=function(){return!1},vn={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var wn=function(){};var xn=function(a,b){var c=!1;return c};var yn=function(){var a="";return a};var zn=function(){var a="";return a};var An=function(a,b,c){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);Ne(this,"send_pixel",a);var d=this.m;Hf(a,function(){b instanceof bb&&b.Ma(d)},function(){c instanceof bb&&c.Ma(d)});};var Bn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Cn=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ne(this,"access_globals","readwrite",a);var d=a.split("."),e=B,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=tb(b,this.m),!0;return!1};var Dn=function(a,b,c){var d=this;var e=function(t,r){var u=new hb;u.set("name",t);u.set("message",r);return u},f=function(t){for(var r=new Uint8Array(t),u=Array(r.length),v=0;v<r.length;v++)u[v]=r[v];var w=u.map(function(y){return String.fromCharCode(y)}).join("");return B.btoa(w)};F(this.i.a,["input:!string","onSuccess:!Fn","onFailure:?Fn"],arguments);c=c||new bb("emptyFn",function(){});for(var g=B.msCrypto,h=B.crypto,l=$k(a),n=new Uint8Array(l.length),
m=0;m<l.length;m++)n[m]=l[m];if(h&&h.subtle)h.subtle.digest("SHA-256",n).then(function(t){return void b.i(d.m,f(t))},function(t){return void c.i(d.m,e(t.name,t.message))});else if(g&&g.subtle){var q=g.subtle.digest("SHA-256",n);q.oncomplete=function(t){return void b.i(d.m,f(t.target.result))};q.onerror=function(t){return void c.i(d.m,e(t.target.result.name,t.target.result.message))}}else c.i(this.m,e("BrowserNotSupported","This method is not supported in this browser."));};var En={},Fn={};En.getItem=function(a){var b=null;return b};
En.setItem=function(a,b){};
En.removeItem=function(a){};En.clear=function(){};var Gn=function(a){var b;return b};var Mc=function(){var a=new Ye;oj()?(a.add("injectHiddenIframe",Ea),a.add("injectScript",Ea)):(a.add("injectHiddenIframe",rn),a.add("injectScript",tn));var b=An;a.add("Math",Ge());a.add("TestHelper",af());a.add("addEventCallback",Wm);a.add("aliasInWindow",Ym);a.add("assertApi",Ce);a.add("assertThat",De);a.add("callInWindow",
Zm);a.add("callLater",$m);a.add("copyFromDataLayer",fn);a.add("copyFromWindow",gn);a.add("createArgumentsQueue",hn);a.add("createQueue",jn);a.add("decodeUri",He);a.add("decodeUriComponent",Ie);a.add("encodeUri",Je);a.add("encodeUriComponent",Ke);a.add("fail",Le);a.add("fromBase64",kn,!("atob"in B));a.add("generateRandom",Me);a.add("getContainerVersion",Oe);a.add("getCookieValues",ln);a.add("getQueryParameters",nn);a.add("getReferrerQueryParameters",on);a.add("getReferrerUrl",pn);a.add("getTimestamp",
Pe);a.add("getTimestampMillis",Pe);a.add("getType",Qe);a.add("getUrl",qn);a.add("localStorage",vn,!un());a.add("logToConsole",wn);a.add("makeInteger",Se);a.add("makeNumber",Te);a.add("makeString",Ue);a.add("makeTableMap",Ve);a.add("mock",Xe);a.add("queryPermission",xn);a.add("readCharacterSet",yn);a.add("readTitle",zn);a.add("sendPixel",b);a.add("setCookie",Bn);a.add("setInWindow",Cn);a.add("sha256",Dn);a.add("templateStorage",En);a.add("toBase64",Gn,!("btoa"in B));a.add("JSON",Re(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.tb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Kc,Td;
function Hn(){var a=data.runtime||[],b=data.runtime_lines;Kc=new Ic;In();jd=function(e,f,g){Jn(f);var h=new hb;Na(f,function(r,u){var v=ub(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});Kc.a.a.s=Gd();var l={kg:Ud(e),eventId:void 0!==g?g.id:void 0,tb:function(){return e},log:function(){}};if(sk()){var n=tk(),m=void 0,q=void 0;l.fa={i:{},a:function(r,u,v){1===u&&(m=r);7===u&&(q=v);n(r,u,v)},m:We()};l.log=function(r,u){if(m){var v=Array.prototype.slice.call(arguments,1);n(m,4,{level:r,source:q,message:v})}}}var t=
Lc(l,[e,h]);Kc.a.a.s=void 0;t instanceof ra&&"return"===t.a&&(t=t.i);return tb(t)};Nc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ha(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Cd(d,b[c]);Kc.oc(d)}}function Jn(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){O(b)});Fa(c)&&(a.gtmOnFailure=function(){O(c)})}
function In(){var a=Kc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Oc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}function Kn(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kg[e]=Kg[e]||[];Kg[e].push(b)}})};var Ln="HA GF GP G UA AW DC".split(" "),Mn=!1,Nn={},On=!1;function Pn(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Lc]&&(c.eventCallback=b[H.Lc]),b[H.Xb]&&(c.eventTimeout=b[H.Xb]));return c}function Qn(){return Mn}
var Tn={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!lb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=Pn(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return On=!0,Qn(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Td.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&lb(a[1])?b=E(a[1]):3==a.length&&p(a[1])&&(b={},lb(a[2])||Ha(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){if(3===a.length){var b=function(){Qn()&&E(a[2],{subcommand:a[1]})};I(39);var c=a[1];"default"===c?(b(),fg(a[2])):"update"===c&&(b(),gg(a[2]))}}};var Un={policy:!0};var Vn=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Xn=function(a){var b=Wn(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var oo=function(a){if(no(a))return a;this.a=a};oo.prototype.Xg=function(){return this.a};var no=function(a){return!a||"object"!==jb(a)||lb(a)?!1:"getUntrustedUpdateValue"in a};oo.prototype.getUntrustedUpdateValue=oo.prototype.Xg;var po=[],qo=!1,ro=function(a){return B["dataLayer"].push(a)},so=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function to(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&ph(f,void 0),ph(f,g))});Gg||(Gg=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Lg(),a["gtm.uniqueEventId"]=d,ph("gtm.uniqueEventId",d));var e=uo(a);switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function uo(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Pd.C,c):Lj;if(!d.active){if("gtm.js"===b)for(var f=0;f<od.length;f++){var g=String(od[f][String(Ad.Ca)]);if(Dg[g]&&"__paused"!==g){I(50);break}}return!1}return Ek(c,b,d.isAllowed,a.eventCallback,a.eventTimeout)?!0:!1}
function vo(){for(var a=!1;!qo&&0<po.length;){qo=!0;delete jh.eventModel;lh();var b=po.shift();if(null!=b){var c=no(b);if(c){var d=b;b=no(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=mh(g,1);if(Ha(h)||lb(h))h=E(h);kh[g]=h}}try{if(Fa(b))try{b.call(nh)}catch(v){}else if(Ha(b)){var l=
b;if(p(l[0])){var n=l[0].split("."),m=n.pop(),q=l.slice(1),t=mh(n.join("."),2);if(void 0!==t&&null!==t)try{t[m].apply(t,q)}catch(v){}}}else{if(Oa(b)){a:{var r=b;if(r.length&&p(r[0])){var u=Tn[r[0]];if(u&&(!c||!Un[r[0]])){b=u(r);break a}}b=void 0}if(!b){qo=!1;continue}}a=to(b)||a}}finally{c&&lh(!0)}}qo=!1}return!a}
function wo(){var a=vo();try{Vn(B["dataLayer"],Pd.C)}catch(b){}return a}
var yo=function(){var a=Cf("dataLayer",[]),b=Cf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Tj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});dn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<R.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new oo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);po.push.apply(po,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return vo()&&h};var d=a.slice(0);po.push.apply(po,d);xo()&&O(wo)},xo=function(){var a=!0;return a};var zo={};zo.Zb=new String("undefined");
var Ao=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===zo.Zb?b:a[d]);return c.join("")}};Ao.prototype.toString=function(){return this.a("undefined")};Ao.prototype.valueOf=Ao.prototype.toString;zo.Qf=Ao;zo.Yc={};zo.Eg=function(a){return new Ao(a)};var Bo={};zo.Nh=function(a,b){var c=Lg();Bo[c]=[a,b];return c};zo.te=function(a){var b=a?0:1;return function(c){var d=Bo[c];if(d&&"function"===typeof d[b])d[b]();Bo[c]=void 0}};zo.hh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};zo.Fh=function(a){if(a===zo.Zb)return a;var b=Lg();zo.Yc[b]=a;return'google_tag_manager["'+Pd.C+'"].macro('+b+")"};zo.vh=function(a,b,c){a instanceof zo.Qf&&(a=a.a(zo.Nh(b,c)),b=Ea);return{od:a,I:b}};var Co=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Kf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Do=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Eo=function(a,b,c){Do(a)[b]=c},Fo=function(a,b,c,d){var e=Do(a),f=Ua(e,b,d);e[b]=c(f)},Go=function(a,b,c){var d=Do(a);return Ua(d,b,c)};var Ho=["input","select","textarea"],Io=["button","hidden","image","reset","submit"],Jo=function(a){var b=a.tagName.toLowerCase();return!Ja(Ho,function(c){return c===b})||"input"===b&&Ja(Io,function(c){return c===a.type.toLowerCase()})?!1:!0},Ko=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Nf(a,["form"],100)},Lo=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Jo(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Mo=!!B.MutationObserver,No=void 0,Oo=function(a){if(!No){var b=function(){var c=L.body;if(c)if(Mo)(new MutationObserver(function(){for(var e=0;e<No.length;e++)O(No[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;If(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<No.length;e++)O(No[e])}))})}};No=[];L.body?b():O(b)}No.push(a)};
var Zo=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},$o=function(a){var b=Zo(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},ap=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,null))}return!1};
var hp=function(a,b,c){function d(){var g=a();f+=e?(Ta()-e)*g.playbackRate/1E3:0;e=Ta()}var e=0,f=0;return{nc:function(g,h,l){var n=a(),m=n.ue,q=void 0!==l?Math.round(l):void 0!==h?Math.round(n.ue*h):Math.round(n.Fg),t=void 0!==h?Math.round(100*h):0>=m?0:Math.round(q/m*100),r=L.hidden?!1:.5<=$o(c);d();var u=Co(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=g;u["gtm.videoUrl"]=n.url;u["gtm.videoTitle"]=n.title;u["gtm.videoDuration"]=Math.round(m);u["gtm.videoCurrentTime"]=
Math.round(q);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=r;ro(u)},Ph:function(){e=Ta()},cd:function(){d()}}};var ip=B.clearTimeout,jp=B.setTimeout,S=function(a,b,c){if(oj()){b&&O(b)}else return Ef(a,b,c)},kp=function(){return new Date},lp=function(){return B.location.href},mp=function(a){return zh(Bh(a),"fragment")},np=function(a){return Ah(Bh(a))},op=function(a,b){return mh(a,b||2)},pp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=ro(a)):d=ro(a);return d},qp=function(a,b){B[a]=b},V=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},rp=function(a,b,c){return Fh(a,b,void 0===c?!0:!!c)},sp=function(a,b,c){return 0===Ph(a,b,c)},tp=function(a,b){if(oj()){b&&O(b)}else Gf(a,b)},up=function(a){return!!Go(a,"init",!1)},vp=function(a){Eo(a,"init",!0)},wp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Fg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(qj("https://","http://",c))},xp=function(a,
b){var c=a[b];return c};var yp=zo.vh;function Vp(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Wp=new La;function Xp(a,b){function c(g){var h=Bh(g),l=zh(h,"protocol"),n=zh(h,"host",!0),m=zh(h,"port"),q=zh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==m||"https"==l&&"443"==m)l="web",m="default";return[l,n,m,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Yp(a){return Zp(a)?1:0}
function Zp(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ha(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Yp(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Vp(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ia(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var m=a.ignore_case?"i":void 0;try{var q=String(c)+m,t=Wp.get(q);t||(t=new RegExp(c,m),Wp.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Xp(b,c)}return!1};var $p={},aq=encodeURI,Y=encodeURIComponent,bq=Hf;var cq=function(a,b){if(!a)return!1;var c=zh(Bh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var dq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};$p.ih=function(){var a=!1;return a};function Cr(){return B.gaGlobal=B.gaGlobal||{}}var Dr=function(){var a=Cr();a.hid=a.hid||Ka();return a.hid},Er=function(a,b){var c=Cr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Nr=window,Or=document,Pr=function(a){var b=Nr._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Nr["ga-disable-"+a])return!0;try{var c=Nr.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Dh("AMP_TOKEN",String(Or.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Or.getElementById("__gaOptOutExtension")?!0:!1};function Sr(a){delete a.eventModel[H.hb];Ur(a.eventModel)}var Ur=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.qa]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Xr=function(a,b,c){Lm(b,c,a)},Yr=function(a,b,c){Lm(b,c,a,!0)},$r=function(a,b){};
function Zr(a,b){}var Z={b:{}};
Z.b.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__send_pixel=b;Z.__send_pixel.g="send_pixel";Z.__send_pixel.h=!0;Z.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_allowedUrls||"specific",d=b.vtp_urls||[],e=b.vtp_createPermissionError;return{assert:function(f,g){if(!p(g))throw e(f,{},"URL must be a string.");try{if("any"===c&&se(Bh(g))||"specific"===c&&te(Bh(g),d))return}catch(h){throw e(f,{},"Invalid URL filter.");}throw e(f,{},"Prohibited URL: "+g+".");
},K:a}})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(rh(a.vtp_gtmEventId,"event"))})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Co(c,"gtm.click");pp(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!up("cl")){var c=V("document");If(c,"click",a,!0);vp("cl")}O(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return rp(a.vtp_name,op("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(m,q,t){if(!p(t))throw d(m,{},"Key must be a string.");if("read"===q){if(-1<Ia(e,t))return}else if("write"===q){if(-1<Ia(f,t))return}else if("readwrite"===q){if(-1<Ia(f,t)&&-1<Ia(e,t))return}else if("execute"===q){if(-1<Ia(g,t))return}else throw d(m,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(m,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ka(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=op("gtm.url",1);c=c||lp();var d=b[a("vtp_component")];if(!d||"URL"==d)return np(String(c));var e=Bh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?Ha(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var m=0;m<n.length;m++){var q=zh(e,"QUERY",void 0,void 0,n[m]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=zh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=op(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.td&&b.vd>=b.td)b.pd&&V("self").clearInterval(b.pd);else{b.vd++;var c=kp().getTime();pp({event:b.R,"gtm.timerId":b.pd,"gtm.timerEventNumber":b.vd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.td,"gtm.timerStartTime":b.$e,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.$e,"gtm.triggers":b.ai})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){O(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{R:b.vtp_eventName,vd:0,interval:Number(b.vtp_interval),td:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ai:String(b.vtp_uniqueTriggerId||"0"),$e:kp().getTime()};c.pd=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(m,q){if(ag()&&!d[m]){var t=function(){var r=hk(),u="gtm"+Lg(),v=l(q),w={name:u};h(v,w,!0);r("create",m,w);r(function(){r.remove(u)})};dg(t,H.M);dg(t,H.o);d[m]=!0}}var b,c={},d={},e=function(m){jg(function(){n(m)},[H.M,H.o])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h=function(m,q,t){var r=0;if(m)for(var u in m)if(m.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=g[u]?Qa(m[u]):m[u];"anonymizeIp"!=u||v||(v=void 0);q[u]=v;r++}return r},l=
function(m){var q={};m.vtp_gaSettings&&E(dq(m.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),q);E(dq(m.vtp_fieldsToSet,"fieldName","value"),q);hg(H.M)||(q.storage="none");hg(H.o)||(q.allowAdFeatures=!1,q.storeGac=!1);om()||(q.allowAdFeatures=!1);nm()||(q.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(q._x_19=m.vtp_transportUrl);return q},n=function(m){function q(qa,
T){void 0!==T&&D("set",qa,T)}var t={},r={},u={},v={};if(m.vtp_gaSettings){var w=m.vtp_gaSettings;E(dq(w.vtp_contentGroup,"index","group"),r);E(dq(w.vtp_dimension,"index","dimension"),u);E(dq(w.vtp_metric,"index","metric"),v);var y=E(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;m=E(m,y)}E(dq(m.vtp_contentGroup,"index","group"),r);E(dq(m.vtp_dimension,"index","dimension"),u);E(dq(m.vtp_metric,"index","metric"),v);var x=l(m),A=jk(m.vtp_functionName);
if(Fa(A)){var C="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?""!==m.vtp_trackerName&&(z=m.vtp_trackerName,C=z+"."):(z="gtm"+Lg(),C=z+".");var D=function(qa){var T=[].slice.call(arguments,0);T[0]=C+T[0];A.apply(window,T)},G=function(qa,T){return void 0===T?T:qa(T)},J=function(qa,T){if(T)for(var db in T)T.hasOwnProperty(db)&&D("set",qa+db,T[db])},Q=function(){},X={name:z};h(x,X,!0);var N=m.vtp_trackingId||t.trackingId;A("create",N,X);D("set","&gtm",Uk(!0));ag()&&(D("set","&gcs",ig()),a(N,m));x._x_19&&(null==Bf&&delete x._x_19,x._x_20&&!c[z]&&(c[z]=!0,A(nk(z,String(x._x_20)))));m.vtp_enableRecaptcha&&
D("require","recaptcha","recaptcha.js");(function(qa,T){void 0!==m[T]&&D("set",qa,m[T])})("nonInteraction","vtp_nonInteraction");J("contentGroup",r);J("dimension",u);J("metric",v);var ua={};h(x,ua,!1)&&D("set",ua);var ea;m.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var qa=x&&x.hitCallback;
Fa(qa)&&qa();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var M={hitType:"event",eventCategory:String(m.vtp_eventCategory||t.category),eventAction:String(m.vtp_eventAction||t.action),eventLabel:G(String,m.vtp_eventLabel||t.label),eventValue:G(Pa,m.vtp_eventValue||t.value)};h(ea,M,!1);D("send",M);}else if("TRACK_SOCIAL"==
m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==m.vtp_trackType){}else{m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var Aa="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:Aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Dc="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Dc})}ea?D("send","pageview",ea):D("send","pageview");}if(!b){var Tb=
m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&(Tb="internal/"+Tb);b=!0;var ce=Gk(x._x_19,"/analytics.js"),Db=qj("https:","http:","//www.google-analytics.com/"+Tb,x&&!!x.forceSSL);S("analytics.js"===Tb&&ce?ce:Db,function(){var qa=hk();qa&&qa.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else O(m.vtp_gtmOnFailure)};Z.__ua=e;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();
Z.b.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.g="get_url";Z.__get_url.h=!0;Z.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!p(g))throw e(f,{},"URL component must be a string.");if(c&&0>Ia(c,g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!p(h))throw e(f,{},"Query key must be a string.");if(0>Ia(d,h))throw e(f,{},"Prohibited query key: "+h);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},K:a}})}();



Z.b.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return L.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<t.length;x++)if(0<=w.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!u){var x=V("document");u=x.location.protocol+"//"+x.location.hostname;x.location.port&&(u+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(u)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.Kd)&&(w.setAttribute("data-gtm-yt-inspected-"+y.Kd,"true"),d(w,y.Ae))){w.id||(w.id=a());var x=V("YT"),A=x.get(w.id);A||(A=new x.Player(w.id));var C=g(A,y),z={},D;for(D in C)z.fb=D,C.hasOwnProperty(z.fb)&&A.addEventListener(z.fb,function(G){return function(J){return C[G.fb](J.data)}}(z)),z={fb:z.fb}}}
function f(w){O(function(){function y(){for(var A=x.getElementsByTagName("iframe"),C=A.length,z=0;z<C;z++)e(A[z],w)}var x=V("document");y();Oo(y)})}function g(w,y){var x,A;function C(){ea=hp(function(){return{url:P,title:W,ue:K,Fg:w.getCurrentTime(),playbackRate:U}},y.Kd,w.getIframe());K=0;W=P="";U=1;return z}function z(ka){switch(ka){case r.PLAYING:K=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var Aa=w.getVideoData();W=Aa?Aa.title:""}U=w.getPlaybackRate();y.xg?ea.nc("start"):
ea.cd();M=n(y.Hh,y.Gh,w.getDuration());return D(ka);default:return z}}function D(){xa=w.getCurrentTime();ya=kp().getTime();ea.Ph();ua();return G}function G(ka){var Aa;switch(ka){case r.ENDED:return Q(ka);case r.PAUSED:Aa="pause";case r.BUFFERING:var Dc=w.getCurrentTime()-xa;Aa=1<Math.abs((kp().getTime()-ya)/1E3*U-Dc)?"seek":Aa||"buffering";w.getCurrentTime()&&(y.wg?ea.nc(Aa):ea.cd());N();return J;case r.UNSTARTED:return C(ka);default:return G}}function J(ka){switch(ka){case r.ENDED:return Q(ka);case r.PLAYING:return D(ka);
case r.UNSTARTED:return C(ka);default:return J}}function Q(){for(;A;){var ka=x;ip(A);ka()}y.vg&&ea.nc("complete",1);return C(r.UNSTARTED)}function X(){}function N(){A&&(ip(A),A=0,x=X)}function ua(){if(M.length&&0!==U){var ka=-1,Aa;do{Aa=M[0];if(Aa.Na>w.getDuration())return;ka=(Aa.Na-w.getCurrentTime())/U;if(0>ka&&(M.shift(),0===M.length))return}while(0>ka);x=function(){A=0;x=X;0<M.length&&M[0].Na===Aa.Na&&(M.shift(),ea.nc("progress",Aa.Re,Aa.Ye));ua()};A=jp(x,1E3*ka)}}var ea,M=[],K,P,W,U,xa,ya,cb=
C(r.UNSTARTED);A=0;x=X;return{onStateChange:function(ka){cb=cb(ka)},onPlaybackRateChange:function(ka){xa=w.getCurrentTime();ya=kp().getTime();ea.cd();U=ka;N();ua()}}}function h(w){for(var y=w.split(","),x=y.length,A=[],C=0;C<x;C++){var z=parseInt(y[C],10);isNaN(z)||100<z||0>z||A.push(z/100)}A.sort(function(D,G){return D-G});return A}function l(w){for(var y=w.split(","),x=y.length,A=[],C=0;C<x;C++){var z=parseInt(y[C],10);isNaN(z)||0>z||A.push(z)}A.sort(function(D,G){return D-G});return A}function n(w,
y,x){var A=w.map(function(D){return{Na:D,Ye:D,Re:void 0}});if(!y.length)return A;var C=y.map(function(D){return{Na:D*x,Ye:void 0,Re:D}});if(!A.length)return C;var z=A.concat(C);z.sort(function(D,G){return D.Na-G.Na});return z}function m(w){w.vtp_triggerStartOption?q(w):Tj(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,A=!!w.vtp_capturePause,C=h(w.vtp_progressThresholdsPercent+""),z=l(w.vtp_progressThresholdsTimeInSeconds+""),D=!!w.vtp_fixMissingApi;if(y||x||A||
C.length||z.length){var G={xg:y,vg:x,wg:A,Gh:C,Hh:z,Ae:D,Kd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},J=V("YT"),Q=function(){f(G)};O(w.vtp_gtmOnSuccess);if(J)J.ready&&J.ready(Q);else{var X=V("onYouTubeIframeAPIReady");qp("onYouTubeIframeAPIReady",function(){X&&X();Q()});O(function(){for(var N=V("document"),ua=N.getElementsByTagName("script"),ea=ua.length,M=0;M<ea;M++){var K=ua[M].getAttribute("src");if(b(K,"iframe_api")||b(K,"player_api"))return}for(var P=N.getElementsByTagName("iframe"),
W=P.length,U=0;U<W;U++)if(!v&&d(P[U],G.Ae)){S("https://www.youtube.com/iframe_api");v=!0;break}})}}else O(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],r={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},u,v=!1;Z.__ytl=m;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.priorityOverride=0}();


Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){O(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Gi())&&Yi(a,h));Vi(h);$i(["aw","dc"],h);ij(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Zi(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var m=op(H.O);Al(!1,void 0!=m&&!1!==m);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&bj()})}();

Z.b.aev=["google"],function(){function a(r,u){var v=rh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(m.hasOwnProperty(y))x=m[y];else{var A=a(r,w);if(A&&(x=v(A),m[y]=x,q.push(y),35<q.length)){var C=q.shift();delete m[C]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(lp());Ha(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(r))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(r).indexOf(x))return!1;w.push(e(x))}}return!cq(r,w)}function e(r){n.test(r)||(r="http://"+r);return zh(Bh(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return Kf(r,"value");case "button":return Lf(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Jo(r.elements[v])&&u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&Kf(w,u)||v}var n=/^https?:\/\//i,m={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Lf)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),C=Bh(A),z=String(r.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,r.vtp_affiliatedDomains);break a;default:x=zh(C,z,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,w,v);else{var G=r.vtp_attribute,J=a(u,"element");D=J&&Kf(J,G)||v||""}return D;case "MD":var Q=r.vtp_mdValue,X=b(u,"MD",Vo);return Q&&X?Yo(X,Q)||
v:X||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Ad.Ca]=null;c[Ad.wf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.b.awct=["google"],function(){var a=!1,b=[],c=function(h){var l=V("google_trackConversion"),n=h.gtm_onFailure;"function"==typeof l?l(h)||n():n()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(h){function l(){
r("gdpr_consent",yl());}function n(w){var y=!0;y&&b.push(m)}ck();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,
google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Uk()};h.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=op(H.O)&&!1!==op(H.O)&&(m.google_gtm_url_processor=function(w){return w=Ej(w)});var q=function(w){return function(y,x,A){var C="DATA_LAYER"==w?op(A):h[x];C&&(m[y]=C)}},t=q("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&
(t=q(h.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(w){return{value:w.price,
quantity:w.quantity,item_id:w.id}})));var r=function(w,y){void 0!==y&&((m.google_additional_conversion_params=m.google_additional_conversion_params||{})[w]=y)},u=function(w){return function(y,x,A,C){var z="DATA_LAYER"==w?op(A):h[x];C(z)&&r(y,z)}};h.vtp_transportUrl&&(m.google_transport_url=h.vtp_transportUrl);var v=Gk(h.vtp_transportUrl,"/pagead/conversion_async.js");v||(v=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
h.vtp_enableNewCustomerReporting&&(t=u(h.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!h.hasOwnProperty("vtp_enableConversionLinker")||h.vtp_enableConversionLinker?(h.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===
zi(!1)._up&&r("gtm_up","1");l();(function(){ag()?jg(function(){l();var w=hg(H.o),y=!w&&void 0!=op(H.O)&&!1!==op(H.O);!h.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");r("gcs",ig());n(w);w||dg(function(){l();m=E(m);!h.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;r("gcs",ig());r("gcu","1");n(!0)},H.o)},[H.o]):n(!0)})();a||(a=!0,S(v,f(),e(v)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=V(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(h,l){void 0!==c[h]&&(f[l]=c[h])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",
function(){var h=jf(V("UET"),{ti:c.vtp_tagId,q:e});B[d]=h;h.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(h){O(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=dq(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=L.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var m=h.getAttribute("data-gtmsrc");m&&(n.src=m,Df(n,l));d.insertBefore(n,null);m||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){O(g)}}}var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=yp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.od,h=f.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Mf(g),h,e)()}else jp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Mf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}bq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var as={};as.macro=function(a){if(zo.Yc.hasOwnProperty(a))return zo.Yc[a]},as.onHtmlSuccess=zo.te(!0),as.onHtmlFailure=zo.te(!1);as.dataLayer=nh;as.callback=function(a){Jg.hasOwnProperty(a)&&Fa(Jg[a])&&Jg[a]();delete Jg[a]};function bs(){R[Pd.C]=as;Wa(Kg,Z.b);sd=sd||zo;td=Ld}
function cs(){Qf.gtm_3pds=!0;Qf.gtag_cs_api=!0;R=B.google_tag_manager=B.google_tag_manager||{};wl();if(R[Pd.C]){var a=R.zones;a&&a.unregisterChild(Pd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)kd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)od.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)nd.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var m=l[n],q={},t=0;t<m.length;t++)q[m[t][0]]=Array.prototype.slice.call(m[t],1);md.push(q)}qd=Z;rd=Yp;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Hn();Td=new Sd(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Kg[x]=w}Kn(v);bs();yo();
Oj=!1;Pj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Rj();else{If(L,"DOMContentLoaded",Rj);If(L,"readystatechange",Rj);if(L.createEventObject&&L.documentElement.doScroll){var A=!0;try{A=!B.frameElement}catch(G){}A&&Sj()}If(B,"load",Rj)}an=!1;"complete"===L.readyState?cn():If(B,"load",cn);
a:{if(!ch)break a;B.setInterval(dh,864E5);}Hg=(new Date).getTime();}}
(function(a){a()})(cs);

})()
