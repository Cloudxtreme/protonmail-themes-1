// Just paste this into your browser-console to clear all account-associating data from any message-path (containing at least one message)

$("#mainHeader").find("p.hello").text("example@protonmail.com");
var $sidebar = $("#sidebar");
$sidebar.find(".number").addClass("hide");
$sidebar.find("li > a").removeClass("active").eq(1).find(".number").text("42").removeClass("hide");

$("#sidebarLabels").empty()
    .append("<li class=\"tag-menu\"><a href=\"/label/MyLabel\"><span class=\"fa fa-tag\"></span><strong>MyLabel</strong></a></li>")
    .append("<li class=\"tag-menu\"><a href=\"/label/ProtonMail\" class=\"active\"><span class=\"fa fa-tag\"></span><strong>ProtonMail</strong><em class=\"number\">4</em></a></li>");

$("#pageDropdown").find(".pure-button > em").html("1-20<strong> of 1337</strong>");
$("#prevPage").addClass("disabled");
$("#nextPage").removeClass("disabled");

var $everything = $("#everything");
if ($everything.is(":checked")) {
  $everything[0].click();
} else {
  $everything[0].click();
  $everything[0].click();
}

var $tbody = $("#messages > tbody").empty();

function createPseudoMessage(unread, external, favorite, labels, archive, from, subject, date) {
  var $tr = $("<tr class=\"" + (unread ? "unread" : "active active") + " encrypted" + (favorite ? " starred" : "") + "\" data-message-read=\"" + (unread ? 0 : 1) + "\"></tr>");
  $tr
      .append("<td class=\"table_actions\"><span class=\"actions_wrapper\"><input type=\"checkbox\"><i class=\"fa fa-lock" + (external ? " external" : "") + "\"></i><span class=\"fa fa-star" + (favorite ? "" : "-o") + "\"></span></span></td>")
      .append("<td class=\"table_from\"><span class=\"sender_span\">" + from + "</span></td>")
      .appendTo($tbody);

  var $td = $("<td class=\"table_subject\"></td>").appendTo($tr);
  var $a = $("<a class=\"subject_link\" href=\"/m/blupp\"></a>").appendTo($td);

  var $labels = $("<div class=\"pull-right listingLabels\"></div>").appendTo($a);
  $.each(labels, function (text, color) {
    $labels.append("<span class=\"pmlabel\" style=\"background-color:#" + color + "\">" + text + "</span>");
  });
  if (archive) {
    $a.append("<span class=\"locationTag\"><i class=\"fa fa-archive\"></i> Archive</span>");
  } else {
    $a.append("<span class=\"locationTag\"><i class=\"fa fa-inbox\"></i> Inbox</span>");
  }
  $a.append("<span class=\"fa fa-clock-o transparent\"></span><strong>" + subject + "</strong>");

  var size = Math.floor(Math.random() * 1000) / 10;
  size = size % 1 === 0 ? size + ".0" : size + "";

  $tr
      .append("<td class=\"td_att\"></td>")
      .append("<td class=\"table_size text-right mono\"><span class=\"when_span\">" + size + " KB</span></td>")
      .append("<td class=\"table_when\"><span class=\"when_span timezone formatted\" style=\"opacity: 1;\">" + date.toLocaleDateString() + "</span></td></tr>");
}

var date = new Date();
for(var i = 0; i < 20; i ++) {
  createPseudoMessage(
      i < 3 || i === 5,
      i !== 6 && i !== 8,
      i === 7 || i === 8 || i === 16,
      i !== 6 && i !== 8 ? (i > 9 && i < 13 || i === 15 ? {"Family": "fcf"} : i === 13 ? {"Family": "fcf", "Urgent": "f66"} : {}) : {"ProtonMail": "ff6"},
      i > 7 && i !== 9,
      i === 6 || i === 8 ? "ProtonMail Support" : "Jane Doe",
      i === 17 ? "Hel1o W0rld!" : "Hello World!",
      date
  );
  date = new Date(Math.floor(date.getTime() - Math.random() * 1000 * 60 * 60 * 36));
}

$(".sizebar > span").text("512/1024 MB");
$(".sizeBar > .fill").css({width: "50%"});
