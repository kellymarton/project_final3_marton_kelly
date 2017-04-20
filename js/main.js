$(document).ready(function () {

    $('#navigation').slimmenu({
        resizeWidth: '800',
        collapserTitle: 'Site Menu',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });

    $('ul li').mouseover(function () {
        $('li').css('color', '#f11c24');
    });
    $('ul li').mouseout(function () {
        $('li').css('color', '#f9bd04');
    });

});

var fbs = document.getElementById('fbs');
fbs.onclick = function () {
    myFunction();
};
function myFunction() {
    document.getElementById('money').innerHTML = "There's always money in the banana stand.";
}
