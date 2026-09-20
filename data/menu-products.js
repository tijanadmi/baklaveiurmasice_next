const baklavaChoices = [
  { value: "orasi", label: "Baklava-orasi" },
  { value: "lesnici", label: "Baklava-lešnici" },
  { value: "pistaci", label: "Baklava-pistaći" },
];

function createProduct({
  id,
  name,
  image,
  images,
  imagesBySize,
  imageOptionsBySize,
  typeChoices,
  sizes,
  prices,
}) {
  return {
    id,
    name,
    image,
    images,
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
        image: imagesBySize?.[size] ?? image,
        ...imageOptionsBySize?.[size],
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

function createThankYouProduct({ kind, image, pairImage }) {
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
      image,
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
        image: pairImage,
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
      image: "/assets/img/menu/slavim_slavu_imam_goste/Slavsko_malo_posno.webp",
      imagesBySize: {
        half: "/assets/img/menu/slavim_slavu_imam_goste/Slavsko_malo_posno.webp",
        full: "/assets/img/menu/slavim_slavu_imam_goste/Slavsko_standard_posno.webp",
      },
      typeChoices: baklavaChoices,
      sizes: kilogramSizes,
      prices: {
        orasi: { half: 1800, full: 3200 },
        lesnici: { half: 2000, full: 3500 },
        pistaci: { half: 2300, full: 3800 },
      },
    }),
    program("slava", "mrsni", {
      image: "/assets/img/menu/slavim_slavu_imam_goste/Slavsko_malo_mrsno.webp",
      imagesBySize: {
        half: "/assets/img/menu/slavim_slavu_imam_goste/Slavsko_malo_mrsno.webp",
        full: "/assets/img/menu/slavim_slavu_imam_goste/Slavsko_standard_mrsno.webp",
      },
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
      image:
        "/assets/img/menu/zelim_da_zasladim_dan/zelim_da_zasladim_dan_malac_posno.webp",
      imagesBySize: {
        malac:
          "/assets/img/menu/zelim_da_zasladim_dan/zelim_da_zasladim_dan_malac_posno.webp",
        tamanica:
          "/assets/img/menu/zelim_da_zasladim_dan/zelim_da_zasladim_dan_tamanica_posno.webp",
      },
      imageOptionsBySize: { tamanica: { imageRotation: 90 } },
      typeChoices: baklavaChoices,
      sizes: dailySizes,
      prices: {
        orasi: { malac: 1350, tamanica: 1700 },
        lesnici: { malac: 1350, tamanica: 1700 },
        pistaci: { malac: 1350, tamanica: 1700 },
      },
    }),
    program("svaki-dan", "mrsni", {
      image:
        "/assets/img/menu/zelim_da_zasladim_dan/zelim_da_zasladim_dan_malac_mrsno.webp",
      imagesBySize: {
        malac:
          "/assets/img/menu/zelim_da_zasladim_dan/zelim_da_zasladim_dan_malac_mrsno.webp",
        tamanica:
          "/assets/img/menu/zelim_da_zasladim_dan/zelim_da_zasladim_dan_tamanica_mrsno.webp",
      },
      imageOptionsBySize: {
        malac: { imageFit: "cover", imagePosition: "center 63%" },
        tamanica: { imageRotation: 90 },
      },
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
      image: "/assets/img/menu/poslovni_partneri/mala_paznja.webp",
      imagesBySize: {
        4: "/assets/img/menu/poslovni_partneri/mala_paznja.webp",
        9: "/assets/img/menu/poslovni_partneri/paznja.webp",
        16: "/assets/img/menu/poslovni_partneri/o_divno.webp",
      },
      imageOptionsBySize: {
        4: { imageRotation: 90 },
        9: { imageRotation: 90 },
      },
      typeChoices: baklavaChoices,
      sizes: clientSizes,
      prices: {
        orasi: { 4: 420, 9: 1060, 16: 1640 },
        lesnici: { 4: 420, 9: 1060, 16: 1640 },
        pistaci: { 4: 420, 9: 1060, 16: 1640 },
      },
    }),
    program("klijenti", "mrsni", {
      image: "/assets/img/menu/poslovni_partneri/poslovni_partneri_mrsno.webp",
      images: [
        "/assets/img/menu/poslovni_partneri/poslovni_partneri_mrsno.webp",
        "/assets/img/menu/poslovni_partneri/poslovni_partneri_posno.webp",
      ],
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
    createThankYouProduct({
      kind: "posni",
      image: "/assets/img/menu/poklon_zahvalnice/poklon_zahvalnice_posni_program.webp",
      pairImage:
        "/assets/img/menu/poklon_zahvalnice/poklon_zahvalnice_2kom_posni_program.webp",
    }),
    createThankYouProduct({
      kind: "mrsni",
      image: "/assets/img/menu/poklon_zahvalnice/poklon_zahvalnice_mrsni_program.webp",
      pairImage:
        "/assets/img/menu/poklon_zahvalnice/poklon_zahvalnice_2kom_mrsni_program.webp",
    }),
  ],
  "poseban-poklon": [],
};
