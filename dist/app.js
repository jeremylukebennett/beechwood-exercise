(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
