$(document).ready(function(){var thisurl=new URL(location.href);thisurl.hash='#top';$('header').before($(`<a href="${thisurl.href}">`));$('<div>').append($('div#load')[0]).html();$('main').attr('style','display:block;');$("section h1, section h2").each(function(){$("nav#section ul").append(`<li class='tag-${this.nodeName.toLowerCase()}'><a href='#${$(this).text().toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}'>${$(this).text()}</a></li>`);$(this).attr("id",$(this).text().toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''));$("nav#section ul li:first-child a").parent().addClass("active");});$("nav#section ul li").on("click","a",function(event){var position=$($(this).attr("href")).offset().top-190;$("html, body").animate({scrollTop: position},400);$("nav#section ul li a").parent().removeClass("active");$(this).parent().addClass("active");event.preventDefault();});})
