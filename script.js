function tabuada(){
    let number = document.querySelector('input#txtab')
    let msg = document.querySelector('textarea#msg')

    if (number.value.length === 0){
        alert('Por favor, digite um número!')
    }else{
        let n = Number(number.value)
        let cont = 0
        msg.innerHTML = ""
        while (cont<11){
           msg.innerHTML +=`${n} X ${cont} = ${n*cont}` +  "\n"
           cont++
         }
        }
}