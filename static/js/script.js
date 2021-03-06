let infinateScroll = () => {
  var h = (screen.height / 1.6) + document.getElementById('webpage').scrollTop;
  if (h < 10400) {
    document.getElementById('infinateScroll').style.height = h + "px";
  }
}

let showTitle = () => {
  $("#instant-answers").addClass("hiding");
  document.getElementById('instant-answers').innerHTML='<i id="title"><h1><span class="thin">Grathium</span> Industries</h1></i>';
}

// instant answers (jquery)
var b;

// get background image using NASA apod API
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: "https://api.nasa.gov/planetary/apod?api_key=YEcWXl5e7QFNqpZM5ApQaMZBMoPQWT4715sNJZHb",
  data: "hd=False",
  dataType: "json",
  success: function (data) {
    if (!data.url.includes("youtube")) {
      document.getElementById('large-header').style.backgroundImage = "url('" + data.url + "')";
    } else {
      console.log("Error APOD image is video. Reverting to default...");
      document.getElementById('large-header').style.backgroundImage = "url('static/background.png')";
    }
  },
  error: function (result) {
    // if it can't get the image using API
    console.log("Error loading APOD image...");
    document.getElementById('large-header').style.backgroundImage = "url('static/background.png')";
  }
});

let loop = () => {
  infinateScroll();
  setTimeout(loop, 1);
}
loop();
