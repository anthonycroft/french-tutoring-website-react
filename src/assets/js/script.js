// Array of search terms for the unSplash API.
const imageSearchTermsBase = ["french-pastries", "french-desserts"];

const imageSearchTermsCartoons = ["Tintin"]

const imageSearchTermsBusiness = ["Business-meeting"]

const unsplashArray = [imageSearchTermsBusiness, imageSearchTermsCartoons, imageSearchTermsBase];

const arrayOfPageUrls = ["business.html", "kids.html", "index.html"];

// This will be used in the window event listener immediately below.
let selectedRadioBtn;


 var theme = localStorage.getItem('theme');
   console.log(`theme: ${theme}`);

var currentArray = unsplashArray[theme - 1];
console.log(currentArray);
   GetImage(currentArray);

   function checkTheme(themeStored){
    let currentlyActiveBtnNumber = $('.active').attr('data-number');
    // Apply the class of active to the button which has the data-number equal to the 
    // value stored in the theme variable
    if(currentlyActiveBtnNumber != themeStored){
        $('.active').removeClass('active');
    }
    var setActiveBtn = $('.nav-pills').find(`[data-number=${themeStored}]`);
    console.log(setActiveBtn);
    $(setActiveBtn).addClass('active');
}

// This function is called to make sure that the theme-switching navbar has the correct button with a class of "active".
checkTheme(theme);

// FUNCTION to get an image from the unsplash API based on the relevant search term, which is selected due to the user's theme choice.
function GetImage(arr){
    var internalArray = Array.from(arr);
    console.log(internalArray);
    var selectedNumber = randomWholeNum(internalArray.length);
    console.log(selectedNumber);
    var drama = internalArray[selectedNumber];
    console.log(drama);
var unsplashURL = `https://api.unsplash.com/search/collections/?query=${drama}&client_id=n9E_S2EHFcnLYsoG5u6jQxiQbaC0NN-KhidZTVGIH8w`;
console.log(unsplashURL);
$.ajax({
    url: unsplashURL,
    method: "GET"
    }).then(function(unsplashResponse) {
        console.log(unsplashResponse);
       var baguetteDiv = $('.baguette-div');
       baguetteDiv.empty();
       var baguetteString = unsplashResponse.results[1].cover_photo.urls.full;
       var baguetteImg = $('<img>');
       baguetteImg.attr('alt', unsplashResponse.results[1].alt_description);
       $(baguetteImg).css({'width':'inherit', 'height':'inherit'});
       $(baguetteImg).attr('src', baguetteString);
       $(baguetteImg).appendTo(baguetteDiv);
    });
};






// YOUTUBE API
const apiKeyYoutube = 'AIzaSyDiJ4L5kg5fHA5kii65hc4766UiYe0u-Us';
const playlistId1 = 'PLGk8cogrddcmMIL5KQYmyS69zJGRdFVyD';
const playlistId2 = 'PLGk8cogrddclUSzkpSgcdzeP7Ir-40lQa';
const playlistId3 = 'PLGk8cogrddckuqithmkd8W79F2U9AZhtn';
const playlistArray = [playlistId1, playlistId2, playlistId3];
let videoArray = [];
const maxResults = 3;



console.log(`Theme: ${theme}`);

function randomWholeNum(arrayLength) {

    // Only change code below this line
  let randomNum = Math.floor(Math.random() * arrayLength);
    return randomNum;
  }


function youtubeApiCall(themeIndex){
let chosenPlaylist = playlistArray[themeIndex - 1];
const urlYoutube = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${chosenPlaylist}&key=${apiKeyYoutube}`;

$.ajax({
    url: urlYoutube,
    method: "GET"
    }).then(function(youtubeResponse) {
        console.log(youtubeResponse);
        videoArray = [];
        for ( let i = 0; i < maxResults; i++) {
            var currentVideo = youtubeResponse.items[i].contentDetails.videoId;
            videoArray.push(currentVideo);
            console.log(videoArray);
        }
        let videoIndex = videoArray.length - 1;
        stickTheVideoIn(videoArray[videoIndex]);
    })
}

    console.log(videoArray);

// This is the function which we need to call based on the theme number.
    youtubeApiCall(theme);

function stickTheVideoIn(value) {
let firstVideo = value;
console.log(firstVideo);
var youtubeSource = `https://www.youtube.com/embed/${firstVideo}`;
const htmlForIt = `<iframe id="real-player" width="500px" height="300px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; web-share" allowfullscreen ></iframe>`

let youtubeContainer = document.querySelector('#youtube-container');

console.log(youtubeContainer);
$(youtubeContainer).html(htmlForIt);
console.log(youtubeSource);
const realPlayer = $('#real-player');
console.log(realPlayer);
realPlayer.attr('src', youtubeSource);
console.log(youtubeContainer);
};

let themeNotSaved = 0;

function themeChanger(event){
console.log(event.target)
if($(event.target).hasClass('active')) {
    return;
} else {
    themeNotSaved = Number($(event.target).attr('data-number'));
    youtubeApiCall(themeNotSaved);
    localStorage.setItem('theme', themeNotSaved);
    console.log(`theme: ${themeNotSaved}`);
    }
}

// PILL BUTTONS
$('#theme-btn-one').on('click', themeChanger);
$('#theme-btn-two').on('click', themeChanger);
$('#theme-btn-three').on('click', themeChanger);








