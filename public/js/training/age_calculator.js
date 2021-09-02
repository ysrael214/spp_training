function updateDate(){
    let dateVal = $('.input-date').val();
    dateVal = new Date(dateVal);
    let age = Math.abs( new Date() - dateVal )/1000/3600/24/365;
    $(".input-age").val(Math.floor(age));
}

$( document ).ready(function() {
    $("tr").each(function(){
        let rowDate = $(this).find(".date").html();
        rowDate = new Date(rowDate);
        let age = Math.abs( new Date() - rowDate )/1000/3600/24/365;
        $(this).find(".age").html(Math.floor(age));
    });

    updateDate();
});

$(document).on('change', '.input-date', updateDate);