// Discord Status
var uid = '905464115911327785';
var api = 'https://api.lanyard.rest/v1/users/' + uid;
var apiDownShown = false;

function updateStatus() {
  var req = new XMLHttpRequest();
  req.open('GET', api, true);
  req.onload = function() {
    if (this.status == 200) {
      var f = document.getElementById('discord-status');
      f.innerHTML = '';

      switch (JSON.parse(this.response).data.discord_status) {
        case 'online': f.innerHTML += '<span class="status online">online</span>'; break;
        case 'idle': f.innerHTML += '<span class="status idle">idle</span>'; break;
        case 'dnd': f.innerHTML += '<span class="status busy">busy</span>'; break;
        case 'offline': f.innerHTML += '<span class="status offline">offline</span>';
          if (!apiDownShown) {
            f.innerHTML += '';
            apiDownShown = true;
          }
          return;
      }

      var act = JSON.parse(this.response).data.activities;
      if (act.length > 0)
        f.innerHTML += ',';
      else {
        f.innerHTML += '';
        return;
      }
      for (var i in act) {
        switch (act[i].type) {
          case 0: f.innerHTML += ' playing '; break;
        }
        f.innerHTML += '' + act[i].name + '';
        if (act.length > 1 && i != act.length - 1)
          f.innerHTML += ' and';
      }
    }
    else {
      if (!apiDownShown) {
        document.getElementById('discord-status').innerHTML += 'API is down...';
        apiDownShown = true;
      }
    }
  };
  req.send();
}

updateStatus();

var intervalID = setInterval(updateStatus, 600);

// Copy Discord Name
function copyToClipboard(text) {
  var input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  var popup = document.createElement("div");
  popup.innerHTML = "Copied: " + text;
  popup.style.padding = "10px";
  popup.style.position = "fixed";
  popup.style.top = "-50px";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, 0)";
  popup.style.opacity = "0";
  popup.style.transition =
    "opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0), top 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)";

  document.body.appendChild(popup);

  setTimeout(function () {
    popup.style.opacity = "1";
    popup.style.top = "10px";
  }, 10);

  setTimeout(function () {
    popup.style.opacity = "0";
    popup.style.top = "-50px";
    // 2000
  }, 1700);

  setTimeout(function () {
    document.body.removeChild(popup);
    //2300
  }, 2000);
}

//Favicon
let favicon = document.querySelector("#favicon");

function changeFaviconColor() {
  let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  favicon.href = `assets/img/fav-${currentTheme}.svg`;
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener(changeFaviconColor);

changeFaviconColor();

// huh
const avatar = document.getElementById("avatar");

document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("avatar");

  avatar.addEventListener("click", () => {
    avatar.src = "https://i.giphy.com/media/iU26RvfjkDYXY3ork7/giphy.webp";

    setTimeout(() => {
      avatar.src = "assets/img/main.png";
    }, 5000);
  });
});

// huh popup
document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar');

  avatar.addEventListener('click', () => {
    showPopup("huh?");
  });
});

function showPopup(text) {
  const popup = document.createElement("div");
  popup.innerHTML = text;
  popup.style.padding = "10px";
  popup.style.position = "fixed";
  popup.style.top = "-50px";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, 0)";
  popup.style.opacity = "0";
  // popup.style.fontSize = "20px";
  popup.style.transition =
    "opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0), top 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)";

  document.body.appendChild(popup);

  setTimeout(function () {
    popup.style.opacity = "1";
    popup.style.top = "10px";
  }, 10);

  setTimeout(function () {
    popup.style.opacity = "0";
    popup.style.top = "-50px";
  }, 5000);

  setTimeout(function () {
    document.body.removeChild(popup);
  }, 5300);
}
