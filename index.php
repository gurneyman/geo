<?php
  $title = "Simple Geolocation";
  include 'inc/header.php';
?>
<h1><?= $title ?></h1>

<div id="signin">
 <a href="https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code">Sign In</a>
</div>



<div id="devInfo">
  Loading...
</div>
<?php
  include 'inc/footer.php';
?>