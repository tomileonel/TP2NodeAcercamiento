let miUrl;
let miObjeto;
miUrl = null;
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(url) {
    try {
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
    } catch (error) {
        console.error('Error al parsear la URL:', error);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}
