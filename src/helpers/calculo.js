const fs = require ('fs')
var pdf = require('html-pdf');
var _ = require('lodash');
var colors = require('colors');
////////////PARA PDF
let PDFDocument = require('pdfkit');

let doc = new PDFDocument;
//FIN PARA PDF


const crearArchivo = async(tiempo = 0, sueldo =0, nombre, apellido, listar=false) => {
    // if(base <= 5){
        try {
            let bonificacion = 250;
            let Abonifi = 250 * 12;
            let Tdevengado = sueldo + bonificacion;
            let Tingresos = (sueldo * 12) + Abonifi + sueldo + sueldo;
            
            let iggs = (sueldo * 12) * (0.0484);
            let Miggs = (iggs / 12);
            var Refectiva = (Tingresos - iggs)  - (sueldo * 2)
            let Aisr = (Refectiva * 0.05)
            let isr = (Aisr / 12)
            let Tdeduccion = isr + Miggs
            let liquido = Tdevengado - Tdeduccion
            let tiempos =(tiempo * 12);



            let salida = '';
            
            for (let i =1; i <= tiempos; i++){
                salida += `  Mes ${i}                    Q${sueldo}                           Q${Aisr}                                Q${isr}\n`;
                                                                       
            }
            if (listar){
    
                console.log('\n***********************************************************');
                console.log(' Calculo del ISR del señor:'.red, nombre.blue,'',apellido.blue);
                console.log('***********************************************************');
                console.log(salida);
                // _.times(tiempo, () => {
                //     console.log('Cuota cada mes, es de', cuotamen);
                // })
            }
   
            // fs.writeFileSync(`tabla-${base}.txt`, salida);
    
            // return `tabla-${base}.txt`;



                        // CREACION DE ARCHIVO PDF.
            // doc.pipe(fs.createWriteStream('example5.pdf'));
            doc.pipe(fs.createWriteStream(`${nombre + apellido}.pdf`));
            
            // Adding functionality
            doc

            .fontSize(27)//tamaño de letra
            .text(`COMPROBANTE\n\n`, 170, 20)//texto y 150 = x, 20 = y
            .fontSize(15)
            .text('Documento generado por el sistema\n', 160,50) 

            .fontSize(11)
            //.text(`La cantidad prestada es de: Q${cantidad} por ${base} año(s).`, 20, 60);//y=--- x=|
            .text(`DEVENGADO                                                            DEDUCCIONES`, 120, 80)

            
            .text(`DESCRIPCION                                  MONTO             DESCRIPCION                                           MONTO`, 30, 105)  
            .text(`Saladrio Mensual                                 Q${sueldo}              Cuota IGSS Mensual                                  Q${Miggs}`, 30, 120)
            .text(`Bonificacion Decreto 37-2001              Q${bonificacion}              Cuota ISR Mensual                                     Q${isr}`, 30, 135)
            .text(`Total devengado                                   Q${Tdevengado}              Total Deducciones                                     Q${Tdeduccion}`, 30, 160)
            .text(`Liquido a Recibir Q${liquido}`, 30, 180)
            .text(`Empleado:${nombre}  ${apellido}      F.______________________________`, 30, 230)
            
            .fontSize(12)
            .text('CALCULO DE ISR PROYECTADO\n', 180,255) 

                        
            .fontSize(10)
            .text(`Fecha`, 110, 275)
            .text(`Sueldo`, 200, 275 ) 
            .text(`ISR Anual`, 300, 275)
            .text(`ISR Mensual`, 400, 275)
            .text(`${salida}\n`, 110, 290);

            doc
            .scale(0.6)
            .translate(470, -380)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();
            
            doc.end();

            
        } catch (err) {
    
            throw err
    
        }
}

module.exports = {
    crearArchivo
}