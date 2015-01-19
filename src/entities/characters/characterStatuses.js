define([], function(){
    var statuses = [
        {
            color: 'teal',
            icon: 'gamepad',
            text: 'Ready'
        },
        {
            color: 'black',
            icon: 'ok sign',
            text: 'Played'
        },
        {
            color: 'orange',
            icon: 'hide',
            text: 'Waiting'
        },
        {
            color: 'red',
            icon: 'frown',
            text: 'Unconscious',
            sticky: true,
            disabled: true
        }
    ];

    return statuses;
});
