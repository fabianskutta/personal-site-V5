function updateStatus() {
    axios.get('https://api.lanyard.rest/v1/users/628637707366694932')
      .then(res => {
        let data = res.data.data;
        if (data.listening_to_spotify) {
          let artist = data.spotify.artist.replace(";",",");
          document.getElementById('spotify').innerHTML = `<i class="fab fa-spotify" style="color:#1DB954"></i> <a class="noAStyle" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}">${data.spotify.song} by <i>${artist}</i></a>`;
        } else {
          document.getElementById('spotify').innerHTML = ``;
        }
        if (data.discord_status === "online") {
          document.getElementById('status-icon').setAttribute('style', 'color:' + '#43B581' + ';');
          document.getElementById('status').innerHTML = "Online";
        }
        if (data.discord_status === "idle") {
          document.getElementById('status-icon').setAttribute('style', 'color:' + '#F5A519' + ';');
          document.getElementById('status').innerHTML = "Idle";
        }
        if (data.discord_status === "dnd") {
          document.getElementById('status-icon').setAttribute('style', 'color:' + '#E84144' + ';');
          document.getElementById('status').innerHTML = "Do not disturb";
        }
        if (data.discord_status === "offline") {
          document.getElementById('status-icon').setAttribute('style', 'color:' + '#747F8D' + ';');
          document.getElementById('status').innerHTML = "Offline";
          document.getElementById('status-icon').classList.remove("fa-mobile");
          document.getElementById('status-icon').classList.add("fa-circle");
        }
        if (data.active_on_discord_mobile && !data.active_on_discord_desktop) {
          document.getElementById('status-icon').classList.remove("fa-circle");
          document.getElementById('status-icon').classList.add("fa-mobile");
        } else if (data.active_on_discord_desktop) {
          document.getElementById('status-icon').classList.remove("fa-mobile");
          document.getElementById('status-icon').classList.add("fa-circle");
        }
      });
  }

updateStatus()
setInterval(updateStatus, 15000);