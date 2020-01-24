function randPW(){
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var specChar = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~"];
    var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    var pwSize = parseInt(document.getElementById('numbChars').value);
    var pw = "";
    
    if(pwSize>=8 && pwSize<=128){

      var incType = [];

      tmpState = document.getElementById("lc");
      if(tmpState.checked){
        incType.push("l"); 
      }

      tmpState = document.getElementById("uc");
      if(tmpState.checked){
        incType.push("u");
      }

      tmpState = document.getElementById("spc");
      if(tmpState.checked){
        incType.push("s");
      }

      tmpState = document.getElementById("nm");
      if(tmpState.checked){
        incType.push("n");
      }

      if(incType.length == 0){
        alert("Must Select at least one character type");
        return;
      }

      // include at least one element
      
      if(incType.includes("l")){
        pw = pw + lowercase[Math.floor(Math.random()*lowercase.length)];
      }
      if(incType.includes("u")){
        pw = pw + uppercase[Math.floor(Math.random()*uppercase.length)];
      }
      if(incType.includes("s")){
        pw = pw + specChar[Math.floor(Math.random()*specChar.length)];
      }
      if(incType.includes("n")){
        pw = pw + nums[Math.floor(Math.random()*nums.length)];  
      }

      for (var i=incType.length; i<pwSize; i++){
        whichSet = incType[Math.floor(Math.random()*incType.length)];
        switch(whichSet){
          case "l":
            pw = pw + lowercase[Math.floor(Math.random()*lowercase.length)];
            break;
          case "u":
            pw = pw + uppercase[Math.floor(Math.random()*uppercase.length)];
            break;
          case "s":
            pw = pw + specChar[Math.floor(Math.random()*specChar.length)];
            break;
          case "n":
            pw = pw + nums[Math.floor(Math.random()*nums.length)];
            break;
        } 
      }
      document.getElementById("pwOut").value = pw;
      //alert(pw);
      return;
    }
    else {
      alert("Password must be between 8 and 128 characters inclusive");
      return;
    }
  }

  function copyText() {
    let pwTxt =  document.getElementById("pwOut");
    pwTxt.select();
    document.execCommand("copy");
  }