

export class GetActualDate {



  
    public static Format( date: string){
    //     const currentDate = new Date();
    //    const day = String(currentDate.getDate()).padStart(2, '0');
    //    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    //    const year = currentDate.getFullYear();
    //    const hours = String(currentDate.getHours()).padStart(2, '0');
    //    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    //    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
     
    //    let formatedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    const fecha = new Date( date );

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0, por lo que se suma 1
    const año = fecha.getFullYear();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    const fechaFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

       return fechaFormateada;
    }
}