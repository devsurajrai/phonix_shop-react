import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //   assessories
  {
    _id: uuid(),
    item: "string",
    itemDetails: {
      name: "Li-Ning AP64 Multi Color Rainbow Badminton String",
      imageURL:
        "https://m.media-amazon.com/images/I/71n0GWX1LUL._AC_UL320_.jpg",
      description: "string",
      price: 690,
      discountInPercent: 45,
      brand: "Li-Ning",
      category: "assessories",
    },
    ratings: 4,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "string",
    itemDetails: {
      name: "Li-ning No.1 Boost Badminton Strings",
      imageURL:
        "https://m.media-amazon.com/images/I/61JjtjGB7qL._AC_UL320_.jpg",
      description: "string",
      price: 950,
      discountInPercent: 37,
      brand: "Li-Ning",
      category: "assessories",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "string",
    itemDetails: {
      name: "Yonex BG 65 Badminton Strings",
      imageURL:
        "https://m.media-amazon.com/images/I/71vRpwQ-UnL._AC_UL320_.jpg",
      description: "string",
      price: 900,
      discountInPercent: 10,
      brand: "Yonex",
      category: "assessories",
    },
    ratings: 2,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "string",
    itemDetails: {
      name: "Yonex BG  Titanium Badminton Strings",
      imageURL:
        "https://m.media-amazon.com/images/I/81fcVQymYuL._AC_UL320_.jpg",
      description: "string",
      price: 2999,
      discountInPercent: 63,
      brand: "Yonex",
      category: "assessories",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "grip",
    itemDetails: {
      name: "Yonex Etech 902 Pack of 5 Badminton Grips",
      imageURL:
        "https://m.media-amazon.com/images/I/41Nqa6Z+rwL._AC_UL320_.jpg",
      description: "string",
      price: 500,
      discountInPercent: 20,
      brand: "Yonex",
      category: "assessories",
    },
    ratings: 4,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "grip",
    itemDetails: {
      name: "Yonex E-Tec Badminton racket Grip",
      imageURL:
        "https://m.media-amazon.com/images/I/71bV+t0KNgL._AC_UL320_.jpg",
      description: "string",
      price: 399,
      discountInPercent: 13,
      brand: "Yonex",
      category: "assessories",
    },
    ratings: 3.5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "grip",
    itemDetails: {
      name: "Li-Ning Badminton Replacement Grip GP20",
      imageURL:
        "https://m.media-amazon.com/images/I/31SFM7cF2eL._AC_UL320_.jpg",
      description: "string",
      price: 4320,
      discountInPercent: 39,
      brand: "Li-Ning",
      category: "assessories",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "grip",
    itemDetails: {
      name: "Li-Ning GP-20 Boost Over Grip",
      imageURL:
        "https://m.media-amazon.com/images/I/61VeEioPhuS._AC_UL320_.jpg",
      description: "string",
      price: 567,
      discountInPercent: 43,
      brand: "Li-Ning",
      category: "assessories",
    },
    ratings: 5,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  //Shoes
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Cloud Ace X2 Non-Marking Badminton Shoes",
      imageURL:
        "https://m.media-amazon.com/images/I/71H4GuERxiL._AC_UL320_.jpg",
      description: "string",
      price: 5990,
      discountInPercent: 25,
      brand: "Li-Ning",
      category: "shoes",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Sound Wave II Non-Marking Badminton Shoe",
      imageURL:
        "https://m.media-amazon.com/images/I/71A5sYTo8bS._AC_UL320_.jpg",
      description: "string",
      price: 5590,
      discountInPercent: 18,
      brand: "Li-Ning",
      category: "shoes",
    },
    ratings: 4,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Ultra Pro Non-Marking Badminton Shoes",
      imageURL:
        "https://m.media-amazon.com/images/I/710t9dgMksL._AC_UL320_.jpg",
      description: "string",
      price: 4590,
      discountInPercent: 17,
      brand: "Li-Ning",
      category: "shoes",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Ultra Fly Non-Marking Badminton Shoe",
      imageURL:
        "https://m.media-amazon.com/images/I/71vzztb1x1L._AC_UL320_.jpg",
      description: "string",
      price: 5290,
      discountInPercent: 25,
      brand: "Li-Ning",
      category: "shoes",
    },
    ratings: 5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Ultra III Non-Marking Cushion Badminton Shoe",
      imageURL:
        "https://m.media-amazon.com/images/I/81IwhgoP1EL._AC_UL320_.jpg",
      description: "string",
      price: 4290,
      discountInPercent: 25,
      brand: "Li-Ning",
      category: "shoes",
    },
    ratings: 1.5,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "SHB Power Cushion Badminton Shoe",
      imageURL:
        "https://m.media-amazon.com/images/I/61Er73oVYML._AC_UL320_.jpg",
      description: "string",
      price: 4790,
      discountInPercent: 4,
      brand: "Yonex",
      category: "shoes",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Hydro Force 2 Badminton Shoes",
      imageURL:
        "https://m.media-amazon.com/images/I/91c4kdv2WmL._AC_UL320_.jpg",
      description: "string",
      price: 4350,
      discountInPercent: 20,
      brand: "Yonex",
      category: "shoes",
    },
    ratings: 2.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Yonex Badminton Shoes SHB 10-1EX",
      imageURL:
        "https://m.media-amazon.com/images/I/81gcFBaoQYL._AC_UL320_.jpg",
      description: "string",
      price: 4990,
      discountInPercent: 6,
      brand: "Yonex",
      category: "shoes",
    },
    ratings: 4,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "Super Power Cushion Badminton Shoe",
      imageURL:
        "https://m.media-amazon.com/images/I/61fsY9v9tsL._AC_UL320_.jpg",
      description: "string",
      price: 4890,
      discountInPercent: 6,
      brand: "Yonex",
      category: "shoes",
    },
    ratings: 3.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "shoes",
    itemDetails: {
      name: "SHB EX Badminton Shoes | Ideal for Badminton",
      imageURL:
        "https://m.media-amazon.com/images/I/81GoHY2kYQL._AC_UL320_.jpg",
      description: "string",
      price: 4790,
      discountInPercent: 35,
      brand: "Yonex",
      category: "shoes",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  //   KitBags
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Yonex Endorsed by Legend Lee Chong Wei Special Limited Edition Badminton Kitbag",
      imageURL:
        "https://m.media-amazon.com/images/I/61kSlW104EL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 4690,
      discountInPercent: 59,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 2.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Yonex SUNR 1926 Badminton Kitbag",
      imageURL:
        "https://m.media-amazon.com/images/I/81gShzbFe0L._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 1190,
      discountInPercent: 12,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 2,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Yonex SUNR 8929MSH BT9 SR Badminton Kitbag ",
      imageURL:
        "https://m.media-amazon.com/images/I/41iTh29BgkL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 4575,
      discountInPercent: 14,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Yonex Badminton Kitbag SUNR 9831WTH BT6",
      imageURL:
        "https://m.media-amazon.com/images/I/8164aqiyYzL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 2690,
      discountInPercent: 24,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 1.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Yonex SUNR 1916 Badminton Kitbag",
      imageURL:
        "https://m.media-amazon.com/images/I/719SeWAr3WL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 1540,
      discountInPercent: 5,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Li-Ning Tour ABDP392 Polyester Badminton Kit-Bag",
      imageURL:
        "https://m.media-amazon.com/images/I/814nyck7-FL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 2190,
      discountInPercent: 51,
      brand: "Yonex",
      category: "Li-Ning",
    },
    ratings: 2,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Li-Ning Elite X Kit-Bag",
      imageURL:
        "https://m.media-amazon.com/images/I/81Hkus3xNNL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 2090,
      discountInPercent: 51,
      brand: "Yonex",
      category: "Li-Ning",
    },
    ratings: 3.5,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Li-Ning Tour II Kit-Bag",
      imageURL:
        "https://m.media-amazon.com/images/I/91oWb1g717L._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 1990,
      discountInPercent: 45,
      brand: "Yonex",
      category: "Li-Ning",
    },
    ratings: 2,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Li-Ning Max Power Kitbag",
      imageURL:
        "https://m.media-amazon.com/images/I/91HNdLI8FKS._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 1190,
      discountInPercent: 8,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "kitbag",
    itemDetails: {
      name: "Li-Ning Champ ABDP374 Polyester Badminton Kit-Bag",
      imageURL:
        "https://m.media-amazon.com/images/I/91XIuh4idCL._AC_UL320_.jpg",
      description:
        "Thermo Foam-lined compartment designed to hold a number of racket also Guards these against extreme heat or cold.Foam-lined compartment designed for storage of delicate articles.Bag straps give the option of the bag being hand-carried or slung over the shoulder.",
      price: 2990,
      discountInPercent: 45,
      brand: "Yonex",
      category: "kitbag",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: true,
    },
  },

  //   rackets
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Li-Ning G-Force Superlite Carbon Fibre Badminton Racket",
      imageURL:
        "https://m.media-amazon.com/images/I/81kKE-6BokL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 4590,
      discountInPercent: 58,
      brand: "Li-Ning",
      category: "racket",
    },
    ratings: 3,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Li-Ning Wind Lite Stealth Carbon Fibre Strung Badminton Racket",
      imageURL:
        "https://m.media-amazon.com/images/I/817IdPtvl2L._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 6590,
      discountInPercent: 44,
      brand: "Li-Ning",
      category: "racket",
    },
    ratings: 2,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Li-Ning Super Series 900 Strung Badminton Racket",
      imageURL:
        "https://m.media-amazon.com/images/I/71bmEEs1TCL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 4290,
      discountInPercent: 54,
      brand: "Li-Ning",
      category: "racket",
    },
    ratings: 1.5,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Li-Ning Wind Lite Strung Badminton Racque",
      imageURL:
        "https://m.media-amazon.com/images/I/81QJiBlMPZL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 5990,
      discountInPercent: 50,
      brand: "Li-Ning",
      category: "racket",
    },
    ratings: 4,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Li-Ning G-Force Superlite Carbon Fibre Badminton Racket",
      imageURL:
        "https://m.media-amazon.com/images/I/81kKE-6BokL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 4590,
      discountInPercent: 58,
      brand: "Li-Ning",
      category: "racket",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Yonex ZR 100 Light Aluminium Badminton racket",
      imageURL:
        "https://m.media-amazon.com/images/I/71xaU6dfPML._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 750,
      discountInPercent: 36,
      brand: "Yonex",
      category: "racket",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Yonex Nanoray Light 18i Graphite Badminton racket ",
      imageURL:
        "https://m.media-amazon.com/images/I/71snlkNDRBL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 750,
      discountInPercent: 29,
      brand: "Yonex",
      category: "racket",
    },
    ratings: 4,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Yonex GR 303 Aluminum Blend Badminton racket ",
      imageURL:
        "https://m.media-amazon.com/images/I/617Hi4pc0pL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 750,
      discountInPercent: 29,
      brand: "Yonex",
      category: "racket",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Yonex Nanoray 6000I G4-U Badminton racket ",
      imageURL:
        "https://m.media-amazon.com/images/I/71qvhd4HFDL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 1750,
      discountInPercent: 29,
      brand: "Yonex",
      category: "racket",
    },
    ratings: 3.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "racket",
    itemDetails: {
      name: "Yonex Smash Badminton racket",
      imageURL:
        "https://m.media-amazon.com/images/I/91Lu9brnTNL._AC_UL320_.jpg",
      description:
        "Frame Material - Aluminium | Shaft Material - Aluminium | Weight - U (95 - 99.9 grams) | Grip Size - G4 (3.5 inches) | Head Shape - Isometric Head Shape | Pre-Strung - Strung | Age - Adult | Playing Level - Beginner, Intermediate. Grip Material: Polyurethane",
      price: 3150,
      discountInPercent: 35,
      brand: "Yonex",
      category: "racket",
    },
    ratings: 2,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },

  //   apparel
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Sweat Absorbing Round Neck Badminton T-Shirt",
      imageURL:
        "https://m.media-amazon.com/images/I/71cUJa2zYvL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 849,
      discountInPercent: 14,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },

  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Badminton Round Neck Tshirt",
      imageURL:
        "https://m.media-amazon.com/images/I/61j9OeaOgOL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 799,
      discountInPercent: 6,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Badminton Round Neck Tshirt",
      imageURL:
        "https://m.media-amazon.com/images/I/61j9OeaOgOL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 799,
      discountInPercent: 6,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Collar Turbo Dri Badminton T-Shirt",
      imageURL:
        "https://m.media-amazon.com/images/I/61VopxtLjIL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 799,
      discountInPercent: 38,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Badminton Defender T-Shirt",
      imageURL:
        "https://m.media-amazon.com/images/I/81NttTLs8CS._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1990,
      discountInPercent: 10,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Quick Dry Sweat Absorbing Badminton Tshirt for Men's",
      imageURL:
        "https://m.media-amazon.com/images/I/71sd+KvdJLL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 849,
      discountInPercent: 6,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 1,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Active Badminton Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/61ktr89Yz3L._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1000,
      discountInPercent: 10,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "HBS-1091 Polyester Badminton Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/81VdCJr5BHL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 699,
      discountInPercent: 24,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 2,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: true,
    },
  },

  {
    _id: uuid(),
    item: "string",
    itemDetails: {
      name: "Unisex Badminton Sports Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/71Yssnn7KMS._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1000,
      discountInPercent: 5,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 5,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Turbo Dri Plain Badminton Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/61t38fAmF1L._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 799,
      discountInPercent: 2,
      brand: "Li-Ning",
      category: "apparel",
    },
    ratings: 4,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Shorts BSK-19",
      imageURL:
        "https://m.media-amazon.com/images/I/41tXFrCt2QL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1520,
      discountInPercent: 30,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 5,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Badminton Shorts - Jet Black",
      imageURL:
        "https://m.media-amazon.com/images/I/61OkVLfev3L._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1140,
      discountInPercent: 12,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 2,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Mens Shorts Woven Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/71nsyTai0FL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1290,
      discountInPercent: 23,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 1,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Lin Dan World Model Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/316fxh7UB9L._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1050,
      discountInPercent: 5,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "short",
    itemDetails: {
      name: "Sweat Free Badminton Shorts",
      imageURL:
        "https://m.media-amazon.com/images/I/51xSE0PZokL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1290,
      discountInPercent: 23,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 3,
    itemStatus: {
      inStock: true,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Moisture Management Badminton T Shirt",
      imageURL:
        "https://m.media-amazon.com/images/I/714iB-xZ2LL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1050,
      discountInPercent: 13,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: false,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Yonex Mens Polo T-Shirt",
      imageURL:
        "https://m.media-amazon.com/images/I/71LZaRdGTqL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1690,
      discountInPercent: 13,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 4,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: true,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Yonex Badminton Polo T Shirt for Junior",
      imageURL:
        "https://m.media-amazon.com/images/I/61MQS07rohL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1450,
      discountInPercent: 12,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Yonex Badminton Polo T Shirt for Junior",
      imageURL:
        "https://m.media-amazon.com/images/I/51sQd1FIXFL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1650,
      discountInPercent: 12,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 3.2,
    itemStatus: {
      inStock: false,
      fastDelivery: true,
      isNew: false,
    },
  },
  {
    _id: uuid(),
    item: "t-shirt",
    itemDetails: {
      name: "Yonex Badminton Round Neck T Shirt",
      imageURL:
        "https://m.media-amazon.com/images/I/51fPSJEkwnL._AC_UL320_.jpg",
      description:
        "Taking our moisture management technology to the next level ,our cooling print helps regulate your skin’s temperature by absorbing excess heat. Keeping you cool and comfortable for longer. uperior wicking properties that move sweat away from your body.",
      price: 1350,
      discountInPercent: 8,
      brand: "Yonex",
      category: "apparel",
    },
    ratings: 4.5,
    itemStatus: {
      inStock: true,
      fastDelivery: false,
      isNew: true,
    },
  },
];
