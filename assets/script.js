jQuery(document).ready(function ($) {
  let qrType = "qr_only";
  let bankName = $(".bank-list .bank-item").first().data("bank");
  let bankNumber = $(".bank-list .bank-item").first().data("stk");
  var qr_image = `https://img.vietqr.io/image/${bankName}-${bankNumber}-${qrType}.png`;
  $(".qr-code-img").attr("src", qr_image);
  $(".bank-list .bank-item").first().find(".icon").clone().prependTo(".icon-bank-inner");
  $(".bank-list .bank-item").first().addClass("active");
  $(".bank-list").on("click", ".bank-item", function () {
    let bankName = $(this).data("bank");
    $(".bank-list .bank-item").removeClass("active");
    $(this).addClass("active");
    $(".qr-code .icon").remove();
    if (bankName == "MOMO") {
      var qr_image = $(this).data("url");
    } else {
      let bankNumber = $(this).data("stk");
      var qr_image = `https://img.vietqr.io/image/${bankName}-${bankNumber}-${qrType}.png`;
    }
    $(".qr-code-img").attr("src", qr_image);
    $(this).find(".icon").clone().prependTo(".icon-bank-inner");
  });
});
