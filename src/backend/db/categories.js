import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "racket",
    categoryImgUrl: "https://shop-phoenix.netlify.app/Assets/images/racket.png",
  },
  {
    _id: uuid(),
    categoryName: "kitbag",
    categoryImgUrl:
      "https://shop-phoenix.netlify.app/Assets/images/kit-bag.png",
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    categoryImgUrl: "https://shop-phoenix.netlify.app/Assets/images/shoes.png",
  },
  {
    _id: uuid(),
    categoryName: "apparel",
    categoryImgUrl:
      "https://shop-phoenix.netlify.app/Assets/images/apparel.png",
  },
  {
    _id: uuid(),
    categoryName: "assessories",
    categoryImgUrl:
      "https://shop-phoenix.netlify.app/Assets/images/assessories.png",
  },
];
