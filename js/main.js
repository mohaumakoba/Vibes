function loadMusicItems(type) {
  var categoryTitle = "";
  var categoryLeadText = "";
  var musicData = getMusicData();
  var filteredMusic = [];

  if (type == "top") {
    categoryTitle = "Top of the CHARTS!!";
    categoryLeadText = "Listen to this week's top 10 chart";
    filteredMusic = [
      musicData[0].afro[0],
      musicData[0].amapiano[0],
      musicData[0].deepHouse[0],
      musicData[0].afro[1],
      musicData[0].amapiano[1],
      musicData[0].deepHouse[1],
      musicData[0].afro[2],
      musicData[0].amapiano[2],
      musicData[0].deepHouse[2],
      musicData[0].afro[3],
    ];
  } else if (type == "afro") {
    categoryTitle = "The Best of Afro";
    categoryLeadText = "Listen";
    filteredMusic = musicData[0].afro;
  } else if (type == "amapiano") {
    categoryTitle = "Enjoy Mzansi's best Amapiano";
    categoryLeadText = "Listen";
    filteredMusic = musicData[0].amapiano;
  } else if (type == "deepHouse") {
    categoryTitle = "Get in your vibes with the best of Deep House music";
    categoryLeadText = "Listen";
    filteredMusic = musicData[0].deepHouse;
  } else if (type == "techno") {
    categoryTitle = "Techno music coming soon";
    categoryLeadText = "";
  } else if (type == "gospel") {
    categoryTitle = "Gospel music coming soon";
    categoryLeadText = "";
  } else {
  }
  $("#categoryTitle").html(categoryTitle);
  $("#categoryLeadText").html(categoryLeadText);
  $("#contentList").empty();
  for (let i = 0; i < filteredMusic.length; i++) {
    var artists = "";
    for (let a = 0; a < filteredMusic[i].artist.length; a++) {
      if (filteredMusic[i].artist[a + 1]) {
        artists = artists + filteredMusic[i].artist[a].name + ", ";
      } else {
        artists = artists + filteredMusic[i].artist[a].name;
      }
    }
    var item = `
    <div class="col">
    <div class="card shadow-sm">
      <div
        class="bd-placeholder-img card-img-top d-flex justify-content-center"
      >
        <img style="
        max-width: 300px;
        width: 100%;
        max-height: 200px;
        height: 100%;
        border-radius: 5px;" 
        src="${filteredMusic[i].imageUrl}"/>
      </div>
      <div class="card-body">
        <p class="card-text">
          <span>${filteredMusic[i].name}</span><br />
          <span>${artists}</span>
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div
            class="d-flex flex-wrap justify-content-center w-100"
          >
            <button
              type="button"
              data-vibes-video-link="${filteredMusic[i].videoUrl}"
              data-vibes-video-title="${filteredMusic[i].name}"
              class="btn btn-sm btn-danger m-1 stream-btn"
            >
              <span class="m-1"
                ><i class="fa-solid fa-circle-play"></i
              ></span>
              <span class="m-1">Stream</span>
            </button>
            <a
              data-vibes-video-link="${filteredMusic[i].videoUrl}"
              data-vibes-video-title="${filteredMusic[i].name}"
              class="btn btn-sm btn-success m-1 download-btn"
              download
              href="./media/media-file1.mp3"
            >
              <span class="m-1"
                ><i class="fa-solid fa-circle-down"></i
              ></span>
              <span class="m-1">Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    $("#contentList").append(item);
  }
  $(".stream-btn").on("click", function () {
    var videoLink = $(this).attr("data-vibes-video-link");
    var videoTitle = $(this).attr("data-vibes-title");

    const newPlayer = new Plyr("#topPlayer", {});
    newPlayer.source = {
      type: "video",
      sources: [
        {
          src: videoLink,
          provider: "youtube",
        },
      ],
    };
    console.log();
    newPlayer.on("ready", function () {
      newPlayer.play();
    });
    $("html, body").animate(
      {
        scrollTo: $("#topPlayer").offset().top,
      },
      2000
    );
  });
}
$(document).ready(function () {
  $(".content-category-selector").on("click", function () {
    loadMusicItems($(this).attr("data-vibes-content-type"));
  });
  $("#searchInput").on("input", function () {
    var inputValue = $("#searchInput").val();
    console.log(inputValue);
    var allMusic = getMusicData();
    $(".searchBox").empty();
    if (inputValue) {
      $(".searchBox")
        .show()
        .html(function () {
          var foundMusic = "";
          for (let j = 0; j < allMusic[0].afro.length; j++) {
            if (
              allMusic[0].afro[j].name
                .toLowerCase()
                .indexOf(inputValue.toLowerCase()) >= 0
            ) {
              foundMusic =
                foundMusic +
                `
          <a href="#">${allMusic[0].afro[j].name}</a><br/>
          `;
            }
          }
          console.log(foundMusic);
          for (let a = 0; a < allMusic[0].amapiano.length; a++) {
            console.log(allMusic[0].afro[a].name.indexOf(inputValue));
            if (
              allMusic[0].amapiano[a].name
                .toLowerCase()
                .indexOf(inputValue.toLowerCase) >= 0
            ) {
              foundMusic =
                foundMusic +
                `
          <a href="#">${allMusic[0].amapiano[a].name}</a><br/>
          `;
            }
          }
          console.log(foundMusic);

          for (let p = 0; p < allMusic[0].deepHouse.length; p++) {
            console.log(
              allMusic[0].afro[p].name
                .toLowerCase()
                .indexOf(inputValue.toLowerCase())
            );
            if (allMusic[0].deepHouse[p].name.indexOf(inputValue) >= 0) {
              foundMusic =
                foundMusic +
                `
          <a href="#">${allMusic[0].deepHouse[p].name}</a><br/>
          `;
            }
          }
          console.log(foundMusic);

          return foundMusic;
        });
    } else {
      $(".searchBox").hide();
    }
  });
  $("#searchInput").on("focusout", function () {
    $(".searchBox").hide();
  });
});
