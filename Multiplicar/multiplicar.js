const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject('La base introducida no es un numero')
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`.red)
        }
    })

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base introducida no es un numero');
            return
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }
        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);


        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}