/*
Creamos un programa donde:
Opcion 1:
_ cargamos productos
_Si el producto cargado coincide en la "categoria" y el "nombre", permite actualizar el presio y la cantidad. Mostrando con un alert el producto modificado

Opcion 2:
_Realizamos un filtro para ver los productos con el precio minimo que elijamos.

Opcion 3:
_Buscamos un producto por el nombre

*/


/* Creamos la/las Clases a utilizar */
class Producto {
  constructor(nombre, precio, cant, categoria) {
    this.nombre = nombre;
    this.valorUnidad = parseFloat(precio);
    this.stock = cant === 0 || cant === "" ? 1 : parseInt(cant); //dejamos que por defecto ponga 1 si no obtenemos un resultado
    this.categ = categoria === "" || (categoria != "E" && categoria != "L" && categoria != "A")? "O": categoria; //Colocamos la validacion para evitar un valor no deseado
    this.activo=this.stock<1?false:true; // campo que sera utilizado en próximos envios para filtrar productos que queden sin stock
  }
  categoria=()=>{ //la funcion permite mostrar el nombre de la categoria dependiendo de la Letra que tenga en dicho campo
    if (this.categ==="E"){
      return "Electrodomesticos"
    } else if (this.categ==="A"){return"Almacen"} else if(this.categ==="L") {return"Libreria"} else {return "Otros"}

  }

  mostrar=()=>{ //mostramos en un alert los campos del producto
   return alert(`Nombre del Producto: ${this.nombre} \n Precio: ${this.valorUnidad} \n Categoria del Producto: ${this.categoria()} \n Stock: ${this.stock}`)
  }

}

const productos = [];
let categProducto;
let nombreProducto;
productos.push(
  new Producto("RADIO", 11500, 5, "E"),
  new Producto("YERBA MATE", 900, 10, "A"),
  new Producto("DICCIONARIO", 1110, 3, "L"),
  new Producto("MOTO",15000,3,"O"),
  new Producto("TV",8000,5,"E"),
  new Producto("CAFE",1500,5,"A")
);

let opcion = parseInt(prompt(`Eliga el numero de la tarea que desea realizar: \n 1 - Agregar un nuevo producto \n 2 - Realizar un filtro por precio de los productos cargados \n 3 - Buscar un producto por Nombre`)); //opcion para el menu

//Inicio SWITCH
switch (opcion) {
  case 1:
    let cant = parseInt(prompt("¿Cuántos productos va Cargar?"));
    if (cant >= 1) {
      for (let i = 0; i < cant; i++) {
        categProducto = prompt(
          `Ingrese la Categoria del producto ${i + 1} a cargar. \n Considere que tiene que poner solo una Letra donde:\n E: Electrónica\n A: Almacen\n L: Libreria\n O: Otros\n Si utilza mas caracteres o pone un valor que no esta identificado en el listado, quedara como categoría "O"`).toUpperCase();
        nombreProducto = prompt(`Ingrese el nombre del Producto ${i + 1} a cargar`).toUpperCase(); //aplicamos la funcion tuUppercase() para que el texto ingreso este en mayusculas
        const controlNombre = productos.find((item) => item.nombre === nombreProducto && item.categ === categProducto);

        if (controlNombre) {
          alert(
            "El nombre y categoria del producto que esta cargando ya existe"
          );

          productos.map((item, i) => {
            if (item.nombre === controlNombre.nombre && item.categ === controlNombre.categ) { //filtro los campos que necesito modificar

              productos[i] = new Producto(
                item.nombre,
                item.valorUnidad=parseFloat(prompt("Ingrese el nuevo precio del producto existente: ")), // permite al usuario actualizar el valor por unidad
                item.stock + parseInt(prompt("Ingrese la cantidad que sumara de éste producto existente")),
                item.categ);

                alert("Producto actualizado");
                productos[i].mostrar(); // MUESTRO EL producto modificado en el precio y cantidad
            }
          });
        
      

        } else {
          let valorProducto = prompt(
            `Ingrese el Precio que tendra el producto ${i + 1}`
          );
          let cantidadProduct = prompt(
            `Indique la cantidad que va cargar de éste producto ${i + 1}`
          );
          productos.push(
            new Producto(
              nombreProducto,
              valorProducto,
              cantidadProduct,
              categProducto
            )
          ); //agregamos los objetos en el array "productos"
        
          alert("Los productos que estan cargados ahora son los siguientes")
          for(let aux of productos){
            aux.mostrar();
          }
          console.log(productos); //Mostramos los productos que vamos cargando
        }
      }
    } else {
      alert("Elegiste no Cargar productos");
      console.log(productos); //Mostramos los productos que estan cargados en el array productos
    }

    break; //fin de la tarea 1

case 2:
  let valorFiltro=parseFloat(prompt("Ingrese el precio minimo con el que quiere filtrar los productos cargados"))

  const prodFiltados= productos.filter(item=>item.valorUnidad<=valorFiltro)
alert("LOS PRODUCTOS QUE CUMPLEN CON EL PRECIO MINIMO INDICADO SON:")
  for(  let aux of prodFiltados ){
   aux.mostrar();
  }
  
  break;// Fin de la tarea 2

  case 3:
    let nomEncontrar=prompt("Ingrese el Nombre del Producto que desea buscar").toUpperCase()
    const prodEncontrado= productos.find(item=>item.nombre===nomEncontrar);

if(prodEncontrado){
alert(`El Producto encontrado con el nombre ${nomEncontrar} es: `);
prodEncontrado.mostrar();
  } else{
    alert("NO ENCONTRAMOS EL PRODUCTO BUSCADO")
  }

    break;// fin de la tarea 3

  default:
    alert("No eligio ninguna de la opciones validas");
    break;
}
//FIN SWITCH
