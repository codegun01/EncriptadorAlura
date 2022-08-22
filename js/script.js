const text1 = document.getElementById('text1');
const text2 = document.getElementById('texto2');
const text3 = document.getElementById('texto3');






function encriptar(){
    var pal = text1.value;
    var array = [];
    if(text1.value != text1.value.toUpperCase() && text1.value != Number() && text1.value != ''){
        for(var i = 0; i < pal.length; i++){
            if(pal[i] == 'e'){
                array[i] = 'enter';
    
            }else if (pal[i] == 'i'){
                array[i] = 'imes';
    
            }else if(pal[i] == 'a'){
                array[i] = 'ai';
    
            }else if(pal[i] == 'o'){
                array[i] = 'ober';
    
            }else if(pal[i] == 'u'){
                array[i] = 'ufat';
    
            }else{
                array[i] = pal[i];
            }
        }
    }else{

        document.getElementById('error').style.display = 'block';
        text1.value = '';
        setTimeout( f = () => {
            document.getElementById('error').style.display = 'none';
        }, 2000);

    
    

    }

    textoEncriptado = array.join('');
    text3.value = textoEncriptado;
    text1.value = '';
   
}


function desincriptar(){
   let text  = text3.value;
   let encriptado = text.replace(/enter/img, 'e');

   encriptado = encriptado.replace(/ober/img, 'o');
   encriptado = encriptado.replace(/imes/img, 'i');
   encriptado = encriptado.replace(/ai/img, 'a');
   encriptado = encriptado.replace(/ufat/img, 'u');

    text3.value = encriptado;
   
}
