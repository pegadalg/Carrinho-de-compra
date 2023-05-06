var Tot_Corta = 0
var Tot_Jaqueta = 0
var Tot_Calca = 0
var Tot_Bermuda = 0
var Tot_Calcao = 0



function cortavento() 
{
        Tot_Corta = (document.getElementById("Corta").value) * 700
        

    if ((document.getElementById("Corta").value > 0) )
    {
        document.getElementById("cCorta").style.display = "flex"
      
        
    }
    else 
        document.getElementById("cCorta").style.display = "none"
       

}
function Molet() 
{
    Tot_Jaqueta = (document.getElementById("Jaqueta").value) * 600
    
    if (document.getElementById("Jaqueta").value > 0) {
        document.getElementById("cJaqueta").style.display = "flex"
        
        
    }
    else 
        document.getElementById("cJaqueta").style.display = "none"
      
}
function Calc() 
{   
    Tot_Calca = (document.getElementById("Calca").value) * 400

    if (document.getElementById("Calca").value > 0) {
        document.getElementById("cCalca").style.display = "flex"
      
        
        
    }
    else 
        document.getElementById("cCalca").style.display = "none"
   
}
function Berm() 
{
    Tot_Bermuda = (document.getElementById("Bermuda").value) * 350
        
    if (document.getElementById("Bermuda").value > 0) {
        document.getElementById("cBermuda").style.display = "flex"
        
        
    }
    else 
        document.getElementById("cBermuda").style.display = "none"
        
}
function Cauc() 
{
    Tot_Calcao = (document.getElementById("Calcao").value) * 300
    
    if (document.getElementById("Calcao").value > 0) {
        document.getElementById("cCalcao").style.display = "flex"
        
        
    }
    else 
        document.getElementById("cCalcao").style.display = "none"
       
}

let Preco_Total = 0

setInterval(function Pt()
{
    Preco_Total = Tot_Calcao + Tot_Bermuda + Tot_Calca + Tot_Jaqueta + Tot_Corta + Fretado
    document.getElementById("ValorToti").innerHTML = "Valor Total: R$ " + Preco_Total
}, 200)

setInterval(function xCort()
{
    document.getElementById("cCorta").innerHTML = "Jaqueta Corta Vento x " + document.getElementById("Corta").value + " / Valor Parcial: R$ " + Tot_Corta
}, 200)
setInterval(function xJaquet()
{
    document.getElementById("cJaqueta").innerHTML = "Jaqueta Moletom x " + document.getElementById("Jaqueta").value + " / Valor Parcial: R$ " + Tot_Jaqueta
}, 200)
setInterval(function xCalc()
{
    document.getElementById("cCalca").innerHTML = "Calça Moletom x " + document.getElementById("Calca").value + " / Valor Parcial: R$ " + Tot_Calca
}, 200)
setInterval(function xBerm()
{
    document.getElementById("cBermuda").innerHTML = "Bermuda Moletom x " + document.getElementById("Bermuda").value + " / Valor Parcial: R$ " + Tot_Bermuda
}, 200)
setInterval(function xCauc()
{
    document.getElementById("cCalcao").innerHTML = "Calção Basquete x " + document.getElementById("Calcao").value + " / Valor Parcial: R$ " + Tot_Calcao
}, 200)

function mostraFrenteCorta(img)   
{
    img.src="Imagens/rppng/Corta_VentoPRIN-removebg-preview.png" // Corta
}

function mostraTrasCorta(img)
{
    img.src="Imagens/rppng/Corta_VentoCOSTA-removebg-preview.png" // Corta
}
function mostraFrenteJaqueta(img)
{
    img.src="Imagens/rppng/Moletom_jaquetaPRIN-removebg-preview.png" // Jaquete
}

function mostraTrasJaqueta(img)
{
    img.src="Imagens/rppng/Moletom_jaquetaCOSTA-removebg-preview.png" // Jaqueta
}
function mostraFrenteCalca(img)
{
    img.src="Imagens/rppng/Calca_moletomPRIN-removebg-preview.png" // Calca
}

function mostraTrasCalca(img)
{
    img.src="Imagens/rppng/Calca_moletomCOSTA-removebg-preview.png" // Calca
}
function mostraFrenteBermuda(img)
{
    img.src="Imagens/rppng/Bermuda_moletomPRIN-removebg-preview.png" // Bermuda
}

function mostraTrasBermuda(img)
{
    img.src="Imagens/rppng/Bermuda_moletomCOSTA-removebg-preview.png" //Bermuda
}
function mostraFrenteCalcao(img)
{ 
    img.src="Imagens/rppng/Calcao_basquetePRIN-removebg-preview.png" // Calca
}

function mostraTrasCalcao(img)
{
    img.src="Imagens/rppng/Calcao_basqueteCOSTA-removebg-preview.png" // Calca
}




// Finalizar *****************************************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function finalizar()
{
    (document.getElementById("prods").style.display="flex")

    document.getElementById("prods").style.display="none"

    document.getElementById("fimcompra").style.display="flex"

    document.getElementById("VCarrinho").style.display="flex"

    document.getElementById("Fcarrinho").style.display="none"
    
}


