import { View } from "react-native";

const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "X-Surpresa",
        price: 24.9,
        description:
          "Os ingredientes desse hambúrguer mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/1.jpg"),
        thumbnail: require("../../assets/products/thumbnail/1.jpg"),
        ingredients: [
          "Pão brioche;",
          "2x carnes ou frango",
          "Queijo ou cheddar ;",
          "Os outros ingredientes são surpresa!",
          "Molho da casa;",
        ],
      },
    ],
  },

  ///hamburger

  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "X-Tudo",
        price: 34.9,
        description:
          "Saboreie a grandiosidade do Hamburger X-Tudo: uma explosão de sabores em um só lugar...",
        cover: require("../../assets/products/cover/2.jpg"),
        thumbnail: require("../../assets/products/thumbnail/2.jpg"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "2x file de frango  40g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },

      {
        id: "3",
        title: "X-Thunder",
        price: 32.7,
        description:
          "Desperte seus sentidos com o Hamburger X-Thunder: uma tempestade de sabores intensos...",
        cover: require("../../assets/products/cover/3.jpg"),
        thumbnail: require("../../assets/products/thumbnail/3.jpg"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },

      {
        id: "4",
        title: "X-Rain",
        price: 29.9,
        description:
          "Sinta a suavidade celestial do Hamburger X-Rain, onde a perfeita harmonia de sabores se entrelaça...",
        cover: require("../../assets/products/cover/4.jpg"),
        thumbnail: require("../../assets/products/thumbnail/4.jpg"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },

  ///Dessert

  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Pudim de leite",
        price: 12.9,
        description:
          "Uma sobremesa deliciosa para saborear...",
        cover: require("../../assets/products/cover/5.jpg"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "pote com (250g)",
          "calda de açúcar;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 18.9,
        description:
          "Um delicioso Cupcake para adoçar...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },

  //  Drinks
  
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Coca-Cola (Lata)",
        price: 3.5,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma Coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
      {
        id: "8",
        title: "Fanta Laranja (Lata)",
        price: 3.0,
        thumbnail: require("../../assets/products/thumbnail/8.jpg"),
        cover: require("../../assets/products/cover/8.jpg"),
        description:
          "Uma Fanta super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },

      {
        id: "9",
        title: "Pepsi (Lata)",
        price: 3.2,
        thumbnail: require("../../assets/products/thumbnail/9.jpg"),
        cover: require("../../assets/products/cover/9.jpg"),
        description:
          "Uma Pepsi super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
