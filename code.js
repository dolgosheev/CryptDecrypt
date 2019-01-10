window.onload = function(){

var salt = '', crypt = '';
var
    tmp001 = 	document.getElementById('text').nextSibling,
    tmp002 =    document.getElementById('salt').nextSibling,
    salt   =    tmp002.innerHTML,
    tmp003 = 	document.getElementById('code').nextSibling,
    tmp004 = 	document.getElementById('decode').nextSibling,
    tmp005 = 	document.getElementById('cmd'),
    tmp006 = 	document.getElementById('crypt').nextSibling,
    crypt  =    tmp006.innerHTML,

    memory = [];

TextDiv = tmp001.innerHTML;

function cryptoX(inpval){
arr = TextDiv.split('');
arrX = [];
arr.forEach(function(item,val){
elemX = ( arr[val+1] !== undefined )?( arr[val+1] ):( arr.shift() )
    arrX.push(item + elemX);
});
inpval.innerHTML= arrX.join(salt);
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
                    	TextDiv = this.value.substring(9);
                        tmp001.innerHTML = TextDiv;

                        tmp001.nextSibling.style.display = 'inline';
                        tmp001.style.display = 'inline';
                        tmp001.previousSibling.style.display = 'inline';

                        tmp006.nextSibling.style.display = 'none';
                        tmp006.style.display = 'none';
                        tmp006.previousSibling.style.display = 'none';

                        tmp003.nextSibling.style.display = 'inline';
                        tmp003.style.display = 'inline';
                        tmp003.previousSibling.style.display = 'inline';

                        tmp004.nextSibling.style.display = 'none';
                        tmp004.style.display = 'none';
                        tmp004.previousSibling.style.display = 'none';

                        cryptoX(tmp003);
                    break;

                    case 'salt':
                    	salt = this.value.substring(9);
                        tmp002.innerHTML = salt;
                    break;

                    case 'crypt':
                    	crypt = this.value.substring(10);
                        tmp006.innerHTML = crypt;

                        tmp006.nextSibling.style.display = 'inline';
                        tmp006.style.display = 'inline';
                        tmp006.previousSibling.style.display = 'inline';

                        tmp001.nextSibling.style.display = 'none';
                        tmp001.style.display = 'none';
                        tmp001.previousSibling.style.display = 'none';

                        tmp004.nextSibling.style.display = 'inline';
                        tmp004.style.display = 'inline';
                        tmp004.previousSibling.style.display = 'inline';

                        tmp003.nextSibling.style.display = 'none';
                        tmp003.style.display = 'none';
                        tmp003.previousSibling.style.display = 'none';

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