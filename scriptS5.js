function calcularbonificacion(){
    let dato1 = +document.getElementById("sueldobasico").value;
    let dato2 = document.getElementById("bonificacion").value;
    let resultado1 = dato1 * dato2 
    let resultado2 = resultado1 + dato1 
    let resultadototal = resultado2 * 0.8
    alert(`La bonificacion por años y servicios y el sueldo neto total del 80% es ${resultadototal}`)
  }
  function enviar(){
    let name = document.getElementById("nombre").value;
    let fullname = document.getElementById("apellido").value;
    let category = document.getElementById("categoria").value;
    let service = document.getElementById("añoservicio").value;
    let sueldobasic = document.getElementById("sueldobasico").value;
  
   
    
    alert(`${name} ${fullname} de Categoría ${category} de ${service} años de servicio, el sueldo básico es de ${sueldobasic} , la bonificación para años y servicios es de ${resultado1} y el sueldo neto del 80% del sueldo bruto total es de ${resultadototal}`)
  }