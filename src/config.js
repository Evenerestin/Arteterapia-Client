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

export const menuData = [
  {
    label: "Twórczość",
    path: "/tworczosc",
    submenu: artCategories.map((item) => ({
      path: item.path,
      label: item.label,
    })),
  },
  {
    label: "Zamówienia",
    path: "/zamowienia",
  },
  {
    label: "Dydaktyka",
    path: "/dydaktyka",
  },
  {
    label: "O mnie",
    path: "/o-mnie",
  },
  {
    label: "Kontakt",
    path: "/kontakt",
  },
];

// const BASE_URL = {
//     api: import.meta.env.VITE_STRAPI_URL
// }
export const BASE_URL = import.meta.env.VITE_API_URL;
