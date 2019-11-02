let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);

let input = document.createElement('input');
input.id = "input";
wrapper.prepend(input);

let keyboard = document.createElement('div');
keyboard.className = "keyboard";
wrapper.append(keyboard);