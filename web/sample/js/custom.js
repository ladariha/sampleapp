//// ADD PAGES HERE
//
var menuList = {
    "Home": "../flow.html",
    "Debugger": "debugger.html",
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

function yetAnotherDummyOne() {

    console.log("yetAnotherDummyOne");
}