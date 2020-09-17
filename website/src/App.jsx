import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App" >
      <div class="container-fluid" id="navbar">
        <div class="row">
          <div class="col-sm">
            Bio
          </div>
          <div class="col-6" id="projects-header">
            Projects
          </div>
          <div class="col-sm">
            LinkedIn
          </div>
          <div class="col-sm">
            Contact
          </div>
        </div>
      </div>
      <div class="container" id="bio-body">
        <div class="row">
          <div class="col-sm">
            picture of me!
          </div>
          <div class="col-sm">
            <div class="row">
              bio
            </div>
            <div class="row">
              link to projects?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// $(document).ready(() => {
//   visitor = "";

//   ////////making a function for adding tweets to feed
//   let addTweets = function (array) {
//     let $tweets = array.map((tweet) => {        //variable to represent the tweets, as divisions, made via map
//       $('#feed').empty();
//       //making the tweet timestamp into a standard format, and then making it more user friendly
//       let tweetCreationTime = moment(tweet.created_at).format('LLLL');
//       let timeStamp = moment(tweetCreationTime, 'LLLL').fromNow();
//       // creating tweet as unordered list
//       const $tweet = $(`<div class='container' id='entire-tweet'></div>`)
//       // const $tweet = $(`<ul id='entire-tweet'></ul>`)
//       let $usernameList = $(`<li>@${tweet.user}</li>`);
//       $usernameList.addClass(`username ${tweet.user}`)
//       $usernameList.append('<div class="twiddled"> Twiddled:</div>')
//       $tweet.append($usernameList);
//       $tweet.append(`<li class='tweet-text'>${tweet.message}</li>`)
//       $tweet.append(`<li class='tweet-timestamp'>${timeStamp}</li>`)

//       return $tweet;
//     });
//     ////adding tweets to the feed section
//     $('#feed').prepend($tweets);
//     $('.username').click(function (){
//       ///this cuts off the @ and Twiddled:, leaving only the username
//       let justUsername = $(this).text().split(" ")[0].slice(1);
//     addTweets(streams.users[justUsername]);
//     })

//   };

//   ////invoking function so the page loads with something on it
//   addTweets(streams.home);

//   //add tweets to feed by clicking the button
//   $('#more-tweets-button').click(function(){
//     addTweets(streams.home);
//   });

//   //toggle automatic tweet adding. changes color and text when clicked
//   let doAutoColor = false;
//   let autoTweet = null;
//   $('#automatic-tweet-button').click(function(){ 
//     if (doAutoColor) {
//       clearInterval(autoTweet);
//       doAutoColor = false;
//       $('#automatic-tweet-button').text('Auto adding Twiddles is off')
//       $('#automatic-tweet-button').css('background-color', 'red')
//     } else {
//       doAutoColor = true;
//       autoTweet = setInterval(addTweets, 1000, streams.home);
//       $('#automatic-tweet-button').text('Auto-adding Twiddles');
//       $('#automatic-tweet-button').css('background-color', 'green')
//     }


//   });

//   /////make the text in tweet writing area vanish on first click//////////
//   let firstClick = 0
//   $('#new-tweet-text-area').click(function (){
//     if (firstClick === 0) {
//       $('#new-tweet-text-area').text("")
//       $('#new-tweet-text-area').val("")

//     }
//     firstClick++;
//   });

//   ///////////function to post your own  tweet/////////
//   const writeTweet = (message) => {
//     const visitor = window.visitor;
//     if (!visitor){
//       alert('Please enter a username!');
//       throw new Error('Set the global visitor property!');
//     }
//     //creating tweet object
//     const tweet = {
//       user: visitor,
//       message: message,
//       created_at: moment(new Date()).format('LLLL'),
//     };
//     //pushing tweet object into an array, so we can create a history of tweets
//     streams.users[visitor].unshift(tweet);
//     streams.home.unshift(tweet);
//     addTweets(streams.home);
//   };

//   ///post your own tweet by clicking the button
//   $('#share-tweet-button').click(function() {
//     writeTweet($("#new-tweet-text-area").val());
//     $('#new-tweet-text-area').val("Share a Twiddle?");
//     firstClick = 0;
//   });

//   let usernameFirstClick = 0;
//   ///make the text in username area vanish on first click///
//   $('#visitor-text-area').click(function (){
//     if (usernameFirstClick === 0) {
//       $('#visitor-text-area').text("");
//       $('#visitor-text-area').val("");
//     }
//     usernameFirstClick++;
//   })

// /////setting your username button/////
// $('#set-username-button').click(function(){
//   if (($('#visitor-text-area').val()).includes(" ")) {
//     alert('Username must not contain spaces')
//     throw new Error('Username must not contain spaces')
//   } 
//   visitor = $('#visitor-text-area').val();
//   if (!streams.users[visitor]) {
//     streams.users[visitor] = [];
//   }
//   $('#set-username-button').text('Change username');
//   $('#visitor-text-area').text("");
//   $('#posting-as-text').text(`Now posting as: ${visitor}`);
//   usernameFirstClick = 0;
// })
// ////////////allowing click on users to display only that users' twiddles//////////
// $('.username').click(function (){
//   ///this cuts off the @ and Twiddled:, leaving only the username
//   let justUsername = $(this).text().split(" ")[0].slice(1);
// addTweets(streams.users[justUsername]);
// })





// });