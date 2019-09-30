var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 100,
    height : 100
});

// (function IIFE() {
//     fetch('router_object.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(myJson);
//         document.querySelector("#title").innerHTML = myJson.title;
//         document.querySelector("#copyright").innerHTML = myJson.copyright;
//         qrcode.makeCode(myJson.IMEI);
//         JsBarcode("#barcode", myJson.code);
//     });
// })();

function do_buisness(myJson)
{
  document.querySelector("#title").innerHTML = myJson.title;
  document.querySelector("#copyright").innerHTML = myJson.copyright;
  qrcode.makeCode(myJson.IMEI);
  JsBarcode("#barcode", myJson.code);
}
