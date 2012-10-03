
controls = {
    touch : new TouchOperator(),
    device : new DeviceOperator(),
    load: new LoadOperator(),
    mouse: new MouseOperator(),
    key: new KeyOperator(),
    dom: new DomOperator(),
    control: new ControlOperator(),
    clipboard: new ClipboardOperator(),
    timer: new TimerOperator(),
    animation: new AnimationOperator()
};


// filter unsupported
$(document).ready(function() {

    for (var key in controls) {
        if (controls.hasOwnProperty(key)) {
            if (!controls[key].isSupported()) {
                $("#" + key).css("text-decoration", "line-through");
            } else {
                console.log(key)
                $('[data-event][data-operator="' + key + '"]').each(function() {
                    if ($(this).attr("data-id").indexOf("#") > -1) {
                        document.getElementById($(this).attr("data-id").substr(1)).addEventListener($(this).attr("data-event"), controls[key][$(this).attr("data-event")]);//defaultAction);
                    } else {
                        var n = $(this).attr("data-id");
                        switch (n) {
                            case "window":
                                window.addEventListener($(this).attr("data-event"), controls[key][$(this).attr("data-event")]);//defaultAction);
                                break;
                            default:
                                break;
                        }

                    }
                });
            }

        }
    }
});

function DomOperator() {
    this.isSupported = function() {
        return true;
    };

    this.DOMNodeInserted = function(e) {
        if (!e)
            var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
            e.stopPropagation();
        //  $("#output2").text($("#output2").text() + "\n>>> Button has been clonned (bubbles)");

    }
}

function TimerOperator() {
    this.isSupported = function() {
        return true;
    };

    this.timer = function(e) {
        var d = new Date();
        $("#output2").text($("#output2").text() + "\n>>> Timer event " + d.toLocaleTimeString());
    };

    this.start = function() {
        setInterval(function() {
            console.log("timer fired");
        }, 1000);
    }

}

function AnimationOperator() {
    this.next = true;
    this.isSupported = function() {
        return true;
    };

    this.start = function() {
        this.next = true;
        var canvas = document.getElementById("animationCanvas");
        animate(canvas);
    }

    this.stop = function() {
        this.next = false;
    }


    this.requestAnimationFrame = function(e) {
        alert("requestAnimationFrame");
    };



}

function TouchOperator() {
    this.counter = 0;
    this.isSupported = function() {
        if ("ontouchstart" in document.documentElement)
        {
            return false;
        }
        else
        {
            return true;
        }
    };

    this.touchstart = function(e) {
        controls.touch.counter++;
        $("#touchstart").attr("value", "You touched me " + controls.touch.counter + " times, why?");
    };

}

function MouseOperator() {
    this.counterDbl = 0;
    console.log("set to " + this.counterDbl);
    this.isSupported = function() {
        return true;
    };

    this.dblclick = function(e) {

    dummyClipBoard2();
        if (controls.mouse.counterDbl < 1) {
            e.target.value = "That hurts...";
            controls.mouse.counterDbl++;
        }
        else {
            e.target.value = "it really hurts...";
            controls.mouse.counterDbl--;
        }
    };

}

function KeyOperator() {
    this.counter = 0;
    this.isSupported = function() {
        return true;
    };

    this.keypress = function(e) {
        var unicode = e.keyCode ? e.keyCode : e.charCode
        e.target.value = "-" + unicode;

    };

}

function ControlOperator() {
    this.counter = 0;
    this.isSupported = function() {
        return true;
    };

    this.change = function(e) {
        $("#slidervalue").text(e.target.value);

    };

}

function LoadOperator() {
    this.counter = 0;
    this.isSupported = function() {
        return true;
    };

    this.loadImage = function() {

        var img = document.createElement("img");
        img.onload = function(e) {
            var container = document.getElementById("imageCont");
            container.appendChild(e.target);
        }
        img.setAttribute("src", "http://netbeans.org/images_www/v6/button-download.png");
        img = document.createElement("img");
        img.onload = function(e) {
            var container = document.getElementById("imageCont");
            container.appendChild(e.target);
        }
        img.setAttribute("src", "http://netbeans.org/images_www/v7/nb-logo-frontpage-70.png");

    };

}


function DeviceOperator() {
    this.isSupported = function() {
        if (window.DeviceOrientationEvent) {
            return true;
        } else if (window.OrientationEvent) {
            return true;
        } else {
            return false;
        }
    };

    this.deviceorientation = function(e) {
        $("#deviceorientation").attr("value", e.alpha);
    };

}

function ClipboardOperator() {
    this.isSupported = function() {
        return true;
    };

    this.copy = function(e) {
        e.target.value = "Copied";
        
        var frame = 1;
        
        foo = 1;
        dummyClipBoard();
    };



}



function dummyClipBoard() {
    // ahoj
    var a = 1;
    foo = 2;
    
    alert("Ahoj 22");
    console.log("=======================");
    resizeBody();
    //   hide();
    yetAnotherDummyOne();
    dummyClipBoard2();
}

window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

function animate(canvas) {
    var context = canvas.getContext("2d");
    var date = new Date();
    var time = date.getTime();

    // update
    var widthScale = Math.sin(time / 200) * 0.1 + 0.9;
    var heightScale = -1 * Math.sin(time / 200) * 0.1 + 0.9;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw
    context.beginPath();
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(widthScale, heightScale);
    context.arc(0, 0, 65, 0, 2 * Math.PI, false);
    context.restore();
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "#555";
    context.stroke();

    context.beginPath();
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(widthScale, heightScale);
    context.arc(-30, -30, 15, 0, 2 * Math.PI, false);
    context.restore();
    context.fillStyle = "white";
    context.fill();
    if (controls.animation.next)
        // request new frame
        requestAnimFrame(function() {
            animate(canvas);
        });
}