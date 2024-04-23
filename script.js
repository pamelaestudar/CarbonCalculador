document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCarbonFootprint();
});

document.getElementById('startVoice').addEventListener('click', function(){
    startVoiceCommand();
});

function startVoiceCommand(){
    if (annyang) {
        annyang.setLanguage('pt-BR');
        var commands = {
             'calcular (pegada) (de) (carbono)': function(){
                document.getElementById('carbonForm').dispatchEvent(new Event('submit'));
             }, 
             '*texto': teste()  
        }
        annyang.addCommands(commands);
        annyang.start();
    }else {
        alert('O reconhecimento de voz não é suportado neste navegador.');
    }
};

function calculateCarbonFootprint() {
    var fuelAmount = parseFloat(document.getElementById('fuel').value);
    var distance = parseFloat(document.getElementById('distance').value);

    var fuelEmissionFactor = 2.68;
    var distanceEmission = 0.12;

    var carbonFootprint = (fuelAmount * fuelEmissionFactor) + (distance * distanceEmission);
    document.getElementById('result').innerHTML = "A Pegada de Carbono " + carbonFootprint.toFixed(2) + " kg CO2";

 }

 function teste(texto){
    console.log (texto);
    annyang
 }