function voltar(){
    (document.getElementById("prods").style.display="none")
   
    document.getElementById("prods").style.display="flex"

    document.getElementById("fimcompra").style.display="none"

    document.getElementById("VCarrinho").style.display="none"

    document.getElementById("Fcarrinho").style.display="flex"

}

setInterval(function xPt()
{
    Preco_Total = Tot_Calcao + Tot_Bermuda + Tot_Calca + Tot_Jaqueta + Tot_Corta + Fretado
    document.getElementById("ccValorToti").innerHTML = "Valor Total: R$ " + Preco_Total
}, 200)

setInterval(function xxCort()
{
    document.getElementById("ccCorta").innerHTML = "Jaqueta Corta Vento x " + document.getElementById("Corta").value + " / Valor Parcial: R$ " + Tot_Corta
}, 200)
setInterval(function xxJaquet()
{
    document.getElementById("ccJaqueta").innerHTML = "Jaqueta Moletom x " + document.getElementById("Jaqueta").value + " / Valor Parcial: R$ " + Tot_Jaqueta
}, 200)
setInterval(function xxCalc()
{
    document.getElementById("ccCalca").innerHTML = "Calça Moletom x " + document.getElementById("Calca").value + " / Valor Parcial: R$ " + Tot_Calca
}, 200)
setInterval(function xxBerm()
{
    document.getElementById("ccBermuda").innerHTML = "Bermuda Moletom x " + document.getElementById("Bermuda").value + " / Valor Parcial: R$ " + Tot_Bermuda
}, 200)
setInterval(function xxCauc()
{
    document.getElementById("ccCalcao").innerHTML = "Calção Basquete x " + document.getElementById("Calcao").value + " / Valor Parcial: R$ " + Tot_Calcao
}, 200)


var Fretado = 0;

function calcularFrete() {

    erCEP = /^[0-9]{5}-[0-9]{3}$/
    
    if(document.getElementById("CEP").value == "" || !document.getElementById("CEP").value.match(erCEP))
    {
        alert("O formato do CEP está incorreto");
        document.getElementById("fretado").checked = false

        return false
    }   

    if (document.getElementById("fretado").checked == true) {
        Fretado = 100;
        document.getElementById("botfim").style.display="flex"
    }

    else     
        Fretado = 0;  
        
     
    
    
    }


   


function minusculo(xnome){
    return xnome.toUpperCase();
   
}
function cartao() {
    erVisa =  /^4[0-9]{12,15}$/
    erMastercard =  /^5[1-5]{1}[0-9]{14}$/
    erAmex =  /^3(4|7){1}[0-9]{13}$/

    if(document.getElementById("xnumero").value.match(erVisa)){
        document.getElementById("cartivisa").style.display="flex"
        document.getElementById("cartimaster").style.display="none"
        document.getElementById("cartiamex").style.display="none"
        return true;
    } 
    if(document.getElementById("xnumero").value.match(erMastercard)){
        document.getElementById("cartimaster").style.display="flex"
        document.getElementById("cartiamex").style.display="none"
        document.getElementById("cartivisa").style.display="none"
        return true;
    } 
    if(document.getElementById("xnumero").value.match(erAmex)){
        document.getElementById("cartiamex").style.display="flex"
        document.getElementById("cartivisa").style.display="none"
        document.getElementById("cartimaster").style.display="none"
        return true;
    } 
    else 
        alert("Cartão inválido")
        document.getElementById("cartiamex").style.display="none"
        document.getElementById("cartivisa").style.display="none"
        document.getElementById("cartimaster").style.display="none"
        return false;
}

function pix(){
    document.getElementById("pix").style.display="flex"
}




// LOGING    *****************************************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function emailsenha(form)
{
    erEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;

    erSenha = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/;


    if(form.usuario.value == "" || !form.usuario.value.match(erEmail))
    {
    alert("Preencha o campo E-MAIL corretamente");
    return false;
    }

    if(form.senha.value == "" || !form.senha.value.match(erSenha))
    {
    alert("O formato da senha está incorreto");
    return false;
    }
    if(form.usuario.value != "Queremos10@Lu.com.br"){
    alert("Usuário ou senha incorretos!");
    return false;

    }
    if(form.senha.value != "Cademeu10"){
    alert("Usuário ou senha incorretos!");
    return false;
    }
}

function cart(habilita)
{
    if (habilita == "1") {
        document.getElementById("formis").style.display="flex" ;
        document.getElementById("pix").style.display="none"
        document.getElementById("bol").style.display="none"
      } else if (habilita == "2") {
        
        document.getElementById("formis").style.display="none" ;
        document.getElementById("pix").style.display="none"
        document.getElementById("bol").style.display="flex"
      } else if (habilita == "3") {
        
        document.getElementById("formis").style.display="none" ;
        document.getElementById("pix").style.display="flex"
        document.getElementById("bol").style.display="none"
      }
}

function comprou() {

    alert("Compra realizada com sucesso!")
      
  
}