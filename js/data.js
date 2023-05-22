/**Mock data for the items used in the website */
/**Music data */
const musicCookieKey = "vibes-mock-music-data";
const videoCookieKey = "vibes-mock-video-data";
const artists = {
  forAfro: [
    { name: "Aya Nakamura" },
    { name: "Victony" },
    { name: "Don Toliver" },
    { name: "Davido" },
    { name: "Sensey" },
    { name: "Musa Keys" },
    { name: "Vacra" },
    { name: "Bayanni" },
    { name: "Rema" },
    { name: "Kim" },
    { name: "CKay" },
    { name: "Tayc" },
    { name: "Ayra Starr" },
    { name: "BurnaBoy" },
    { name: "Libianca" },
    { name: "Omah Lay" },
  ],
  forAmapiano: [
    { name: "Tyler ICU" },
    { name: "Tumelo_za" },
    { name: "DJ Maphorisa" },
    { name: "Lady Amar" },
    { name: "Cici" },
    { name: "Murumba Pitch" },
  ],
  forDeepHouse: [
    { name: "Tea White" },
    { name: "Kholo" },
    { name: "Spin Worx" },
    { name: "0715 Sounds" },
    { name: "Tebza De SouL" },
    { name: "Radic The Myth" },
    { name: "Trevor G" },
  ],
};
const musicData = [
  {
    afro: [
      {
        rank: 1,
        name: "Baby",
        artist: [artists.forAfro[0]],
        imageUrl: "./images/afro-1.jpg",
        videoUrl: "JKveC4CaGC8",
      },
      {
        rank: 2,
        name: "Soweto",
        artist: [artists.forAfro[1], artists.forAfro[2]],
        imageUrl: "./images/afro-2.jpg",
        videoUrl: "OGAngW1BZ04",
      },
      {
        rank: 3,
        name: "Honey Damoiseau",
        artist: [artists.forAfro[3]],
        imageUrl: "./images/afro-3.jpg",
        videoUrl: "7QvHOsbjTGU",
      },
      {
        rank: 4,
        name: "UNAVAILABLE",
        artist: [artists.forAfro[4], artists.forAfro[5]],
        imageUrl: "./images/afro-4.webp",
        videoUrl: "OSBan_sH_b8",
      },
      {
        rank: 5,
        name: "Tiki Taka",
        artist: [artists.forAfro[6]],
        imageUrl: "./images/afro-5.jpg",
        videoUrl: "myCfEkizbgw",
      },
      {
        rank: 6,
        name: "Ta Ta Ta",
        artist: [artists.forAfro[7]],
        imageUrl: "./images/afro-6.jpg",
        videoUrl: "Zn3L_HbcrpA",
      },
      {
        rank: 7,
        name: "Charm",
        artist: [artists.forAfro[8]],
        imageUrl: "./images/afro-7.jpg",
        videoUrl: "Zn3L_HbcrpA",
      },
      {
        rank: 8,
        name: "Joli coeur",
        artist: [artists.forAfro[9]],
        imageUrl: "./images/afro-8.jpg",
        videoUrl: "Zn3L_HbcrpA",
      },
      {
        rank: 9,
        name: "HALLELUJAH",
        artist: [artists.forAfro[10]],
        imageUrl: "./images/afro-9.jpg",
        videoUrl: "Zn3L_HbcrpA",
      },
      {
        rank: 10,
        name: "Carry Me",
        artist: [artists.forAfro[11]],
        imageUrl: "./images/afro-10.jpg",
        videoUrl: "Zn3L_HbcrpA",
      },
    ],
    amapiano: [
      {
        rank: 1,
        name: "Mnike",
        artist: [
          artists.forAmapiano[0],
          artists.forAmapiano[1],
          artists.forAmapiano[2],
        ],
        imageUrl: "./images/piano-1.jpg",
        videoUrl: "2IIP_X12pHA",
      },
      {
        rank: 2,
        name: "Hamba Juba",
        artist: [
          artists.forAmapiano[3],
          artists.forAmapiano[4],
          artists.forAmapiano[5],
        ],
        imageUrl: "./images/piano-2.jpg",
        videoUrl: "vRaRN38f_OE",
      },
      {
        rank: 3,
        name: "Kilimanjaro",
        artist: ["Pcee", "Sgija'Disciples", "Zan'Ten", "Mr JazziQ"],
        imageUrl: "./images/piano-3.jpg",
        videoUrl: "2NvTakC15GU",
      },
      {
        rank: 4,
        name: "Bhebha",
        artist: ["Shaunmusiq", "Ftears", "Xduppy"],
        imageUrl: "./images/piano-4.jpg",
        videoUrl: "u8e2FXhP55c",
      },
      {
        rank: 5,
        name: "Yahyuppiya",
        artist: ["Uncle Waffles", "Tony Duardo", "Justin99"],
        imageUrl: "./images/piano-5.webp",
        videoUrl: "eqSuJyey7gk",
      },
    ],
    deepHouse: [
      {
        rank: 1,
        name: "Lost In Space - Enchanted Mix",
        artist: [artists.forDeepHouse[0], artists.forDeepHouse[1]],
        imageUrl: "./images/deep-1.jpg",
        videoUrl: "Y06UCIReQqo",
      },
      {
        rank: 2,
        name: "Halleluya",
        artist: [artists.forDeepHouse[2], artists.forDeepHouse[3]],
        imageUrl: "./images/deep-2.jpg",
        videoUrl: "CHpUxjOzD-Y",
      },
      {
        rank: 3,
        name: "Deep Within",
        artist: [artists.forDeepHouse[4]],
        imageUrl: "./images/deep-3.jpg",
        videoUrl: "gxiW0sutTLE",
      },
      {
        rank: 4,
        name: "Our Love Babies",
        artist: [artists.forDeepHouse[5]],
        imageUrl: "./images/deep-4.jpg",
        videoUrl: "3HjgShkIwpc",
      },
      {
        rank: 5,
        name: "Who Thought",
        artist: [artists.forDeepHouse[6]],
        imageUrl: "./images/deep-5.webp",
        videoUrl: "Fm0nwWdabnE",
      },
    ],
  },
];
const videoData = [];

function loadData() {
  setJsonCookie(musicCookieKey, musicData);
  setJsonCookie(videoCookieKey, videoData);
}
function getMusicData() {
  return getJsonCookie(musicCookieKey);
}
function getVideoData() {
  return getJsonCookie(videoCookieKey);
}
$(document).ready(function () {
  loadData();
});
