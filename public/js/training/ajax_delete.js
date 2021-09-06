$( document).on( "click", ".delete", function(e) {
    e.preventDefault();

    let row = $(this).parent().parent();
    let rowID = $(this).parent().parent().attr('data-id');
    let deleteURL = $(this).attr('href');
    let albumTitle = row.find('.title').html();
    let albumArtist = row.find('.artist').html();
    let delConfirm = confirm(`Are you sure that you want to delete "${albumTitle}" by "${albumArtist}"?`);

    if(delConfirm){
        $.ajax({
            method: "post",
            url: deleteURL,
            dataType: 'json',
            data: {
                'id' : rowID,
                'del' : delConfirm? 'Yes': 'No'
            },
            success: function(response, status, xhr){
                console.log(response);
                if(response.success)
                    row.remove();
                else
                    alert("We failed to delete your album.");
            }
        });
    }
});