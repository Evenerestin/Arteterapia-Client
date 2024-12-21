import { artCategories } from "../config";

const menuData = [
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

export default menuData;
