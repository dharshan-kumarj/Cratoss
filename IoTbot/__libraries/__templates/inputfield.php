<div>
    <!-- style for input text box for user -->
    <div class="container" style="
    position:fixed;
    bottom:0;left: 0;
    right: 0;                        
    margin-left: auto;
    margin-right: auto;
    background-color:#282828;
    
    ">
        <div class="row">
            <div class="input-group mb-3">
                 <!--  input text box for user -->
                <input id = "userinput" name ="userinput" type="text" class="form-control" placeholder="Ask me...." >
                 <!--  send button for user -->
                <div class="input-group-append">
                    <button id="Execute" type="button" class="btn btn-primary" onclick="Ajax() ">Send</button>
                    
                </div>
            </div>
    
        
        </div>
    </div>
</div>

<script>
var input = document.getElementById("userinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("Execute").click();
  }
});
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg>