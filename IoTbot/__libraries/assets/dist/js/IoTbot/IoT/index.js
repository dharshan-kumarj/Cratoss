function Ajax() {

  
  input = $("#userinput").val();
  var new_row = document.createElement("div");
  new_row.setAttribute("class", "container text-end user ");
  new_row.setAttribute("id", "Profile");
  const node = document.createTextNode($("#userinput").val());
  new_row.appendChild(node);                                              // this for typing user input in webpage
  document.body.appendChild(new_row);                          
  $("#userinput").val("");

  elem = document.createElement("img");
  new_row.class = "container text-end User";
  elem.src = "/IoTbot/__libraries/__images/User.png";                    //to add image for the User
  elem.height = "50";
  elem.width = "50";
  elem.alt = "User";
  elem.setAttribute("class", "rounded-circle p-2");
  new_row.appendChild(elem);
  document.body.appendChild(new_row);

  const outputContainer = document.createElement("div");  //for Cratoss op
  outputContainer.setAttribute("class", "container AI");            
  outputContainer.setAttribute("id", "Profile");
  elem = document.createElement("img");
  outputContainer.class = "AI";
  elem.src = "/IoTbot/__libraries/__images/AI.png";         
  elem.height = "50";
  elem.width = "50";                                                // THis phase is adding img to the Cratoss
  elem.alt = "AI";
  elem.setAttribute("class", "rounded-circle p-2");
  outputContainer.appendChild(elem);
  const animation_ = document.createElement("div"); 
  animation_.setAttribute("id", "typingIndicator"); 
  outputContainer.appendChild(animation_);
  document.body.appendChild(outputContainer);
  starttypeanimation(); //to start typing... animation
  
  $.ajax({
    type: "post",
    url: "/IoTbot/__libraries/ajax.php",
    data: {                                                           // for getting the output
      userinput: input,
    },
    
    
    success: function (response) {
      
      result_ = JSON.parse(response);
      stoptypeanimation();
      $('#typingIndicator').remove()
      const outputText = result_["output"];
      document.body.appendChild(outputContainer);
      const typingDelay = 12;                                               //this is for generting output text from Cratoss in Webpage
      let index = 0;
      var copy_ = document.createElement("div");
      copy_.setAttribute("class", "input-group-append");
      var x = document.createElement("BUTTON");
      x.setAttribute("class", "btn btn-primary ");
      var para = document.getElementsByTagName("button");
      para.id = "copytext";
      x.addEventListener("click", function () {                           // THis phase is for adding copy button to that AI
      Copy(result_['output']);
      this.innerHTML="&#10003 Copied";
      setTimeout(() => this.innerHTML="Copy", 1000)
      });
      var t = document.createTextNode("Copy");
      x.appendChild(t);
      outputContainer.appendChild(x);


     
      function typeNextCharacter() {
        if (index < outputText.length) {
          const char = outputText.charAt(index);
          const charNode = document.createTextNode(char);                // This phase is for animation of text animation
          outputContainer.appendChild(charNode);
          index++;
          setTimeout(typeNextCharacter, typingDelay);
        } else {
          Copy(result_['output']);
          // $('container AI')[0].scrollTop = $('body')[0].scrollHeight;
        }
      }
      typeNextCharacter();
      // window.scrollTo(0, document.body.scrollHeight);

    },
  });
    
function Copy(text) {
  var copyText = document.createElement("textarea");
  copyText.value = text;
  document.body.appendChild(copyText);                           //THis phase is for copy button function
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  
}

function starttypeanimation() {

  $("#typingIndicator").text("Typing....");                   //This is for writing of typing... for Cratoss

}

function stoptypeanimation() {

  $("#typingIndicator").text("");                        //This is for stop writing of typing... for Cratoss

}

}
