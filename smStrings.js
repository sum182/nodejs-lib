const strColorConsoleReset    = '\x1b[0m';
const strColorConsoleYellow   = '\x1b[33m';
const strColorConsoleColorRed = '\x1b[41m';


function logConsoleHighlighted(str){
  /*
    função para exibir logs destacado
  */
  console.log(strColorConsoleYellow,str);  
  console.log(strColorConsoleReset,'');  
}


module.exports = {
  strColorConsoleReset,   
  strColorConsoleYellow,  
  strColorConsoleColorRed,

  logConsoleHighlighted
}