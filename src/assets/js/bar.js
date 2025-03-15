
function updateStatus() {
    axios.get('https://api.lanyard.rest/v1/users/628637707366694932')
      .then(res => {
        let data = res.data.data;
        if (data.listening_to_spotify) {
          document.getElementById('spotify').innerHTML = `<i class="fab fa-spotify" style="color:#1DB954"></i> <a class="noAStyle" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}">${data.spotify.song} by <i>${data.spotify.artist}</i></a>`;
          document.getElementById('spotifyimg').innerHTML = `<img id="spotifyCover" src="${data.spotify.album_art_url}" crossOrigin="anonymous" alt="">`;
          setTimeout(function(){
            var rgb = getAverageRGB(document.getElementById('spotifyCover'));
            document.getElementsByTagName( 'html' )[0].style.setProperty('--accent2', 'rgb('+rgb.r+','+rgb.g+','+rgb.b+','+0.8+')');
        }, 150);
        } else {
          document.getElementById('spotify').innerHTML = ``;
          document.getElementById('spotifyimg').innerHTML = ``;
            document.getElementsByTagName( 'html' )[0].style.removeProperty('--accent2');
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


function getAverageRGB(imgEl) {

  var blockSize = 5, // only visit every 5 pixels
      defaultRGB = {r:249,g:6,b:59}, // for non-supporting envs
      canvas = document.createElement('canvas'),
      context = canvas.getContext && canvas.getContext('2d'),
      data, width, height,
      i = -4,
      length,
      rgb = {r:0,g:0,b:0},
      count = 0;
      
  if (!context) {
      return defaultRGB;
  }
  
  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
  
  context.drawImage(imgEl, 0, 0);
  
  try {
      data = context.getImageData(0, 0, width, height);
  } catch(e) {
      return defaultRGB;
  }
  
  length = data.data.length;
  
  while ( (i += blockSize * 4) < length ) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i+1];
      rgb.b += data.data[i+2];
  }
  
  // ~~ used to floor values
  rgb.r = ~~(rgb.r/count);
  rgb.g = ~~(rgb.g/count);
  rgb.b = ~~(rgb.b/count);
  
  return rgb;
  
  }
  