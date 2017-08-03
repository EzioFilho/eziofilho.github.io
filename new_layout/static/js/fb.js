var imagetoShow;
var testtoShare

function getResult(pos, testId){
  imagetoShow = pos;
  testtoShare = testId;
}


var canvas;
canvas = document.getElementById("myCanvas");
//var data = canvas.toDataURL("image/png");
//var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
//var decodedPng = Base64Binary.decode(encodedPng);

function postCanvasToFacebook() {
	var data = canvas.toDataURL("image/png");
	var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
	var decodedPng = Base64Binary.decode(encodedPng);
	FB.getLoginStatus(function(response) {
	  if (response.status === "connected") {
		postImageToFacebook(response.authResponse.accessToken, "heroesgenerator", "image/png", decodedPng, "www.heroesgenerator.com");
	  } else if (response.status === "not_authorized") {
		 FB.login(function(response) {
			postImageToFacebook(response.authResponse.accessToken, "heroesgenerator", "image/png", decodedPng, "www.heroesgenerator.com");
		 }, {scope: "publish_actions"});
	  } else {
		 FB.login(function(response)  {
			postImageToFacebook(response.authResponse.accessToken, "heroesgenerator", "image/png", decodedPng, "www.heroesgenerator.com");
		 }, {scope: "publish_actions"});
	  }
	 });

};

function ShareTest() {
  FB.ui(
   {
     method: 'share_open_graph',
	   action_type: 'og.likes',
	   action_properties: JSON.stringify({
     object:{
		 'og:url': 'https://eziofilho.github.io/new_layout/'+testtoShare+'.html',
		 'og:title': 'Here my custom title',
     'og:description': 'here custom description',
		 'og:image': 'https://eziofilho.github.io/new_layout/img/'+testtoShare+'/'+imagetoShow+'.png'
	}

	})
   }, function(response){

    console.log(response);

   });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '334298370360424',
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
