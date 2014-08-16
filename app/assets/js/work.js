$(function() {
	// Create the work nav
	$(".work-block").each(function(index, workBlock) {
		var $workBlock = $(workBlock);
		var workTitle = $workBlock.find(".header").first().html();

		// Create an id on the workBlock
		$workBlock.attr("id", workTitle);

		// Create a link to that id on the navBlock
		var $navBlock = $("<li></li>").append($("<a></a>").append($("<p></p>")));
		$navBlock.find("a").attr("href", "#" + workTitle);
		$navBlock.find("p").html(workTitle);

		// Attach the navBlock to the DOM
		$(".navigation").append($navBlock);
	});

	// Create a div that will hide all but the top three navBlocks
	var $hidden = $("<div></div>", { "class": "hider hidden" });
	$hidden.append($(".navigation").children().not(":nth-child(1)").not(":nth-child(2)").not(":nth-child(3)"));

	// Add a "more" link
	$moreLink = $("<li></li>").append($("<a></a>", { "class": "more", href: "#", on: { click: function(e) {
		e.preventDefault();
		$hidden.toggleClass("hidden");
		$(e.target).parents("li").remove();
	}}})
	.html(". . ."));

	$(".navigation").append($hidden);
	$(".navigation").append($moreLink);
});