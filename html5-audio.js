$(function(){
	var audio = document.getElementById("audio");
	audio.src = "123.mp3";
	$(".Play").on("click",function(){
		var img = document.getElementById("qiehuan");
		if(audio.paused){
			img.src="img/pause.jpg";
			Play();
		}else{
			img.src="img/play.jpg";
			Pause();
		}
	});
	function Play(){
		audio.play();
		TimeSpan();
	}
	function Pause(){
		audio.pause();
	}
	function TimeSpan(){
		var ProcessNow = 0;
		setInterval(function(){
			var ProcessNow = (audio.currentTime/audio.duration)*260;
			$(".ProcessNow").css("width",ProcessNow);
			var currentTime = timeFormat(audio.currentTime);
			var timeAll = timeFormat(TimeAll());
			$(".SongTime").html(currentTime+"|"+timeAll);
		},1000);
	}
	function timeFormat(number){
		var minute = parseInt(number/60);
		var second = parseInt(number%60);
		minute = minute>=10 ? minute:"0"+minute;
		second = second>=10 ? second:"0"+second;
		return minute+":"+second;
	}
	function TimeAll(){
		return audio.duration;
	}
});