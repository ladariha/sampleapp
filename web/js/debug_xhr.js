/**
 * 
 * @param {type} name
 * @return {RequestOperator}
 */
function RequestOperator(name) {
    this.name = name;

    this.get = function(url, callback) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        this.log("XMLHTTPRequest to " + url + ":");
        var pointer = this;
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                pointer.log(request.status);
                if (typeof callback === "function")
                    callback(request);
            }

        };
        request.send();
    };

    this.$get = function(url, callback) {
        var pointer = this;
         this.log("$.getJSON to " + url + ":");
        $.getJSON(url, function(data) {
            pointer.log("200");
            if (typeof callback == "function")
                    callback(data);
        });
    };
    
    this.massive = function(){
        this.log("massive start");
        
        var request = new XMLHttpRequest();
        request.open("GET", 'data/dummy1.json', true);
        this.log("XMLHTTPRequest to data/dummy1.json:");
        var pointer = this;
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                pointer.log("dummy.json: "+request.status);
                if (typeof callback === "function")
                    callback(request);
            }

        };
        request.send();
        
        var request2 = new XMLHttpRequest();
        request2.open("GET", 'data/dummy2.json', true);
        this.log("XMLHTTPRequest to data/dummy2.json:");
        
        request2.onreadystatechange = function() {
            if (request2.readyState == 4) {
                pointer.log("dummy2.json: "+request2.status);
                if (typeof callback === "function")
                    callback(request2);
            }

        };
        request2.send();
        
        
        var request3 = new XMLHttpRequest();
        request3.open("GET", 'data/lines.json', true);
        this.log("XMLHTTPRequest to data/lines.json:");
        
        request3.onreadystatechange = function() {
            if (request3.readyState == 4) {
                pointer.log("lines.json: "+request3.status);
                if (typeof callback === "function")
                    callback(request3);
            }

        };
        request3.send();
    };

    this.log = function(msg) {
        $("#output").text($("#output").text() + "\n>>> " + msg);
    };


}

