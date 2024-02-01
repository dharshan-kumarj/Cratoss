function Ajax(){
  
  var new_row = document.createElement( "div" );
  new_row.setAttribute( "class", "container text-end user" );
  const node = document.createTextNode($("#userinput").val());
  new_row.appendChild(node);
  document.body.appendChild( new_row );
  
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
          
        }
    })
}

