var Track = {
	
	artist : '',
	album : '',
	album_art : '',
	song_title : '',
	current_time : '',
	total_time : '',
	status : '',
	
	now_playing : function() {
		this.song_title = $("#playerSongTitle").text();
		this.artist = $("#playerArtist").text();
		this.album_art = "http://" + $("#playingAlbumArt").attr('src');
		this.current_time = $("#currentTime").text();
		this.total_time = $("#duration").text();
		this.status = $('#playPause').attr('title');
		
		return this;
	}
};

// current_track.artist = 'dog';
console.log(Track.now_playing());