function Runner(object, name, dispose){
    this.object  = object;
    this.limit = 0;
    this.name = name;
    this.counter = 0;
    this.dispose = dispose;
    this.callback = dispose;

    this.notify = function(){
        this.counter++;
        if(this.counter === this.limit)
        {
            try{
                if(typeof this.dispose!="undefined"){
                    this.dispose(this.object);   
                }
                this.log("finised");
            }catch(e){
                console.error(this.name+": Unable to dispose - undefined dispose method");
            }
        }
    };
    
    function pr(){
        
    }
    
    this.log = function(state){
        
         console.log("Runner "+this.name+": "+state);
    };
   
    this.start = function(args){
         this.log("started ");
        for(var key in this){ // to set number of called methods
            if(this.hasOwnProperty(key) && typeof this[key]=="function" && key.indexOf("run") >-1){
                this.limit++;
            }
        }
        
        for(var key in this){
            if(this.hasOwnProperty(key) && typeof this[key]=="function" && key.indexOf("run") >-1){
                this.log("calling "+key);
                this[key].apply(this, args); // call all run preffixed functions
            }
        }
    }
}