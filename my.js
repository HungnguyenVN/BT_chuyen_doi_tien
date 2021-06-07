function change(){
    let amount = document.getElementById('input').value;
    let fromCurrent = document.getElementById('fromCurrent').value;
    let toCurrent = document.getElementById('toCurrent').value;
    Result = amount * toCurrent / fromCurrent;
    document.getElementById('result').innerHTML = 'Resutl: '+ Result;
}