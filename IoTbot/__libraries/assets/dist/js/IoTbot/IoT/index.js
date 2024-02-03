function Ajax(){
  
  var new_row = document.createElement( "div" );
  new_row.setAttribute( "class", "container text-end user");
  const node = document.createTextNode($("#userinput").val());
  new_row.appendChild(node);
  document.body.appendChild( new_row );
  elem = document.createElement("img");
  new_row.class= "container text-end User";
  elem.id = "User";
  console.log("Printing my new element: ", elem)
  elem.src= "/IoTbot/__libraries/__images/User.png";
  elem.height= "100";
  elem.width= "100";
  elem.alt= "User";
  document.getElementById("User").appendChild(elem);
 
 
  
    $.ajax({ type :"post", url: "/IoTbot/__libraries/ajax.php",
      data:{
        
        userinput:$("#userinput").val(),
      },
  
      success: function(response){
        
        result_=JSON.parse(response)
        var new_row = document.createElement( "div" );
        new_row.setAttribute( "class", "container AI " );
        const node = document.createTextNode(result_['output']);
        new_row.appendChild(node);
        document.body.appendChild( new_row );
          result_=JSON.parse(response)
          new_row = document.createElement( "div" );
          elem = document.createElement("img");
          new_row.class= "container text-end User";
          elem.id = "User";
          console.log("Printing my new element: ", elem)
          elem.src= "/IoTbot/__libraries/__images/AI.png";
          elem.height= "100";
          elem.width= "100";
          elem.alt= "User";
          document.getElementById("User").appendChild(elem);
        
          
        }
    })
}

