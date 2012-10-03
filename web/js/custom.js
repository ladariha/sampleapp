//// ADD PAGES HERE
//
var menuList = {
    "Home":"index.html",
    "JS Debugger": "debugger.html",
    "JS Editor": "javascript.html",
    "JS Unit Tests": "tests.html",
    "JS Doc":"doc.html",
    "Navigator": "dom.html",
    "Selection Mode": "selection.html",
    "Chrome Plugin": "chrome.html",
    "HTML Project": "project.html",
    "CSS Editing": "css.html",
    "HTML Editing": "html.html",
    "Embedded Browser": "fx.html",
    "About": "about.html"
};



// GENERATE MENU
$(document).ready(function() {

    // CREATE MENU
    for (var prop in menuList) {
        if (menuList.hasOwnProperty(prop)) {
            $("#menu").append("<li><a href=\"" + menuList[prop] + "\">" + prop + "</a></li>");
        }
    }

//    $.getJSON('js/menu.json', function(data) {
//
//        
//        $.each(data, function(key, val) {
//           $("#menu").append("<li><a href=\"" + val + "\">" + key + "</a></li>");
//        })
//
//
//    });


    var pattern = new RegExp("^Result[ ]*[0-9]*:");
    var pattern2 = new RegExp("[I,i]ssue[ ]*#?[0-9]*");

    // AUTOMATIC STYLING

    //// FOR RESULTS
    $("li").each(function() {
        if (pattern.test($(this).text()))
            $(this).css("font-weight", "bold");

    });

    //// FOR LINKS TO BUGZILLA
    $("li").each(function() {
        if (pattern.test($(this).text()) && $(this).has('>a') && pattern2.test($(this).text())) {
            console.log($(this).has('a'));
            $(this).css("color", "red");
        }


    });
});

pes = pes +1;

function yetAnotherDummyOne() {

    console.log("yetAnotherDummyOne");
}
