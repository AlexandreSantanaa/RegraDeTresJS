document.getElementById('calcular').addEventListener('click', function(){
    const num01 = parseFloat(document.getElementById('num01').value)
    const num02 = parseFloat(document.getElementById('num02').value)
    const num03 = parseFloat(document.getElementById('num03').value)


    if(isNaN(num01) || isNaN(num02) || isNaN(num03) || num01==0){
        document.getElementById('resultado').textContent="invalido"
        return
    }
    let result = (num03*num02)/num01

    let inteiro = (Number.isInteger(result))?document.getElementById('resultado').textContent = result:document.getElementById('resultado').textContent = result.toFixed(2)//.replace(".",",")
    
})