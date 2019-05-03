if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log('Serviço registrado')
        })
        .catch(function(err) {
            console.log("Falhou!", err)
    });
    })
}


navigator.serviceWorker.register('sw.js')
.then(function(){
    console.log("Yay!") })
.catch(function(){
    console.log("Falhou!");
})