const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Pizzas que tengan ID impar:");
pizzas.filter(pizza=>pizza.id%2!==0)
  .forEach(pizza=>console.log(`-${pizza.nombre} (ID:${pizza.id})`));

const OfertaEnPizza = pizzas.some(pizza => pizza.precio<600);
if (OfertaEnPizza){
  console.log("Tenemos pizzas a menos de $600!!");
}else{
  console.log("Desafortunadamente no tenemos pizzas a menos de $600");
}

console.log("Pizzas y sus precios:");
pizzas.forEach(pizza=>console.log(`${pizza.nombre}:$${pizza.precio}`));

console.log("Los ingredientes en nuestras pizzas son:");
pizzas.forEach(pizza=>{
  console.log(`La ${pizza.nombre} lleva:`);
  pizza.ingredientes.forEach(ingrediente=>console.log(`-${ingrediente}`));
});