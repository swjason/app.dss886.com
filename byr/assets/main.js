function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

function ios_click(){
	if (is_weixin()) {
		$("#weixin-browser").html("选择「在Safari中打开」")
		$("#bottom-modal").modal("show");
	} else {
		window.location.href="https://itunes.apple.com/cn/app/bei-you-ren-lun-tan-bei-you/id1115232927"
	}
}

function android_click(){
	if (is_weixin()) {
		$("#weixin-browser").html("选择「在浏览器中打开」")
		$("#bottom-modal").modal("show");
	} else {
		window.location.href="https://github.com/dss886/BYR-BBS-APP-Release/releases/download/Beta11/BYR-BBS-APP-Beta11-Build18.apk"
	}
}