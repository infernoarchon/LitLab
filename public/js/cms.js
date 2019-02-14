$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    // var url = window.location.search;
    // var postId;
    // Sets a flag for whether or not we're updating a post to be false initially
    // var updating = false;
  
    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?post_id=1, postId is 1
    // if (url.indexOf("?post_id=") !== -1) {
    //   postId = url.split("=")[1];
    //   getPostData(postId);
    // }
  

    // var postCategorySelect = $("#category");
    // Giving the postCategorySelect a default value
    // postCategorySelect.val("Personal");
    // Adding an event listener for when the form is submitted
    $(".litForm").on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      var userId = document.getElementById("user-id")
      if($(this)[0].id === "storyForm") {
        var litDescInput = $("#storydescInput");
        var litTitleInput = $("#storytitleInput");
        var litCategory = "book"
      }
      if($(this)[0].id === "poemForm") {
        var litDescInput = $("#poemdescInput");
        var litTitleInput = $("#poemtitleInput");
        var litCategory = "feather-alt"
      }
      if($(this)[0].id === "songForm") {
        var litDescInput = $("#songdescInput");
        var litTitleInput = $("#songtitleInput");
        var litCategory = "music"
      }
      console.log(litCategory)
      // Wont submit the post if we are missing a body or a title
      if (!litTitleInput.val().trim() || !litDescInput.val().trim()) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newPost = {
        title: litTitleInput.val().trim(),
        desc: litDescInput.val().trim(),
        category: litCategory,
        userid: userId.textContent
      };

  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
    //   if (updating) {
    //     newPost.id = postId;
    //     updatePost(newPost);
    //   }
    //   else {
        submitPost(newPost);
    //   }
    });
  
    // Submits a new post and brings user to blog page upon completion
    function submitPost(Post) {
      $.post("/api/posts/", Post, function() {
        window.location.href = "/home";
      });
    }
  
    // Gets post data for a post if we're editing
    // function getPostData(id) {
    //   $.get("/api/posts/" + id, function(data) {
    //     if (data) {
    //       // If this post exists, prefill our cms forms with its data
    //       titleInput.val(data.title);
    //       bodyInput.val(data.body);
    //       postCategorySelect.val(data.category);
    //       // If we have a post with this id, set a flag for us to know to update the post
    //       // when we hit submit
    //       updating = true;
    //     }
    //   });
    // }
  
    // // Update a given post, bring user to the blog page when done
    // function updatePost(post) {
    //   $.ajax({
    //     method: "PUT",
    //     url: "/api/posts",
    //     data: post
    //   })
    //     .then(function() {
    //       window.location.href = "/blog";
    //     });
    // }
  });
  