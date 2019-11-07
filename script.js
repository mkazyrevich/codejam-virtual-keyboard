const keys = [
  ['`', '~', 'ё','Ё', 192], ['1', '!', '1','!', 49], ['2', '@', '2','"', 50], ['3', '#', '3','№', 51], ['4', '$', '4',';', 52], ['5', '%', '5','%', 53], ['6', '^', '6',':', 54], ['7', '&', '7','?', 55], ['8', '*', '8','*', 56], ['9', '(', '9','(', 57], ['0', ')', '0',')', 48], ['-', '_', '-','_', 189], ['=', '+', '=','+', 187], ['Backspace', 'Backspace', 'Backspace','Backspace', 8], ['Tab', 'Tab', 'Tab','Tab', 9], ['q', 'Q', 'й','Й', 81], ['w', 'W', 'ц','Ц', 87], ['e', 'E', 'у','У', 69], ['r', 'R', 'к','К', 82], ['t', 'T', 'е','Е', 84], ['y', 'Y', 'н','Н', 89], ['u', 'U', 'г','Г', 85], ['i', 'I', 'ш','Ш', 73], ['o', 'O', 'щ','Щ', 79], ['p', 'P', 'з','З', 80], ['[', '{', 'х','Х', 219], [']', '}', 'ъ','Ъ', 221], ['\\', '|', 'ъ','Ъ', 220], ['Del', 'Del', 'Del','Del', 46], ['Caps Lock', 'Caps Lock', 'Caps Lock','Caps Lock', 20], ['a', 'A', 'ф','Ф', 65], ['s', 'S', 'ы','Ы', 83], ['d', 'D', 'в','В', 68], ['f', 'F', 'а','А', 70], ['g', 'G', 'п','П', 71], ['h', 'H', 'р','Р', 72], ['j', 'J', 'о','О', 74], ['k', 'K', 'л','Л', 75], ['l', 'L', 'д','Д', 76], [';', ':', 'ж','Ж', 186], [`'`, `"`, 'э','Э', 222], ['Enter', 'Enter', 'Enter','Enter', 13], ['Shift', 'Shift', 'Shift','Shift', 16], ['z', 'Z', 'я','Я', 90], ['x', 'X', 'ч','Ч', 88], ['c', 'C', 'с','С', 67], ['v', 'V', 'м','М', 86], ['b', 'B', 'и','И', 66], ['n', 'N', 'т','Т', 78], ['m', 'M', 'ь','Ь', 77], [',', '<', 'б','Б', 188], ['.', '>', 'ю','Ю', 190], ['/', '?', '.',',', 191], ['Up', 'Up', 'Up','Up', 38], ['Shift', 'Shift', 'Shift','Shift', 16], ['Ctrl', 'Ctrl', 'Ctrl','Ctrl', 17], ['Win', 'Win', 'Win','Win', 91], ['Alt', 'Alt', 'Alt','Alt', 18], ['Space', 'Space', 'Space','Space', 32], ['Alt', 'Alt', 'Alt','Alt', 18], ['Left', 'Left', 'Left','Left', 37], ['Down', 'Down', 'Down','Down', 40], ['Right', 'Right', 'Right','Right', 39], ['Ctrl', 'Ctrl', 'Ctrl','Ctrl', 17]  
];

let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);

let input = document.createElement('textarea');
input.id = "input";
wrapper.prepend(input);

let keyboard = document.createElement('div');
keyboard.className = "keyboard";
wrapper.append(keyboard);

if (localStorage.getItem('counter')) {
  var counter = localStorage.getItem('counter');
} else {
  counter = 0;
}

if (localStorage.getItem('lang')) {
  var lang = localStorage.getItem('lang');
} else {
  lang = 0;
}

let ctrlIsDown = 0;

