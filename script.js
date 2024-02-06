
function post(){
  fetch("http://localhost:3333/hist", {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
    "resultado" : document.querySelector('#input').value
    })
}).then((res)=>{
  const hist = document.querySelector("#hist")
  hist.innerHTML = ""
    fetch('http://localhost:3333/calc').then((resposta)=>{
        resposta.json().then((data)=>{
          console.log(data)
            data.map((item)=>{
                const div = document.createElement('div')
                div.innerText = item
                hist.appendChild(div)
            })
        })
    })
})
}

    var operand1 = '';
    var operator = '';
    var operand2 = '';

    function clearResult() {
        document.getElementById('input').value = '';
        operand1 = '';
        operator = '';
        operand2 = '';
    }

    function appendToResult(value) {
        document.getElementById('input').value += value;
    }

    function setOperator(op) {
        if (operand1 === '') {
            operand1 = document.getElementById('input').value;
            operator = op;
            document.getElementById('input').value = '';
        }
    }

    async function calculate() {
        operand2 = document.getElementById('input').value;
        var result;
        switch (operator) {
            case '+':
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                result = parseFloat(operand1) / parseFloat(operand2);
                break;
            default:
                result = 'Error';
        }
        document.getElementById('input').value = result;
        await post()
        operand1 = '';
        operator = '';
        operand2 = '';
    }