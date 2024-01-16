function Ajax(){
  

    $.ajax({ type :"post", url: "/IoTbot/__libraries/ajax.php",
      data:{
        
        userin:$("#userin").val(),
      },
  
      success: function(msg){
        alert(msg)
      }
    })
}
