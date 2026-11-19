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
  imagesByTypeAndSize,
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
      Object.entries(sizePrices).map(([size, price]) => {
        const variantImages = imagesByTypeAndSize?.[type]?.[size];

        return {
          id: `${type}-${size}`,
          options: { vrsta: type, velicina: size },
          name,
          amountLabel: sizes.find((option) => option.value === size)?.amountLabel,
          image: variantImages?.[0] ?? imagesBySize?.[size] ?? image,
          images: variantImages,
          ...imageOptionsBySize?.[size],
          price,
        };
      })
    ),
  };
}

const slavaImageRoot = "/assets/img/menu/slavim_slavu_imam_goste";

const slavaBaklavaImages = {
  half: [
    "DSC_0096.JPG",
    "DSC_0098.JPG",
    "DSC_0099.JPG",
    "DSC_0105.JPG",
    "DSC_0106.JPG",
  ].map((file) => `${slavaImageRoot}/baklave_slavsko_malo_0.5_kg/${file}`),
  full: [
    "DSC_0108.JPG",
    "DSC_0113.JPG",
    "DSC_0118.JPG",
    "DSC_0119.JPG",
    "DSC_0120.JPG",
    "DSC_0123.JPG",
  ].map((file) => `${slavaImageRoot}/baklave_slavsko_standard_1_kg/${file}`),
};

const slavaMrsnaBaklavaImages = Object.fromEntries(
  Object.entries(slavaBaklavaImages).map(([size, images]) => [
    size,
    [...images].reverse(),
  ])
);

const slavaUrmasiceImages = {
  half: [
    "DSC_0162.JPG",
    "DSC_0164.JPG",
    "DSC_0166.JPG",
    "DSC_0168.JPG",
    "DSC_0170.JPG",
    "DSC_0171.JPG",
  ].map((file) => `${slavaImageRoot}/urmasice_slavsko_malo_0.5_kg/${file}`),
  full: [
    "DSC_0125.JPG",
    "DSC_0127.JPG",
    "DSC_0129.JPG",
    "DSC_0131.JPG",
    "DSC_0136.JPG",
  ].map((file) => `${slavaImageRoot}/urmasice_slavsko_standardno_1_kg/${file}`),
};

const slatkiPredahImageRoot = "/assets/img/menu/zelim_da_zasladim_dan";

const slatkiPredahBaklavaImages = {
  malac: ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"].map(
    (file) => `${slatkiPredahImageRoot}/baklava_malac_16_kom/${file}`
  ),
  tamanica: ["1.JPG", "2.JPG", "3.JPG", "4.JPG"].map(
    (file) => `${slatkiPredahImageRoot}/baklava_tamanica_20_kom/${file}`
  ),
};

const slatkiPredahMrsnaBaklavaImages = Object.fromEntries(
  Object.entries(slatkiPredahBaklavaImages).map(([size, images]) => [
    size,
    [...images].reverse(),
  ])
);

const slatkiPredahUrmasiceImages = {
  malac: ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"].map(
    (file) => `${slatkiPredahImageRoot}/urmasice_malac_16_kom/${file}`
  ),
  tamanica: ["1.JPG", "2.JPG", "3.JPG", "4.JPG"].map(
    (file) => `${slatkiPredahImageRoot}/urmasice_tamanica_20_kom/${file}`
  ),
};

const poslovniPokloniImageRoot = "/assets/img/menu/poslovni_partneri";

const poslovniPokloniPosniImages = {
  4: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map(
    (file) => `${poslovniPokloniImageRoot}/poslovni_pokloni_mala_paznja_4_kom/${file}`
  ),
  9: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map(
    (file) => `${poslovniPokloniImageRoot}/poslovni_pokloni_paznja_9_kom/${file}`
  ),
  16: ["1.jpg", "2.JPG", "3.jpg", "4.JPG", "5.JPG"].map(
    (file) => `${poslovniPokloniImageRoot}/poslovni_pokloni_o_divno_16_kom/${file}`
  ),
};

const poslovniPokloniMrsniImages = Object.fromEntries(
  Object.entries(poslovniPokloniPosniImages).map(([size, images]) => [
    size,
    [...images].reverse(),
  ])
);

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
      image: slavaBaklavaImages.half[0],
      imagesByTypeAndSize: {
        orasi: slavaBaklavaImages,
        lesnici: slavaBaklavaImages,
        pistaci: slavaBaklavaImages,
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
      image: slavaMrsnaBaklavaImages.half[0],
      imagesByTypeAndSize: {
        orasi: slavaMrsnaBaklavaImages,
        lesnici: slavaMrsnaBaklavaImages,
        pistaci: slavaMrsnaBaklavaImages,
        urmasice: slavaUrmasiceImages,
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
      image: slatkiPredahBaklavaImages.malac[0],
      imagesByTypeAndSize: {
        orasi: slatkiPredahBaklavaImages,
        lesnici: slatkiPredahBaklavaImages,
        pistaci: slatkiPredahBaklavaImages,
      },
      typeChoices: baklavaChoices,
      sizes: dailySizes,
      prices: {
        orasi: { malac: 1350, tamanica: 1700 },
        lesnici: { malac: 1350, tamanica: 1700 },
        pistaci: { malac: 1350, tamanica: 1700 },
      },
    }),
    program("svaki-dan", "mrsni", {
      image: slatkiPredahMrsnaBaklavaImages.malac[0],
      imagesByTypeAndSize: {
        orasi: slatkiPredahMrsnaBaklavaImages,
        lesnici: slatkiPredahMrsnaBaklavaImages,
        pistaci: slatkiPredahMrsnaBaklavaImages,
        urmasice: slatkiPredahUrmasiceImages,
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
      image: poslovniPokloniPosniImages[4][0],
      imagesByTypeAndSize: {
        orasi: poslovniPokloniPosniImages,
        lesnici: poslovniPokloniPosniImages,
        pistaci: poslovniPokloniPosniImages,
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
      image: poslovniPokloniMrsniImages[4][0],
      imagesByTypeAndSize: {
        orasi: poslovniPokloniMrsniImages,
        lesnici: poslovniPokloniMrsniImages,
        pistaci: poslovniPokloniMrsniImages,
      },
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
