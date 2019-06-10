var tasks = ['tasks1','tasks2','tasks3','tasks4'];

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) { 
  var arg = text.split(' ');
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  else if(arg[0] === 'hello' || text === 'hello\n'){
    hello(arg);
  }
  else if(text==="help\n"){
    help();
  }
  else if(text==="list\n"){
    myFuncton(tasks);
  }
  else{
    unknownCommand(text);
  }
  
}





/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(param){
  console.log(param.join(' ').replace("\n","!"))
}
/* if yoy write help you can see all commands*/
function help (){
  console.log("you can now add another word with hello and you can now add ! \n Quitting now, goodbye! \n unknown command \n Mohammad Barakat ")
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')   
  process.exit();
}

// The following line starts the application
startApp("Mohammad Barakat");
function myFuncton(mbArray){
for(var i = 0;i<mbArray.length;i++){
console.log(i+1+" "+ mbArray[i]);
}
}