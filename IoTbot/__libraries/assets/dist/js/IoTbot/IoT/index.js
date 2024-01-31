function Ajax(){
  
  var new_row = document.createElement( "div" );
  new_row.setAttribute( "class", "container text-end" );
  const node = document.createTextNode($("#userinput").val());
  new_row.appendChild(node);
  document.body.appendChild( new_row );
  
    $.ajax({ type :"post", url: "/IoTbot/__libraries/ajax.php",
      data:{
        
        put:$("#userinput").val(),
      },
  
      success: function(response){
       
      var new_row = document.createElement( "div" );
      new_row.setAttribute( "class", "container p3" );
      const node = document.createTextNode(response);
      new_row.appendChild(node);
      document.body.appendChild( new_row );
        result_=JSON.parse(response[0])
        // console.log(result_);
      }
    })
}

