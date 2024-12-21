export const artCategories = [
  {
    path: "malarstwo",
    category: "painting",
    label: "Malarstwo",
    cover: "/paintingMenu.jpg",
  },
  {
    path: "rzezba",
    category: "sculpture",
    label: "Rzeźba",
    cover: "/sculptureMenu.jpg",
  },
  {
    path: "ceramika",
    category: "ceramic",
    label: "Ceramika",
    cover: "/ceramicsMenu.jpg",
  },
];

// const BASE_URL = {
//     api: import.meta.env.VITE_STRAPI_URL
// }
export const BASE_URL = import.meta.env.VITE_API_URL;
