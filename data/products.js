export const productCategories = [
  { id: "orasi", label: "Baklave sa orasima" },
  { id: "pistaci", label: "Baklave sa pistaćima" },
  { id: "urmasice", label: "Urmašice" },
];

export const products = {
  orasi: [
    {
      id: "mrsne-orasi",
      name: "Mrsne baklave sa orasima",
      image: "/assets/img/menu/menu-item-1.png",
      ingredients:
        "Kore, mleveni orasi, šećer, puter, malo ulja, voda, limun, vanilin šećer i cimet.",
      prices: { 500: 2000, 1000: 3500 },
    },
    {
      id: "posne-orasi",
      name: "Posne baklave sa orasima",
      image: "/assets/img/menu/menu-item-2.png",
      ingredients:
        "Kore, mleveni orasi, šećer, ulje, voda, limun, vanilin šećer i cimet.",
      prices: { 500: 1800, 1000: 3200 },
    },
  ],
  pistaci: [
    {
      id: "mrsne-pistaci",
      name: "Mrsne baklave sa pistaćima",
      image: "/assets/img/menu/menu-item-3.png",
      ingredients:
        "Kore, mleveni pistaći, šećer, puter, malo ulja, voda, limun, vanilin šećer i cimet.",
      prices: { 500: 2700, 1000: 4000 },
    },
    {
      id: "posne-pistaci",
      name: "Posne baklave sa pistaćima",
      image: "/assets/img/menu/menu-item-4.png",
      ingredients:
        "Kore, mleveni pistaći, šećer, ulje, voda, limun, vanilin šećer i cimet.",
      prices: { 500: 2300, 1000: 3800 },
    },
  ],
  urmasice: [
    {
      id: "mrsne-urmasice",
      name: "Urmašice (mrsne)",
      image: "/assets/img/menu/menu-item-5.png",
      ingredients:
        "Glatko brašno, jaja, šećer, puter, ulje, griz, prašak za pecivo, voda i limun.",
      prices: { 500: 1500, 1000: 2800 },
    },
  ],
};