function addButtons () {
  for (let i=0; i<keys.length; i++) {
    let button = document.createElement('div');
    button.className = 'button ' + keys[i][0].toLowerCase();
    if (keys[i][0]=='Up') {
      button.innerHTML = '\u2191';
    } else {
      if (keys[i][0]=='Left') {
        button.innerHTML = '\u2190';
      } else {
        if (keys[i][0]=='Down') {
          button.innerHTML = '\u2193';
        } else {
          if (keys[i][0]=='Right') {
            button.innerHTML = '\u2192';
          } else {
            if (counter%2==0 && lang%2==0) {
              button.innerHTML = keys[i][0];
            } else {
              if (counter%2==0 && lang%2==1) {
                button.innerHTML = keys[i][2];
              } else {
                if (counter%2==1 && lang%2==0) {
                  button.innerHTML = keys[i][1];
                } else {
                  button.innerHTML = keys[i][3];
                }
              }
            }
          }
        }
      }
    }
    keyboard.append(button);
  }
  if (counter%2==1) {
    document.querySelectorAll('.caps')[0].className = 'button caps lock keydown';
  } else {
    document.querySelectorAll('.caps')[0].className = 'button caps lock';
  }
}

addButtons ();

function editButtons() {
  for (var j = 0; j < document.querySelectorAll(".button").length; j++) {
    if (keys[j][1]=='Up') {
      document.querySelectorAll(".button")[j].innerHTML = '\u2191';
    } else {
      if (keys[j][1]=='Left') {
        document.querySelectorAll(".button")[j].innerHTML = '\u2190';
      } else {
        if (keys[j][1]=='Down') {
          document.querySelectorAll(".button")[j].innerHTML = '\u2193';
        } else {
          if (keys[j][1]=='Right') {
            document.querySelectorAll(".button")[j].innerHTML = '\u2192';
          } else {
            if (counter%2==0 && lang%2==0) {
              document.querySelectorAll(".button")[j].innerHTML = keys[j][0];
            } else {
              if (counter%2==0 && lang%2==1) {
                document.querySelectorAll(".button")[j].innerHTML = keys[j][2];
              } else {
                if (counter%2==1 && lang%2==0) {
                  document.querySelectorAll(".button")[j].innerHTML = keys[j][1];
                } else {
                  document.querySelectorAll(".button")[j].innerHTML = keys[j][3];
                }
              }
            }
          }
        }
      }  
    }
  }
} 

