$(document).ready(function () {
    //alert("Hallo JQuery");
  
    function perhitungan() {
      var harga_penginapan = 0;
      var harga_transportasi = 0;
      var harga_makanan = 0;
  
      if ($("#layanan_penginapan").is(":checked")) {
        harga_penginapan = $("#layanan_penginapan").val();
      }
  
      if ($("#layanan_transportasi").is(":checked")) {
        harga_transportasi = $("#layanan_transportasi").val();
      }
  
      if ($("#layanan_makan").is(":checked")) {
        harga_makan = $("#layanan_makan").val();
      }
  
      jumlah_hari = $("#jumlah_hari").val();
      jumlah_peserta = $("#jumlah_peserta").val();
  
      if (jumlah_peserta < 1) {
        alert("Jumlah peserta minimal 1");
        $("#jumlah_peserta").val("1");
        jumlah_peserta = $("#jumlah_peserta").val();
      }
  
      if (jumlah_hari < 1) {
        alert("Jumlah hari minimal 1");
        $("#jumlah_hari").val("1");
        jumlah_hari = $("#jumlah_hari").val();
      }
  
      if (parseInt(harga_transportasi) == 0) {
        alert("Wajib menyertakan Paket Transportasi");
        $("#layanan_transportasi").prop("checked", true);
        harga_transportasi = $("#layanan_transportasi").val();
      }
  
      var harga_paket =
        parseInt(harga_penginapan) +
        parseInt(harga_transportasi) +
        parseInt(harga_makan);
  
      var harga_paket_formated = harga_paket.toLocaleString("de-DE");
  
      var jumlah_tagihan =
        harga_paket * parseInt(jumlah_hari) * parseInt(jumlah_peserta);
  
      var jumlah_tagihan_formated = jumlah_tagihan.toLocaleString("de-DE");
  
      $("#harga_paket").val(harga_paket_formated);
      $("#jumlah_tagihan").val(jumlah_tagihan_formated);
    }
  
    $("#btn-hitung").on("click", function () {
      event.preventDefault();
      perhitungan();
    });

    $("#btn-reset").on("click", function () { 
      event.preventDefault(); 
      $("#harga_paket").val(""); 
      $("#jumlah_tagihan").val(""); 
      $("#nama_pemesan").val(""); 
      $("#tgl_pesan").val(""); 
      $("#no_tlp").val(""); 
      $("#jumlah_hari").val("1"); 
      $("#jumlah_peserta").val("1"); 
      $("#layanan_makan").prop("checked", true); 
      $("#layanan_penginapan").prop("checked", true); 
      $("#layanan_transportasi").prop("checked", true); 
    });
  
    //perhitungan();
  });