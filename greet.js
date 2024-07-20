function greet(name, lang) {
    const greetings = {
        Hello: 'Hello',
        Hola: 'Hola',
        Dumela: 'Dumela',
        Hallo: 'Hallo',
    };
    return `${greetings[lang]}, ${name}`;
}

function validateAndGreet(name, lang) {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(name)) {
        return 'Please enter a valid name.';
    }
    return greet(name, lang);
}
