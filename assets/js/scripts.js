$(document).ready(function () {
  //   $(".menu-bar").click(function (event) {
  //     event.preventDefault();
  //     $(".menu-bar svg.bar").toggle();
  //     $(".time").toggle();
  //     // $(".overlay-slide,.overlay-menu,.studio-sec,.container").toggleClass(
  //     //   "active"
  //     // );
  //     $("section.section-fluid").toggleClass("active");
  //     $(".content-wrapper").toggleClass("mbl-slide");
  //     // $(".footer-section").css({ position: "sticky" });
  //   });

  $("#menu-bar").on("click", function () {
    $(this).toggleClass("active");
    $(".flyout-nav").toggleClass("nav-active");
    $(".wrapper").toggleClass("menu-active");
    $("body").toggleClass("menu-active");
  });

  var marqueee = false;

  $(window).on("load resize", function () {
    if ($(".marquee").length > 0) {
      // $('.marquee').addClass('marque-active')

      if (marqueee != true) {
        console.log("lagse");
        $(".marquee").marquee({
          speed: 50,
          gap: 24,
          delayBeforeStart: 0,
          direction: "left",
          duplicated: true,
        });
      }
      marqueee = true;
    }
    // console.log('RESE');
    // if ($(document).innerWidth() < 768) {
    //   $(document).scroll(function () {
    //     var footerHeight = $(".footer-section").innerHeight();
    //     console.log(footerHeight);
    //     var scrollVal = $(this).scrollTop();
    //     if (scrollVal > 0) {
    //       $("body").addClass("scrolling");
    //       $("body").css({ paddingBottom: footerHeight +1 });
    //       //   $(".flyout-nav").css({ bottom: footerHeight });
    //     } else {
    //       $("body").removeClass("scrolling");
    //       $("body").css({ paddingBottom: 0 });
    //       //   $(".flyout-nav").css({ bottom: 0 });
    //     }
    //   });
    // }

    console.log($(document).innerWidth());

    if ($(document).innerWidth() > 991) {
    }
  });
});

if ($(".ban-img").length > 0) {
  $(".ban-img").on("click", function (e) {
    console.log("he");
    $(this).toggleClass("big");
  });
}
// music player control functions

const track = document.getElementById("track");
const buynowBtn = document.getElementById("buynowBtn");
const thumbnail = document.getElementById("thumbnail");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;

const tracks = [
  "./assets/audio-track/01_Kombé - Harbin.mp3",
  "./assets/audio-track/02_Red On - Night, All.mp3",
  "./assets/audio-track/03_Neu Verboten - Church Of Sins (Audrey Danza Remix).mp3",
  "./assets/audio-track/04_Cubemod _ Drush - Vision.mp3",
  "./assets/audio-track/05_LiAEN - Badminton.mp3",
  "./assets/audio-track/06_Jorge Savoretti - Trota Cielos.mp3",
  "./assets/audio-track/07_Fxyz - Endless Stare.mp3",
  "./assets/audio-track/08_Paragraf 201 - Langes Ende ohne Ausgang.mp3",
  "./assets/audio-track/09_Unreleased Viikatory (RAIDERS Records).mp3",
  "./assets/audio-track/10_DJG2G - Shape Of My Heart.mp3",
];

const thumbnails = [
  "./assets/images/track-img/01_Kombe - Harbin.jpg",
  "./assets/images/track-img/02_Red On - Night, All.jpeg",
  "./assets/images/track-img/03_Neu Verboten - Church Of Sins (Audrey Danza Remix).jpeg",
  "./assets/images/track-img/04_Cubemod _ Drush - Vision.jpeg",
  "./assets/images/track-img/05_LiAEN - Badminton.jpeg",
  "./assets/images/track-img/06_Jorge Savoretti - Trota Cielos.jpeg",
  "./assets/images/track-img/07_Fxyz - Endless Stare.jpg",
  "./assets/images/track-img/08_Paragraf 201 - Langes Ende ohne Ausgang.jpeg",
  "./assets/images/track-img/09_Unreleased Viikatory (RAIDERS Records).jpg",
  "./assets/images/track-img/10_DJG2G - Shape Of My Heart.jpeg",
];

