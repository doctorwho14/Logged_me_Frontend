function tooglePage(toggle) {
  $.getJSON(`../mock/${toggle}Data.json`, function (data) {
    $.each(data, function (index, item) {
      var itemElement = $("<a>").prop({
        class: "item_element",
        href: "#",
      });

      var leftDiv = $("<div>").prop({
        class: "item_left_div",
      });

      var imgElement = $("<img>").attr({
        src: item.imageSrc,
        alt: item.name,
        class: "item_image",
      });

      var userNameElement = $("<div>").prop({
        class: "item_userName",
        textContent: item.userName,
      });

      leftDiv.append(imgElement);
      leftDiv.append(userNameElement);

      var rightDiv = $("<div>").prop({
        class: "item_right_div",
      });

      var followElement = $("<button>").prop({
        class: item.Follow ? "item_following_btn" : "item_follow_btn",
        textContent: item.Follow ? "Following" : "Follow",
      });

      var moreElement = $("<i>").prop({
        class: "fa-solid fa-ellipsis",
      });

      rightDiv.append(followElement);
      rightDiv.append(moreElement);

      itemElement.append(leftDiv);
      itemElement.append(rightDiv);

      $(".follow_list_main_section").append(itemElement);
    });
  });
}

$(function () {
  tooglePage("follower");
});

$(document).on("click", ".item_following_btn", function () {
  $(this).attr("class", "item_follow_btn");
  $(this).text("Follow");
});

$(document).on("click", ".item_follow_btn", function () {
  $(this).attr("class", "item_following_btn");
  $(this).text("Following");
});

$("#Follower_list").click(function () {
  $(".follow_list_main_section").empty();
  $(".toggle_wrap").removeClass("following");
  $(".toggle_wrap").addClass("follwers");
  tooglePage("follower");
});

$("#Following_list").click(function () {
  $(".follow_list_main_section").empty();
  $(".toggle_wrap").removeClass("follwers");
  $(".toggle_wrap").addClass("following");
  tooglePage("following");
});

// $(document).ready(function () {
//   $(".toggle_button").on("click", function () {
//     const target = $(this).attr("data-target");
//     $(".toggle_button").removeClass("active");
//     $(this).addClass("active");

//     // Depending on the target, you can show/hide or load the corresponding content here.
//     // For example, you can use Ajax to load the data for Followers/Following.
//     // For simplicity, let's just log the selected target for now.
//     console.log(target);
//   });
// });