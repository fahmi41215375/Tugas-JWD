<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Wisata Alam</title>
    <link 
      rel="shorcut icon"  
      href="images/airnet.jpeg" type="image/x-icon" 
    
    />

  </head>
  <body>
    <?php
      function renderAktifMenu($val1, $val2){
        $result = "";
        if($val1 == $val2){
          $result="active-menu";
        }
        return $result;
      }
    ?>
    <div class="main-container">
      <div class="img-header">
        <div class="brand-container">
          <h1>Objek Wisata Alam</h1>
          <h2>Di Sekitar Makassar Sulawesi Selatan Fahmi</h2>

          <img src="images/logo_malino_kuning.png" alt="" />
        </div>
        <!--akhir dari brand-container-->

        <img src="images/malino_camping_ground.jpg" alt="" />

        <img src="images/malino_hutan_pinus.jpg" alt="" />

        <img src="images/malino_kebun_bunga.jpg" alt="" />

        <img src="images/malino_kebun_teh.jpg" alt="kebun teh" />

        <img src="images/malino_pool.jpg" alt="pool" />

        <img src="images/malino_puncak.jpg" alt="puncak" />

        <img src="images/malino_resto.jpg" alt="resto" />

        <img src="images/malino_sun_set.jpg" alt="sun set" />

        <img src="images/malino_water_fall.jpg" alt="waterfall" />

        <img src="images/malino_high_land.jpg" alt="" />
      </div>
      <!--akhir dari img-header-->

      <div class="menu-header">
        <a class="<?php echo renderAktifMenu($aktif_menu, "beranda") ?>" href="index.php">Beranda</a>

        <a class="<?php echo renderAktifMenu($aktif_menu, "form_pendaftaran") ?>" href="form_pendaftaran.php">Daftar Paket Wisata</a>

        <a class="<?php echo renderAktifMenu($aktif_menu, "list_pendaftaran") ?>" href="list_pemesanan.php">Modifikasi Pesanan</a>
      </div>
      <!--akhir dari menu-header-->