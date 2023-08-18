jQuery(document).ready(function ($) {
  let bankName = "BIDV";
  let bankNumber = "13310000015224";
  let qrType = "compact";
  var qr_image = `https://img.vietqr.io/image/${bankName}-${bankNumber}-${qrType}.png`;
  $(".qr-code-img").attr("src", qr_image);
  $(".bank-list").on("click", ".bank-item", function () {
    let bankName = $(this).data("bank");
    if (bankName == "MOMO") {
      var qr_image = $(this).data("url");
    } else {
      let bankNumber = $(this).data("stk");
      var qr_image = `https://img.vietqr.io/image/${bankName}-${bankNumber}-${qrType}.png`;
    }
    $(".qr-code-img").attr("src", qr_image);
  });
});