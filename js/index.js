/* Creamos las Clases a utilizar */



class Producto {
    constructor(nombre, precio, cant,categoria) {
      this.nombre = nombre; 
      this.valorUnidad = parseFloat(precio);
      this.stock = cant === 0 || cant === "" ? 1 : parseInt(cant); //dejamos que por defecto ponga 1 si no obtenemos un resultado
      this.categ= categoria===""||categoria!="E"&&categoria!="L"&&categoria!="A"?"O":categoria; //Colocamos la validacion para evitar un valor no deseado
    }
   
  }
  


  const productos=[];
  let categProducto;
  let nombreProducto;
  productos.push(new Producto("RADIO",1500,5,"E"),new Producto("YERBA MATE",150,10,"A"),new Producto("DICCIONARIO",110,3,"L"))


  let cant=parseInt(prompt("¿Cuántos productos va Cargar?"));
if(cant>=1){
  for(let i=0;i<cant;i++){
    categProducto = prompt(`Ingrese la Categoria del producto ${i+1} a cargar. \n Considere que tiene que poner solo una Letra donde:\n E: Electrónica\n A: Almacen\n L: Libreria\n O: Otros\n Si utilza mas caracteres o pone un valor que no esta identificado en el listado, quedara como categoría "O"`).toUpperCase();
    nombreProducto = prompt(`Ingrese el nombre del Producto ${i+1} a cargar`).toUpperCase(); //aplicamos la funcion tuUppercase() para que el texto ingreso este en mayusculas
    const controlNombre=productos.find(item=>item.nombre===nombreProducto&&item.categ===categProducto)
    if(controlNombre){
      alert("El nombre y categoria del producto que esta cargando ya existe")
  
      
 productos.map((item,i)=>{
   if(item.nombre===controlNombre.nombre&&item.categ===controlNombre.categ){ //filtro los campos que necesito modificar

item.valorUnidad=parseFloat(prompt("Ingrese el presio por unidad: ")); // permite al usuario actualizar el valor por unidad

    productos[i]=(new Producto(item.nombre,item.valorUnidad,item.stock + parseInt(prompt("Ingrese la cantidad que sumara de éste producto")),item.categ))
  
 }})

console.log(productos) //muestro el array productos

      
    }else{

      let valorProducto = prompt(`Ingrese el Precio que tendra el producto ${i+1}`);
      let cantidadProduct = prompt(`Indique la cantidad que va cargar de éste producto ${i+1}`);
      productos.push(new Producto(nombreProducto, valorProducto, cantidadProduct,categProducto)); //agregamos los objetos en el array "productos"
      console.log(productos); //Mostramos los productos que vamos cargando
    }


  }
} else{
  alert("Elegiste no Cargar productos")
  console.log(productos); //Mostramos los productos que estan cargados en el array productos
}


  

  
