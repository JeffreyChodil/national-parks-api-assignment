'use strict';

const apiKey = "ReOMCHm80QBzkBGSAXNztRJmBfFC9HQXCDbflTD5";
const endpoint = "https://developer.nps.gov/api/v1/parks";

// Bonus idea for later: set background to randomized image from NPS database
// console.log(Math.random()*100);

// Get input search string and maximum display number
function watchForm() {
  $('.search').on('click', event => {
    event.preventDefault();
    // reset page for each new search
    $('#results-here').empty();
    const searchText = $('#searchPark').val();
    const maxResults = $('#max-results').val();
    console.log(searchText);
    console.log(maxResults);
    getResults(searchText, maxResults);
  });
}

// Get results
function getResults(searchText, maxResults) {
  const params = {
    q: searchText,
    limit: maxResults,
    api_key: apiKey
  };
  let queryString = $.param(params);
  let apiRequest = `${endpoint}?${queryString}`;
  // console.log(queryString);
  // console.log(apiRequest);
  fetch(apiRequest).then(function (response) {
    return response.json();
  }).then(function (jsonData) {
    render(jsonData);
  });
}

// Displaying results, show Full name, Description, URL
function render(jsonData) {
  let htmlTemplate = ['<h2>Search results</h2>'];
  for (let i = 0; i < jsonData.data.length; i++) {
    htmlTemplate.push(`
    <li><h3>${jsonData.data[i].fullName}<h3>
    <p>${jsonData.data[i].addresses[0].line1}<br>${jsonData.data[i].addresses[0].city}, ${jsonData.data[i].addresses[0].stateCode}, ${jsonData.data[i].addresses[0].postalCode}</p>
    <img alt="${jsonData.data[i].images[0].altText}" src="${jsonData.data[i].images[0].url}">  
    <p>${jsonData.data[i].description}</p>
    <a href="${jsonData.data[i].url}">${jsonData.data[i].url}</a>
    </li>    
    `);
  }
  $('#results-here').html(htmlTemplate);
}

function main(){
  // background image randomizer function may go here
  watchForm();
}

$(main);