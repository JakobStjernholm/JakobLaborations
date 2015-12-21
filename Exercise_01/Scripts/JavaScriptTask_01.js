
document.getElementById('convertKronor').addEventListener('click', convertTo, true);
function convertTo() {
    
    var swedishKronor = document.getElementById('currencyInput').value;
    document.getElementById('euroParagraph').innerHTML = swedishKronor * 0.092826;
    document.getElementById('dollarParagraph').innerHTML = swedishKronor * 0.11694;
}
