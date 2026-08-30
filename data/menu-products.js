const baklavaChoices = [
  { value: "orasi", label: "Baklava-orasi" },
  { value: "lesnici", label: "Baklava-lešnici" },
  { value: "pistaci", label: "Baklava-pistaći" },
];

function createProduct({ id, name, image, typeChoices, sizes, prices }) {
  return {
    id,
    name,
    image,
    optionGroups: [
      { id: "vrsta", label: "Vrsta", choices: typeChoices },
      { id: "velicina", label: "Količina / veličina", choices: sizes },
    ],
    variants: Object.entries(prices).flatMap(([type, sizePrices]) =>
      Object.entries(sizePrices).map(([size, price]) => ({
        id: `${type}-${size}`,
        options: { vrsta: type, velicina: size },
        name,
        amountLabel: sizes.find((option) => option.value === size)?.amountLabel,
        price,
      }))
    ),
  };
}

const kilogramSizes = [
  { value: "half", label: "Malo pakovanje-1/2kg", amountLabel: "1/2 kg" },
  { value: "full", label: "Standard pakovanje-1kg", amountLabel: "1 kg" },
];

const dailySizes = [
  { value: "malac", label: "Malac 16 kom", amountLabel: "16 komada" },
  { value: "tamanica", label: "Tamanica 20 kom", amountLabel: "20 komada" },
];

const clientSizes = [
  { value: "4", label: "Mala pažnja 4", amountLabel: "4 komada" },
  { value: "9", label: "Pažnja 9", amountLabel: "9 komada" },
  { value: "16", label: "O, divno 16", amountLabel: "16 komada" },
];

function createThankYouProduct({ kind, image }) {
  const isMrsni = kind === "mrsni";
  const choices = isMrsni
    ? [...baklavaChoices, { value: "urmasice", label: "Urmašice" }]
    : baklavaChoices;
  const variants = [];

  for (const first of choices) {
    variants.push({
      id: `${first.value}-hvala-1`,
      options: { prviUkus: first.value, pakovanje: "hvala-1" },
      name: kind === "posni" ? "Posni program" : "Mrsni program",
      amountLabel: "Hvala 1",
      selectionLabel: `${first.label} · Hvala 1`,
      price: first.value === "urmasice" ? 90 : 140,
    });

    for (const second of choices) {
      const firstIsUrmasice = first.value === "urmasice";
      const secondIsUrmasice = second.value === "urmasice";

      variants.push({
        id: `${first.value}-${second.value}-hvala-vam-2`,
        options: {
          prviUkus: first.value,
          pakovanje: "hvala-vam-2",
          drugiUkus: second.value,
        },
        name: kind === "posni" ? "Posni program" : "Mrsni program",
        amountLabel: "Hvala vam 2",
        selectionLabel: `${first.label} + ${second.label} · Hvala vam 2`,
        price:
          firstIsUrmasice && secondIsUrmasice
            ? 170
            : isMrsni && (firstIsUrmasice || secondIsUrmasice)
              ? 220
              : isMrsni
                ? 260
                : 240,
      });
    }
  }

  return {
    id: `pokloni-${kind}`,
    name: kind === "posni" ? "Posni program" : "Mrsni program",
    image,
    imageLayout: "portrait",
    imageLayout: "portrait",
    optionGroups: [
      { id: "prviUkus", label: "Prvi ukus", choices, column: "left" },
      {
        id: "pakovanje",
        label: "Količina / veličina",
        choices: [
          { value: "hvala-1", label: "Hvala 1" },
          { value: "hvala-vam-2", label: "Hvala vam 2" },
        ],
        column: "right",
      },
      {
        id: "drugiUkus",
        label: "Drugi ukus",
        choices,
        column: "left",
        showWhen: { groupId: "pakovanje", value: "hvala-vam-2" },
      },
    ],
    variants,
  };
}

const program = (occasion, kind, config) =>
  createProduct({
    id: `${occasion}-${kind}`,
    name: kind === "posni" ? "Posni program" : "Mrsni program",
    ...config,
  });

export const products = {
  slava: [
    program("slava", "posni", {
      image: "/assets/img/menu/menu-item-1.png",
      typeChoices: baklavaChoices,
      sizes: kilogramSizes,
      prices: {
        orasi: { half: 1800, full: 3200 },
        lesnici: { half: 2000, full: 3500 },
        pistaci: { half: 2300, full: 3800 },
      },
    }),
    program("slava", "mrsni", {
      image: "/assets/img/menu/menu-item-3.png",
      typeChoices: [...baklavaChoices, { value: "urmasice", label: "Urmašice" }],
      sizes: kilogramSizes,
      prices: {
        orasi: { half: 2000, full: 3500 },
        lesnici: { half: 2200, full: 3700 },
        pistaci: { half: 2400, full: 4000 },
        urmasice: { half: 1500, full: 2800 },
      },
    }),
  ],
  "svaki-dan": [
    program("svaki-dan", "posni", {
      image: "/assets/img/menu/baklavasroutker.600x434.jpg",
      typeChoices: baklavaChoices,
      sizes: dailySizes,
      prices: {
        orasi: { malac: 1350, tamanica: 1700 },
        lesnici: { malac: 1350, tamanica: 1700 },
        pistaci: { malac: 1350, tamanica: 1700 },
      },
    }),
    program("svaki-dan", "mrsni", {
      image: "/assets/img/menu/menu-item-5.png",
      typeChoices: [...baklavaChoices, { value: "urmasice", label: "Urmašice" }],
      sizes: dailySizes,
      prices: {
        orasi: { malac: 1450, tamanica: 1800 },
        lesnici: { malac: 1450, tamanica: 1800 },
        pistaci: { malac: 1450, tamanica: 1800 },
        urmasice: { malac: 960, tamanica: 1200 },
      },
    }),
  ],
  klijenti: [
    program("klijenti", "posni", {
      image: "/assets/img/menu/menu-item-1s.png",
      typeChoices: baklavaChoices,
      sizes: clientSizes,
      prices: {
        orasi: { 4: 420, 9: 1060, 16: 1640 },
        lesnici: { 4: 420, 9: 1060, 16: 1640 },
        pistaci: { 4: 420, 9: 1060, 16: 1640 },
      },
    }),
    program("klijenti", "mrsni", {
      image: "/assets/img/menu/menu-item-3s.png",
      typeChoices: baklavaChoices,
      sizes: clientSizes,
      prices: {
        orasi: { 4: 420, 9: 1060, 16: 1640 },
        lesnici: { 4: 420, 9: 1060, 16: 1640 },
        pistaci: { 4: 420, 9: 1060, 16: 1640 },
      },
    }),
  ],
  pokloni: [
    createThankYouProduct({ kind: "posni", image: "/assets/img/baklava1.jpg" }),
    createThankYouProduct({ kind: "mrsni", image: "/assets/img/urmasica1.jpg" }),
  ],
  "poseban-poklon": [],
};
