// extracted from issue 198032

function level0() {
  var var_a = "level0";// invoking refectoring through CTRL+R here

  function level1_1(){
    var_a = var_a;
    document.write("level1_1: " + var_a +  "<br/>");
  }
  function level1_2(){
    var var_a;
    document.write("level1_2: " + var_a +  "<br/>");
  }
  function level1_3 (){
    var_a = var_a;
    document.write("level1_3: " + var_a +  "<br/>");
  }
  function level1_4 (){
    this.level2_1 = function(){
      var_a = var_a;
      document.write("level2_1: " + var_a +  "<br/>");
    }
  }

  level1_1();
  level1_2();
  level1_3();
  var o = new level1_4();
  o.level2_1();
}
level0();
