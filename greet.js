function greet(name, lang) {
    const greetings = {
        Hello: 'Hello',
        Hola: 'Hola',
        Dumela: 'Dumela',
        Halo: 'Hallo',

    };
    return `${greetings[lang]}, ${name}`;
}

// Test the function
function greet(Name, lang) {

    return lang+', ' + Name;
}