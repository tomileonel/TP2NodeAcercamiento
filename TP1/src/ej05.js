let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(url) {
    const myURL = new URL(url);

    const host = myURL.protocol + '//' + myURL.host;
    const pathname = myURL.pathname;

    const parametros = {};
    myURL.searchParams.forEach((value, key) => {
        parametros[key] = value;
    });

    const objetoResultado = {
        host: host,
        pathname: pathname,
        parametros: parametros
    };

    return objetoResultado;
}


