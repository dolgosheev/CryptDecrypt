window.onload = function(){

var salt = '', crypt = '';
var
    tmp001 = 	document.getElementsByTagName('div')[0],
    tmp002 =    document.getElementById('salt'),
    salt   =    tmp002.innerHTML,
    tmp003 = 	document.getElementById('code'),
    tmp004 = 	document.getElementById('decode'),
    tmp005 = 	document.getElementById('cmd'),
    tmp006 = 	document.getElementById('crypt').innerHTML = crypt,

    memory = [];

TextDiv = tmp001.innerHTML;

function cryptoX(){
arr = TextDiv.split(' ');
arrX = [];
arr.forEach(function(item,val){
elemX = ( arr[val+1] !== undefined )?( arr[val+1] ):( arr.shift() )
    arrX.push(item + elemX);
});
tmp003.innerHTML= arrX.join(salt);
}

//setInterval(function(){(tmp004.innerHTML == '')?(tmp004.innerHTML='|'):(tmp004.innerHTML='');},500);

tmp005.focus();


tmp005.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {

        switch(tmp005.value){
        	case 'help' :
            case 'h' :
            case '-h' :
            case '?' :
        		console.log('set text | salt | crypt \'...sometext...\' ');
        	break;

            default:
            	switch(this.value.split(" ")[0]){
                case 'set':
                	switch(this.value.split(" ")[1]){
                    case 'text':
                    	TextDiv = this.value.split(" ")[2];
                        document.getElementById('text').innerHTML = TextDiv;
                    break;

                    case 'salt':
                    	salt = this.value.split(" ")[2];
                        document.getElementById('salt').innerHTML = salt;
                    break;

                    case 'crypt':
                    	crypt = this.value.split(" ")[2];
                        document.getElementById('crypt').innerHTML = crypt;
                    break;

                    default:
                		console.log('whats set ?');
                	break;
                    }
                break;
                default:
                	console.log('break');
                break;
                }
            break;
        }
    memory.push(this.value);
    this.value = '';
    }


    if (event.keyCode === 38){
    	tmp005.value = memory.pop();
    }

});

}