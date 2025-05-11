// huh?

var messages = [
    'Not found',
    'Not here',
    'huh?',
    'This page doesn\'t exist',
    'Maybe try again?',
    'You\'re lost',
    'You\'re lost',
    'Nope',
    'Nope.',
    'nope',
    'nope.',
    'Call tech support',
    'Call tech support maybe?',
    'What are you doing here?',
    '\"Oh? Hi! So... How are you holding up?',
    '\"Oh. Hi. So... How are you holding up?',
    'Search deeper maybe',
    'Search deeper maybe.',
    'Search deeper maybe?',
    'This page was wiped from the face of the earth',
    'This page was wiped from the face of the earth',
    'This page was wiped from the face of the earth.',
    'The page you\'re trying to reach no longer exists',
    'The page you\'re trying to reach no longer exists.',
    'empty',
    "Are you lost?",
    'error 404, error mesage not found',
    'StaySpicy',
    'StaySpicy'
]
function newMessage() {
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById('messsageDisplay').innerHTML = messages[randomNumber];
}
