$(function() {
    var search = window.location.search;
    $("#myiframe").attr("src", $("#myiframe").attr("src")+search);
});