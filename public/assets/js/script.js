$('.burger-submit').on('click', event => {
    event.preventDefault();
    const newBurger = $('.burger-input').val();
    console.log(newBurger);
    $.post('/api', {
        name: newBurger
    }).then(() => {
        location.assign('/');
    });
});

$('button').on('click', event => {
    let burgerID = $(event.currentTarget).data('id');
    $.ajax({
        url: '/api/' + burgerID,
        type: 'PUT'
    })
    .then(() => {
        location.assign('/');
    });
});