for (let i =0; i<document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].onclick  = function(){
    editButtons();
    if (document.querySelectorAll(".button")[i].innerHTML=='Ctrl') {
      ctrlIsDown = 1;
      document.querySelectorAll('.ctrl')[0].className = 'button ctrl keydown';
    } else {
      if (document.querySelectorAll(".button")[i].innerHTML=='Shift') {
        if (ctrlIsDown == 1) {
          ctrlIsDown = 0;
          lang++;
          localStorage.setItem('lang', lang);
          editButtons();
          document.querySelectorAll('.ctrl')[0].className = 'button ctrl';
        }
      } else {
        if (document.querySelectorAll(".button")[i].innerHTML=='Space') {
          input.value += ' ';
        } else {
          if (document.querySelectorAll(".button")[i].innerHTML=='Backspace') {
            input.value = input.value.slice(0,input.value.length-1);
          } else {
            if (document.querySelectorAll(".button")[i].innerHTML == 'Shift') {
              input.value += '';
            } else {
              if (document.querySelectorAll(".button")[i].innerHTML == 'Enter') {
                input.value += `\n`;
              } else {
                if (document.querySelectorAll(".button")[i].innerHTML == 'Caps Lock') {
                  counter++;
                  localStorage.setItem('counter', counter);
                  editButtons();
                  if (counter%2==1) {
                    document.querySelectorAll('.caps')[0].className = 'button caps lock keydown';
                  } else {
                    document.querySelectorAll('.caps')[0].className = 'button caps lock';
                  }
                } else {
                  if (document.querySelectorAll(".button")[i].innerHTML == 'Tab') {
                    input.value += '    ';
                  } else {
                    if (document.querySelectorAll(".button")[i].innerHTML == 'Alt') {
                      input.value += '';
                    } else {
                      if (document.querySelectorAll(".button")[i].innerHTML == 'Del') {
                        input.value = input.value.slice(1,input.value.length);
                      } else {
                        input.value += document.querySelectorAll(".button")[i].innerHTML;
                      }
                    }
                  }
                } 
              }
            }  
          }
        }
      }
    }
  };
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 17) {
    ctrlIsDown = 1;
  } else {
    if (event.keyCode == 16) {
      if (ctrlIsDown == 1) {
        ctrlIsDown = 0;
        lang++;
        localStorage.setItem('lang', lang);
        editButtons();
      }
    } else {
      if (event.keyCode == 20) {
        counter++;
        localStorage.setItem('counter', counter);
        editButtons();
        if (counter%2==1) {
          document.querySelectorAll('.caps')[0].className = 'button caps lock keydown';
        } else {
          document.querySelectorAll('.caps')[0].className = 'button caps lock';
        }
      }
    }
  }
  for (let i=0; i<document.querySelectorAll(".button").length; i++) {

    if (event.code=='ShiftLeft') {  
      document.querySelectorAll('.enter + .shift')[0].className = document.querySelectorAll(".enter + .shift")[0].className + ' keydown';
      setTimeout(() => document.querySelectorAll(".enter + .shift")[0].className = document.querySelectorAll(".enter + .shift")[0].className.slice(0, document.querySelectorAll(".enter + .shift")[0].className.length-8), 100);
    } else {
      if (event.code=='ShiftRight') {
        document.querySelectorAll('.up + .shift')[0].className = document.querySelectorAll('.up + .shift')[0].className + ' keydown';
        setTimeout(() => document.querySelectorAll('.up + .shift')[0].className = document.querySelectorAll('.up + .shift')[0].className.slice(0, document.querySelectorAll('.up + .shift')[0].className.length-8), 100);
      } else {
        if (event.code=='ControlLeft') {  
          document.querySelectorAll('.shift + .ctrl')[0].className = document.querySelectorAll(".shift + .ctrl")[0].className + ' keydown';
          setTimeout(() => document.querySelectorAll(".shift + .ctrl")[0].className = document.querySelectorAll(".shift + .ctrl")[0].className.slice(0, document.querySelectorAll(".shift + .ctrl")[0].className.length-8), 100);
        } else {
          if (event.code=='ControlRight') {  
            document.querySelectorAll('.right + .ctrl')[0].className = document.querySelectorAll(".right + .ctrl")[0].className + ' keydown';
            setTimeout(() => document.querySelectorAll(".right + .ctrl")[0].className = document.querySelectorAll(".right + .ctrl")[0].className.slice(0, document.querySelectorAll(".right + .ctrl")[0].className.length-8), 100);
          } else {
            if (event.code=='AltRight') {  
              document.querySelectorAll('.space + .alt')[0].className = document.querySelectorAll(".space + .alt")[0].className + ' keydown';
              setTimeout(() => document.querySelectorAll(".space + .alt")[0].className = document.querySelectorAll(".space + .alt")[0].className.slice(0, document.querySelectorAll(".space + .alt")[0].className.length-8), 100);
            } else {
              if (event.code=='AltLeft') {  
                document.querySelectorAll('.win + .alt')[0].className = document.querySelectorAll(".win + .alt")[0].className + ' keydown';
                setTimeout(() => document.querySelectorAll(".win + .alt")[0].className = document.querySelectorAll(".win + .alt")[0].className.slice(0, document.querySelectorAll(".win + .alt")[0].className.length-8), 100);
              } else {
                if(keys[i][4] == event.keyCode) {
                  document.querySelectorAll(".button")[i].className = document.querySelectorAll(".button")[i].className + ' keydown';
                  setTimeout(() => document.querySelectorAll(".button")[i].className = document.querySelectorAll(".button")[i].className.slice(0, document.querySelectorAll(".button")[i].className.length-8), 100);
                }
              }
            }
          }
        }
      }
    }
  }
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode == 17) {
    ctrlIsDown = 0;
  }
});
