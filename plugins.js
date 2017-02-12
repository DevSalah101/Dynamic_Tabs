/*global $*/
$(document).ready(function () {

	"use strict";

	$("body ul li").on("click", function () {

		$(this).addClass("active").siblings().removeClass("active");
		$(".tabs > div").hide();
		$("." + $(this).data("class")).fadeIn();

	});

	$("section h3").on("click", function () {

		$(this).next().slideToggle();
		$(".info").not($(this).next()).slideUp();

	});
});
