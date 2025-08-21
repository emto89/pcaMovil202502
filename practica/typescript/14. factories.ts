const prefijar = ( prefijo: string ) => (mensaje: string) => `[ ${prefijo} ] ${mensaje}`;

const logInfo = prefijar('INFO'); // const logInfo = (mensaje: string) => `[ INFO ] ${mensaje}`;

const logError = prefijar('ERROR'); 

console.log(logInfo('Este es un mensaje informativo.'));

console.log(logError('Este es un mensaje de error.'));