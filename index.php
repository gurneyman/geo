<?php
  $title = "Geo-Instagram Experiment";
  include 'inc/header.php';
?>
<h1><?= $title ?></h1>
<div id="search">
  <button id="search-button">
    <span class="button-content">Search</span>
  </button>
  <div class="search-wrap">
    <input class="search-tag" type='text' tabindex="1" />
  </div>
</div>

<div id='photos-wrap'>  
</div>
<?php
  include 'inc/footer.php';
?>