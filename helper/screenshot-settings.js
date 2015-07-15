// Just paste this into your browser-console to clear all account-associating data from /settings

$("#mainHeader").find("p.hello").text("example@protonmail.com");
$("#sidebar").find(".number").addClass("hide");
$("#topMenu").find("li").eq(0).find(".number").text("42").removeClass("hide");

$("#sidebarLabels").empty().append("<li class=\"tag-menu\"><a href=\"/label/MyLabel\"><span class=\"fa fa-tag\"></span><strong>MyLabel</strong></a></li>").append("<li class=\"tag-menu\"><a href=\"/label/ProtonMail\"><span class=\"fa fa-tag\"></span><strong>ProtonMail</strong></a></li>");

$("#notification_email").val("info@example.com");
$("#display_name").val("John Doe");

$("#signature").val("Sent from <a href=\"https://protonmail.ch\">ProtonMail</a>, encrypted email based in Switzerland.");

$("#address_sort").empty().append("<li class=\"ui-state-default ui-sortable-handle\"><span class=\"fa fa-sort pull-left\"></span>example@protonmail.com<em class=\"default-tag\"><i class=\"fa fa-star\"></i></em></li>").append("<li class=\"ui-state-default ui-sortable-handle\"><span class=\"fa fa-sort pull-left\"></span>example@protonmail.ch<em class=\"default-tag\"><i class=\"fa fa-star\"></i></em></li>");

$(".sizebar > span").text("512/1024 MB");
$(".sizeBar > .fill").css({width: "50%"});
