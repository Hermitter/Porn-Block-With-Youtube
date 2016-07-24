$( document ).ready(function() {

//call user's link
 chrome.storage.sync.get({
    linkSet: ''
  }, function(items) {
   defaultLink = items.linkSet;
  


//vars for video id
var vList = [];
vList[0] = "video-player";
vList[1] = "player";
vList[2] = "kt_player";
vList[3] = "video_player";
vList[4] = "videoWrapper";
vList[5] = "jw_video";
vList[5] = "redtube_flv_player";
vList[6] = "playerz";
vList[7] = "videoPlayerContainer";
vList[8] = "vidPlayer_wrapper";
	//video settings
var videoSettings = '?autoplay=1&iv_load_policy=3';
var link ='https://www.youtube.com/embed/'+ defaultLink + videoSettings;
var styles = 'width:100%;height:100%;min-height:430px;';


//videos
	for(i = 0; i < vList.length; i++){
		if(document.getElementById(vList[i])){
			$('#'+vList[i]).replaceWith("<iframe style= "+styles+" src="+link+" frameborder='0' allowfullscreen></iframe>");
		};
	};



//chrome function wrap
});
//when page loads
});
