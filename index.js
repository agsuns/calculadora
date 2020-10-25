window.onload = function() {
    const buttonsContainer = document.querySelector(".calculator");
    let resultado = document.querySelector("#result");
    let entry1 = false, operator = "", var1 = 0;

    function handleOp(op, var1, var2) {
        if (op === "+") return var1 + var2;
        else if (op === "-") return var1 - var2;
        else if (op === "x") return var1 * var2;
        else if (op === "÷") return var1 / var2;   
    }

    // adiciona evento delegado ao container "calculator", o que propaga para todos os botões contidos nele
    buttonsContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains('but') ) {        
        
        // verifica se o botão clicado é um número
        if (e.target.classList.contains('number')) {
            if (resultado.innerText === "") {
                resultado.innerText = e.target.innerText;
            } else {
                resultado.innerText += e.target.innerText;
            }
        // se não for um número, verifica se é um operador
        } else if (e.target.classList.contains('operator')) {
            //verifica se existe algum conteúdo já digitado na tela de resultado
            if (resultado.innerText != "") {
                var1 = parseFloat(resultado.innerText);     
                entry1 = true;
                resultado.innerText = "";           
                operator = e.target.innerText;
            }
        } else if (e.target.innerText === "=") {
            if (entry1 && resultado.innerText != "") {                
                resultado.innerText = handleOp(operator, parseFloat(var1), parseFloat(resultado.innerText));
                var1 = 0;
                entry1 = false;
                operator = ""
            }
        } else if (e.target.innerText === "C") {
            resultado.innerText = "";
            var1 = 0;
            entry1 = 0;
            operator = "";

        } else if (e.target.innerText === "←") {
            if (resultado.innerText != "") {
                resultado.innerText = resultado.innerText.slice(0, -1);
            }
        }
    }
});
}
