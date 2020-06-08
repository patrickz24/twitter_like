$('#btn-like').click(function(e){
    e.preventDefault();
    let tweetId = $(this).data('id')
    console.log(tweetId);
});