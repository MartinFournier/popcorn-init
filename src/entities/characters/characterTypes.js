define([], function() {
    var characterTypes = [
        {
            text: 'Player',
            class: 'player',
            icon: 'user',
            color: 'white',
            showHp: false
        },
        {
            text: 'Enemy',
            class: 'player',
            icon: 'frown',
            color: 'black',
            showHp: true
        }
    ];

    return characterTypes;
});
