$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

var btns = document.getElementsByClassName('night-button');
var par = document.getElementsByClassName('header');
btns[0].onclick = function() {
  par[0].classList.add("active");
}
btns[1].onclick = function() {
  par[0].classList.remove("active");
}