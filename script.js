let screen = document.querySelector('#resultado');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch(e){
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);      
        
    }
}