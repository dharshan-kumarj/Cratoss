function Ajax(){
  

    $.ajax({ type :"post", url: "/IoTbot/__libraries/ajax.php",
      data:{
        
        userin:$("#userin").val(),
      },
  
      success: function(response){
        alert(response)
        result_=JSON.parse(response[0])
        console.log(result_);
      }
    })
}