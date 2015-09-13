$(document).ready(function() {

		$("#new_game_btn").on("click", function(event){
          event.preventDefault();
          console.log("hi");
          
          $.ajax({
			url: "/signup",
			type: "GET"
          }).done(function(response){
            $("#signup").html(response);
        })

        });

		$("#join_btn").on("click", function(event){
          event.preventDefault();
          console.log("hi");
          
          $.ajax({
			url: $(this).children().attr("href"),
			type: "GET"
          }).done(function(response){
            $("#join").html(response);
        })

        });




});