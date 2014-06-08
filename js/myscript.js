var Instagram = {};


/* 
    Keeping the global namespace clean by
    using an anonymous function.
    This makes sure I don't accidentally
    overwrite variables from other scripts.
*/
(function(){
  
  function toScreen(photos){
    
    $.each(photos.data, function(index, photo){
      // Construct the image tag using the url in the photos object
      // as the src.
      photo = "<img src='" + photo.images.low_resolution.url +"' />";

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

