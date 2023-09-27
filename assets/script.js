jQuery(document).ready(function ($) {
  let qrType = "qr_only";
  let bankName = $(".bank-list .bank-item").first().data("bank");
  let bankNumber = $(".bank-list .bank-item").first().data("stk");
  var qr_image = `https://img.vietqr.io/image/${bankName}-${bankNumber}-${qrType}.png`;
  $(".qr-code-img").attr("src", qr_image);
  $(".bank-list .bank-item")
    .first()
    .find(".icon")
    .clone()
    .prependTo(".icon-bank-inner");
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
  var clipboard_bankitem = new ClipboardJS('.bank-item');
  clipboard_bankitem.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});
  var clipboard = new ClipboardJS(".copy-btn");
  function setTooltip(btn, message) {
    var btn_text_old = $(btn).text();
    $(btn).text(message);
    setTimeout(function () {
      $(btn).text(btn_text_old);
    }, 2000);
  }
  clipboard.on("success", function (e) {
    e.clearSelection();
    setTooltip(e.trigger, "Đã sao chép!");
  });
  clipboard.on("error", function (e) {
    e.clearSelection();
    setTooltip(e.trigger, "Thất bại!");
  });
});
