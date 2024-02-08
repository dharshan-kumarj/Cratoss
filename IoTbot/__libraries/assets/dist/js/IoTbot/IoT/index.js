function Ajax() {

  
  input = $("#userinput").val();
  

  var new_row = document.createElement("div");
  new_row.setAttribute("class", "container text-end user ");
  new_row.setAttribute("id", "Profile");

  const node = document.createTextNode($("#userinput").val());

  new_row.appendChild(node);
  
  document.body.appendChild(new_row);
  
  $("#userinput").val("");
  elem = document.createElement("img");
  new_row.class = "container text-end User";
  elem.src = "/IoTbot/__libraries/__images/User.png";
  elem.height = "50";
  elem.width = "50";

  elem.alt = "User";
  elem.setAttribute("class", "rounded-circle p-2");

  new_row.appendChild(elem);
  document.body.appendChild(new_row);
  starttypeanimation();
  

  

  $.ajax({
    type: "post",
    url: "/IoTbot/__libraries/ajax.php",
    data: {
      userinput: input,
    },
    
    
    success: function (response) {
      
      
      result_ = JSON.parse(response);
      stoptypeanimation();
      
      const outputText = result_["output"];
      const outputContainer = document.createElement("div");
      outputContainer.setAttribute("class", "container AI");
      outputContainer.setAttribute("id", "Profile");
      document.body.appendChild(outputContainer);
      const typingDelay = 12;
      let index = 0;

      // var copy_ = document.createElement("div");
      // copy_.setAttribute("class", "wrapper text-end");
      // var x = document.createElement("BUTTON");
      // x.setAttribute("class", "btn btn-light");
      // var para = document.getElementsByTagName("button");
      // para.id = "copytext";
      // x.addEventListener("click", function () {
      //   Copy(result_['output']);
      //    this.innerHTML="&#10003 Copied";
      //   setTimeout(() => this.innerHTML="Copy", 1000)
      // });
      // var t = document.createTextNode("Copy");
      // x.appendChild(t);
      // document.body.appendChild(x);
      
      var copy_ = document.createElement("div");
      copy_.setAttribute("class", "input-group-append");

      var x = document.createElement("BUTTON");
      x.setAttribute("class", "btn btn-primary ");

      var para = document.getElementsByTagName("button");
      para.id = "copytext";
      x.addEventListener("click", function () {
        Copy(result_['output']);
        this.innerHTML="&#10003 Copied";
        setTimeout(() => this.innerHTML="Copy the text!", 1000)
      });
      var t = document.createTextNode("Copy the text!");
      x.appendChild(t);
      outputContainer.appendChild(x);


     
      function typeNextCharacter() {
        if (index < outputText.length) {
          const char = outputText.charAt(index);
          const charNode = document.createTextNode(char);
          outputContainer.appendChild(charNode);
          index++;
          setTimeout(typeNextCharacter, typingDelay);
        } else {
          Copy(result_['output']);
          // $('container AI')[0].scrollTop = $('body')[0].scrollHeight;
        }
      }
      elem = document.createElement("img");
      outputContainer.class = "AI";
      elem.src = "/IoTbot/__libraries/__images/AI.png";
      elem.height = "50";
      elem.width = "50";
      elem.alt = "AI";
      elem.setAttribute("class", "rounded-circle p-2");
      outputContainer.appendChild(elem);
      document.body.appendChild(outputContainer);
      typeNextCharacter();

     
 

      // window.scrollTo(0, document.body.scrollHeight);

    

    },
  });

      




function Copy(text) {
  var copyText = document.createElement("textarea");
  copyText.value = text;
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  
}

function starttypeanimation() {

  $("#typingIndicator").text("Typing....");

}

function stoptypeanimation() {

  $("#typingIndicator").text("");

}

}
