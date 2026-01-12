export const artCategories = [
  {
    path: "malarstwo",
    category: "painting",
    label: "Malarstwo",
  },
  {
    path: "rzezba",
    category: "sculpture",
    label: "Rzeźba",
  },
  {
    path: "ceramika",
    category: "ceramic",
    label: "Ceramika",
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

export const BASE_URL = import.meta.env.VITE_API_URL;
