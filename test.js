const console = require('.');

console.clear();

console.log(
    console.background.blue(console.text.yellow("Hello")),
    console.text.magenta("World "),
    console.text.white(console.text.underscore("from")),
    console.text.reverse("Zlynt")
);