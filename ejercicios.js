const productos = require('./productos');
const precios = require('./precios');




function ejercicio1() {
    const a = ["foo", "alfa", "ram"];

    let array = a.map(function(options){
        return options[0]
        })
      
      console.log (array.join(""))
}
 
function ejercicio2() {
    const b = ["hola", "mundo", "desde", "vscode"];

    console.log(b[0] + ' - ' + b[1] + ',', b[2], b[3] + '.');
}

function ejercicio3(){
const nombres = [
    {nombre:"foo"},
    {nombre:"bar"},
    {nombre:"qux"},
    {nombre:"ram"}
   ];

   //map
   nombres.map((element, index) => {
    console.log((index + 1) + '-', 'nombre:', element["nombre"]);
}); 
console.log(("=").repeat(30));
   //for 
    for (i=0;i<nombres.length;i++){
        console.log((i + 1) + '-', 'nombre:', nombres[i]["nombre"]);
    };
    //while
    console.log(("=").repeat(30));
    let n = 0;
    let l = nombres.length;
    while (n<l){
        console.log((n + 1) + '-', 'nombre:', nombres[n]["nombre"]);
        n++;
    };

};

function ejercicio4(){
    let arrayProducts = [];

    productos.map((productos, index) => {
        let p = {};
        p[productos] = precios[index];
        arrayProducts.push(p);
    });

    console.log(arrayProducts);
};

function ejercicio5(){
    
    const c = [
        {pies:"pies"},
        [["cabeza"]],
        function(){
         return "cuerpo"
        }
      ];

      c[0] = "cabeza"
      c[1] = "cuerpo"
      c[2] = "pies"
      
      for (var  co = 0; co <= 2; co++)
      console.log (c[co])
      

};

function ejercicio6(){
    const menu = ["burguer", "papas", "gaseosa", "helado"];
    console.log(" MENU - MENU - MENU")
    menu.push("agua");
    menu.map (function(e7 , i){
        console.log (`${i + 1} ${e7}`, "\n",`${"-".repeat(19)}`  )
    });
}


ejercicio1();
console.log(("-").repeat(50));
ejercicio2();
console.log(("-").repeat(50));
ejercicio3();
console.log(("-").repeat(50));
ejercicio4();
console.log(("-").repeat(50));
ejercicio5();
console.log(("-").repeat(50));
ejercicio6();