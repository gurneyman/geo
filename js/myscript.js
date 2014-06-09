var Instagram = {};
Instagram.Template = {};


// HTML markup goes here
Instagram.Template.Views = {
  "photo": "<div class='photo'>" +
            "<a href='{url}' target='_blank'><img class='main' src='{photo_url}' width='250' height='250' /></a>" +
            "<img class='avatar' src='{avatar_url}' />" +
            "<span class='user-name'><strong>{user_name}</strong></span>" +
            "<span class='heart'><strong>{like_count}</strong></span>" +
          "</div>"
};
  // A simple (it does the job) function for template parsing.
Instagram.Template.generate = function(template, photo){

  // Define variable for regular expression.
  var re;

  // Fetch template.
  template = Instagram.Template.Views[template];
  
  // Loop through the passed photo object.
  for(var attribute in photo){
    // Look for this
    var exp = "{" + attribute + "}";
    
    
    // Find and replace with actual data
    template = template.replace(exp, photo[attribute]);
    
  }
return template;
};
/* 
    Keeping the global namespace clean by
    using an anonymous function.
    This makes sure I don't accidentally
    overwrite variables from other scripts.
*/
(function(){


  
  function toTemplate(photo){
    photo = {
      like_count: photo.likes.count,
      avatar_url: photo.user.profile_picture,
      user_name: photo.user.username,
      photo_url: photo.images.low_resolution.url,
      url: photo.link
    };

    return Instagram.Template.generate('photo', photo);
  }
  function toScreen(photos){
    
    $.each(photos.data, function(index, photo){
      // Construct the image tag using the url in the photos object
      // as the src.
      photo = toTemplate(photo);

      // Append our fresh img tag to our photos-wrap div
      $('div#photos-wrap').append(photo);
    });
  }
  function search(tag){
    var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=6737592e093845feaad96180d041d119"
    $.getJSON(url, toScreen);
  }
  // Expose search to global namespace
  Instagram.search = search;

})();

Instagram.search('doge');

