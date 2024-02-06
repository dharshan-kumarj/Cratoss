function Ajax(){

  input=$("#userinput").val();

  
  
  var new_row = document.createElement( "div" );
  
  new_row.setAttribute( "class", "container text-end user ");
  
  new_row.setAttribute("id","Profile");
  
  
  const node = document.createTextNode($("#userinput").val());
  
  
  new_row.appendChild(node);
  document.body.appendChild( new_row );
  $("#userinput").val("");
  elem = document.createElement("img");
  new_row.class= "container text-end User";
  console.log("Printing my new element: ", elem)
  elem.src= "/IoTbot/__libraries/__images/User.png";
  elem.height= "50";
  elem.width= "50";
  
  elem.alt= "User";
  elem.setAttribute( "class", "rounded-circle p-2");
  
  //  ($spacer * .5)
  new_row.appendChild(elem);
 
  
  document.body.appendChild( new_row );
  
  
 
 
  
    $.ajax({ type :"post", url: "/IoTbot/__libraries/ajax.php",
      data:{
        
        
        userinput:(input),
      },
  
      success: function(response){
        
        result_=JSON.parse(response);
        var new_row = document.createElement( "div" );
        new_row.setAttribute( "class", "container AI " );
        new_row.setAttribute("id","Profile");
        const node = document.createTextNode(result_['output']);
      
        
        
          result_=JSON.parse(response);


          var copy_ = document.createElement( "div1" );
          copy_.setAttribute( "class", "wrapper text-end" );
         
          var x = document.createElement("BUTTON");
          x.setAttribute( "class", "btn btn-dark" );
          // x.setAttribute("id","copytext");
          var para = document.getElementsByTagName('button'); 
          para.id = 'copytext';
      // x.addEventListener("Copy", Copy(result_['output']));
          var t = document.createTextNode("Copy");
          x.appendChild(t);
          document.body.appendChild(x);
          // var para_ = document.createElement( "p" );
          // para_.setAttribute("id","success");
          // para_.textContent="Text copied succesfully";


          window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
          
          elem = document.createElement("img");
          new_row.class= "AI";
          
          elem.src= "/IoTbot/__libraries/__images/AI.png";
          elem.height= "50";
          elem.width= "50";
          
          elem.alt= "AI";
          elem.setAttribute( "class", "rounded-circle p-2");
        
          new_row.appendChild(elem);
          
          new_row.appendChild(node);
          document.body.appendChild( new_row );

        //   const scrollToBottom = (chat-msg) => {
        //     const element = document.getElementById(chat-msg);
        //     element.scrollTop = element.scrollHeight;
        // }
        
          
        }
    })
}

// // const  copybtn = document.querySelector('.copy-btn');
//     const  element_ = document.querySelector('.link-container');


  let copy = document.getElementById('copytext');
  // let success = document.getElementById('success');

  function Copy(){
  copy.select()
  copy.setSelectionRange(0,99999)
  document.execCommand('copy')
  // success.style.display = 'block';
  }