const trackTitles = [
  "Kombé - Harbin",
  "Red On - Night, All",
  "Neu Verboten - Church Of Sins (Audrey Danza Remix)",
  "Cubemod & Drush - Vision",
  "LiAEN - Badminton",
  "Jorge Savoretti - Trota Cielos",
  "Fxyz - Endless Stare",
  "Paragraf 201 - Langes Ende ohne Ausgang",
  "Unreleased Viikatory (RAIDERS Records)",
  "DJG2G - Shape Of My Heart",
];

const singleTrack = [
  "https://strd.bandcamp.com/album/winter-restrictions-vol-1",
  "https://redonmusic.bandcamp.com/album/drums",
  "https://proxima-records.bandcamp.com/album/dancefloor-memories",
  "https://fastcastle.bandcamp.com/releases",
  "https://verydeeprec.bandcamp.com/album/featuring-pascals-skateboard",
  "https://limousinedream.bandcamp.com/album/nug-net-class-of-2021-bandcamp-exclusive",
  "https://fxyz.bandcamp.com",
  "https://paragraf201.bandcamp.com/album/l-ufst-du-mit-l-ufst-du-gefahr",
  "https://raiders.bandcamp.com",
  "https://transatlanticrecords.bandcamp.com/album/hab-dich-lieb",
];

if ($("audio").length > 0) {
  var playing = true;
  var startwidth = 1;
  var maxDuration;

  function pausePlay() {
    if (playing) {
      play.classList.add("none");
      pause.classList.add("block");
      track.play();
      playing = false;
    } else {
      play.classList.remove("none");
      pause.classList.remove("block");
      track.pause();
      playing = true;
    }
  }

  play.addEventListener("click", pausePlay);
  pause.addEventListener("click", pausePlay);

  track.addEventListener("ended", nextTrack);

  function nextTrack() {
    trackIndex++;
    if (trackIndex > tracks.length - 1 && trackIndex > singleTrack.length - 1) {
      trackIndex = 0;
    }

    track.src = tracks[trackIndex];
    thumbnail.src = thumbnails[trackIndex];

    trackTitle.textContent = trackTitles[trackIndex];
    if (playing) {
      track.pause();
    } else {
      track.play();
    }
    // playing = false;
    // pausePlay();
    startwidth = 0;
    buynowBtn.setAttribute("href", singleTrack[trackIndex]);

    let intViewportWidth = window.innerWidth;
    let textWidth = $(".track-info").width();
    if (textWidth > intViewportWidth / 2) {
      $(".track-info").addClass("marquee-anim");
    } else {
      $(".track-info").removeClass("marquee-anim");
    }
  }

  next.addEventListener("click", nextTrack);

  function prevTrack() {
    trackIndex--;

    if (trackIndex < 0) {
      trackIndex = tracks.length - 1;
    }

    track.src = tracks[trackIndex];
    thumbnail.src = thumbnails[trackIndex];

    trackArtist.textContent = trackArtists[trackIndex];
    trackTitle.textContent = trackTitles[trackIndex];

    playing = true;
    pausePlay();
  }

  function progressValue() {
    progressBar.max = track.duration;
    progressBar.value = track.currentTime;
  }

  function audioControl() {
    setTimeout(() => {
      console.log("current d", track.duration);
      initinalDuration = Math.ceil(track.duration) / 100;
      var finalDuration = initinalDuration * 1000;
      console.log("Interval Time", finalDuration);
      if (!playing) {
        handle = setInterval(progressValue, finalDuration);
        console.log("pause");
      } else {
        clearInterval(handle);
        console.log("play");
      }
    }, 110);
  }

  setInterval(progressValue, 500);

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
}
