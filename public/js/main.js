var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 100,
    height : 100
});

(function IIFE() {
    fetch('http://192.168.56.1:8080/router_object.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        document.querySelector("#title").innerHTML = myJson.title;
        qrcode.makeCode(myJson.IMEI);
        JsBarcode("#barcode", myJson.code);
    });
})();

function downloadPdf() {
    // Default export is a4 paper, portrait, using milimeters for units
    var doc = new jsPDF()
    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
}
