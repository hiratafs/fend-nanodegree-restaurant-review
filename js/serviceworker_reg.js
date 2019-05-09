if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(function(reg){
        console.log("Tudo Ok!", reg) })
    .catch(function(err){
        console.log("Falhou!", err);
    })
}
