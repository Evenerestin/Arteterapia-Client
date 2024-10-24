import { ArtCategories } from "../config";

const MenuData = [
  {
    label: "Twórczość",
    path: "/tworczosc",
    // submenu: [
    //   ...ArtCategories.map((item) => ({
    //     path: item.path,
    //     label: item.label,
    //   })),
    //   {
    //     path: "zamowienia",
    //     label: "Zamówienia",
    //   },
    // ],
    submenu: ArtCategories.map((item) => ({
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

export default MenuData;
