$("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
});
$("#slider-default").slider({
    value: 70,
    orientation: "horizontal",
    range: "min",
    animate: true
});
$('.btn-tooltip').tooltip('show');
$('.radio').on('toggle', function() {});