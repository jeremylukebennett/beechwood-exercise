"use strict";


let buildArticleButtons = () => {

    // 1. Pushes elements with class name 'article' into the 'allArticles' array.
    // 2. Loops through each 'article' element and appends buttons.

    // 1.
    let allArticles = document.getElementsByClassName("article").length;
    // 2.
    for(let i = 0; i < allArticles; i++) {

        document.getElementsByClassName("article")[i].innerHTML += 
        // "<div class='article-links-container'><a href='#' class='article-links'>Read More</a><a href='#'>Join Now</a></div>";
        "<div class='article-links-container'><button class='article-links'>Read More</button><button>Join Now</button></div>";
    }

    let numberedServices = document.getElementById("numbered-services");
    numberedServices.innerHTML = `<h3>${allArticles} Services</h3>`;
};

buildArticleButtons();

console.log("test");