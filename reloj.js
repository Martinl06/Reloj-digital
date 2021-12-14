//función que sirve para actualizar el reloj todo el tiempo y mostrar la hora actual//
  (function () {
     let actualizarHora = function() {
            let fecha = new Date(),
                horas = fecha.getHours(),
                minutos = fecha.getMinutes(),
                segundos = fecha.getSeconds(),
                ampm ,
                dia = fecha.getDate(),
                diaSemana = fecha.getDay(),
                mes = fecha.getMonth(),
                year = fecha.getFullYear();
//variables que nos traen la info pero todavia no se muestran en pantalla//
     

     let pHoras = document.getElementById('horas'),
         pMinutos = document.getElementById('minutos'),
         pSegundos = document.getElementById('segundos'),
         pAMPM = document.getElementById('ampm'),
         pDiaSemana = document.getElementById('diaSemana'),
         pDia = document.getElementById('dia'),
         pMes = document.getElementById('mes'),
         pYear = document.getElementById('year');
        //Accedemos a su ubicacion en HTML y guardamos su valor en una variable//

     let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
         pDiaSemana.textContent = semana[diaSemana];
         pDia.textContent= dia;
         //Lista en ese orden//

     let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    
         pMes.textContent= meses[mes];
         pYear.textContent= year;


        if (horas >= 12){
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (horas == 0){
            horas = 12;
        }
         pHoras.textContent= horas;
         pAMPM.textContent= ampm;

        if (minutos < 10){minutos = "0" + minutos };
        if (segundos < 10){segundos = "0" + segundos};

         pMinutos.textContent= minutos;
         pSegundos.textContent= segundos;
        
          
        };


        actualizarHora();
            let intervalo = setInterval(actualizarHora , 1000);
   }())
