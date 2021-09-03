function updateDate(){
    let dateVal = $('.input-date').val();
    let age =  moment().diff(dateVal, 'years');
    $(".input-age").val(Math.floor(age));
}

$( document ).ready(function() {
    $("tr").each(function(){
        let rowDate = $(this).find(".date").html();
        let age =  moment().diff(rowDate, 'years');
        $(this).find(".age").html(Math.floor(age));
    });

    updateDate();
});

$(document).on('change', '.input-date', updateDate);