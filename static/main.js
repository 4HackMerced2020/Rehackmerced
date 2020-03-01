function clickLog(){
    $.get("/log in", {}, function(response){
        $("#log-area").html(response)
    });
}