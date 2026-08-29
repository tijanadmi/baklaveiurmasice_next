export const menuCategories = [
  {
    id: "slava",
    label: "Slavim slavu i imam goste",
    title: "Zablistajte kao domaćica ili domaćin",
    description:
      "Posne i mrsne baklave u pakovanjima od 1 kg i 1/2 kg. Urmašice su uvek mrsne, u pakovanjima od 1 kg i 1/2 kg.",
    details: [
      "Svaki komad može da bude upakovan u šarenu papirnu korpicu, a svi zajedno u elegantnu kutiju od čvrstog papira.",
      "Baklave su 2x2 cm, a urmašice do 7 cm.",
      "Dostava je uključena u cenu u okviru crvene linije na mapi.",
      "Poručite minimum 4 dana ranije, a u periodu velikih slava 7 dana.",
    ],
  },
  {
    id: "svaki-dan",
    label: "Želim da zasladim dan",
    title: "Zaslužujete vrhunski kvalitet svaki dan",
    description:
      "Zaslužujete vrhunski kvalitet svaki dan i zato smo vam pripremili komadno poručivanje baklava i urmašica.",
    details: [
      "Minimalna količina za porudžbinu je 10 komada od jedne vrste, a ukupno 16 komada.",
      "Baklave su 2x2 cm, a urmašice do 7 cm.",
      "Poručite minimum 4 dana ranije.",
      "Dostava ili lično preuzimanje po dogovoru, a dostava ne ulazi u cenu.",
    ],
  },
  {
    id: "klijenti",
    label: "Želim poslovnim partnerima da zasladim dan",
    intro: [
      "Cene su okvirne.",
      "Odaberite vrstu, ukus i količinu, a mi ćemo vam se javiti u vezi sa brendiranjem i krajnjom cenom.",
    ],
    title: "Nezaboravan i praktičan način da kažete hvala",
    description:
      "Kutijice sadrže 4, 9 ili 16 komada baklave, a sadržaj možete birati prema želji: posne, mrsne, orasi, pistaći.",
    details: [
      "Svaki komad baklavice je spakovan u šareni papir, a sve zajedno u kutijicu od čvrstog papira sa prozorčićem.",
      "Svaka kutijica je brendirana, a cena brendiranja zavisi od vaših želja.",
      "Poručite minimum 7 dana ranije, a za veće količine i novogodišnje poklone minimum mesec dana ranije.",
      "Dostava ili preuzimanje po dogovoru. Dostava ne ulazi u cenu.",
    ],
  },
  {
    id: "pokloni",
    label: "Trebaju mi poklon – zahvalnice za goste",
    intro: [
      "Cene su okvirne.",
      "Ovde odaberite, a mi vam se javljamo za dekoraciju i konačnu cenu.",
    ],
    title: "Kada gosti ulepšaju i uveličaju vaš važan događaj",
    description:
      "Jedna baklavica, jedna urmašica ili u paru — izbor je vaš. Slatki zalogaji su položeni na tvrdi kartončić, umotani u celofan i sa mašnom.",
    details: [
      "Moguće je zakačiti i poruku sa tekstom po vašem izboru ili našoj preporuci.",
      "Cene se kreću od 105 rsd za upakovanu urmašicu, bez dodatnih sadržaja.",
      "Minimalna količina je 20 poklon zahvalnica.",
      "Poručite 7 dana ranije, a za veće količine i u periodu slava minimum mesec dana ranije.",
    ],
  },
  {
    id: "poseban-poklon",
    label: "Treba mi poseban poklon za posebnu osobu",
    intro: [
      "Svaki poseban poklon osmišljavamo sa pažnjom, prema osobi i prilici kojoj je namenjen.",
      "Pišite nam ili nas pozovite da zajedno dogovorimo ukuse, pakovanje i detalje koji će vaš poklon učiniti zaista jedinstvenim.",
    ],
    title:
      "Neka vas slavljenica ili slavljenik upamte po poklonu koji će ih oboriti s nogu",
    description:
      "Pokloni koji oduševe na prvi pogled, a razgale na prvi zalogaj. U ponudi imamo standardno poklon od 16 komada sa ukrasnom trakom.",
    details: [
      "Možete kupiti i personalizovano poklon-pakovanje sa luksuznom kutijom i dodatnim iznenađenjem.",
      "Poručite minimum 7 dana ranije.",
      "Dostava ili preuzimanje po dogovoru. Dostava ne ulazi u cenu.",
    ],
  },
];

export { products } from "./menu-products";

/*
 * Product variants live in menu-products.js. Keeping the category copy in this
 * file makes the editorial content easy to find, while the larger price matrix
 * remains independently maintainable.
 */

/* LEGACY PRODUCT DATA

const pastryOptions = [
  { value: "mrsna", label: "Mrsna" },
  { value: "posna", label: "Posna" },
];

export const products = {
  slava: [
    {
      id: "slava-posni-program",
      name: "Posni program",
      image: "/assets/img/menu/menu-item-1.png",
      description: "Slavsko malo pakovanje",
      optionGroups: [
        {
          id: "ukus",
          label: "Vrsta",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "lesnici", label: "Lešnici" },
            { value: "pistaci", label: "Pistaći" },
          ],
        },
        {
          id: "kolicina",
          label: "Količina",
          choices: [
            { value: "half", label: "1/2 kg" },
            { value: "full", label: "1 kg" },
          ],
        },
      ],
      variants: [
        {
          id: "orasi-half",
          options: { ukus: "orasi", kolicina: "half" },
          name: "Posni program",
          amountLabel: "1/2 kg",
          price: 1800,
        },
        {
          id: "lesnici-half",
          options: { ukus: "lesnici", kolicina: "half" },
          name: "Posni program",
          amountLabel: "1/2 kg",
          price: 2000,
        },
        {
          id: "pistaci-half",
          options: { ukus: "pistaci", kolicina: "half" },
          name: "Posni program",
          amountLabel: "1/2 kg",
          price: 2300,
        },
        {
          id: "orasi-full",
          options: { ukus: "orasi", kolicina: "full" },
          name: "Posni program",
          amountLabel: "1 kg",
          price: 3200,
        },
        {
          id: "lesnici-full",
          options: { ukus: "lesnici", kolicina: "full" },
          name: "Posni program",
          amountLabel: "1 kg",
          price: 3500,
        },
        {
          id: "pistaci-full",
          options: { ukus: "pistaci", kolicina: "full" },
          name: "Posni program",
          amountLabel: "1 kg",
          price: 3800,
        },
      ],
    },
    {
      id: "slava-mrsni-program",
      name: "Mrsni program",
      image: "/assets/img/menu/menu-item-3.png",
      description: "Slavsko malo pakovanje",
      optionGroups: [
        {
          id: "ukus",
          label: "Vrsta",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "lesnici", label: "Lešnici" },
            { value: "pistaci", label: "Pistaći" },
            { value: "urmasice", label: "Urmašice" },
          ],
        },
        {
          id: "kolicina",
          label: "Količina",
          choices: [
            { value: "half", label: "1/2 kg" },
            { value: "full", label: "1 kg" },
          ],
        },
      ],
      variants: [
        {
          id: "orasi-half",
          options: { ukus: "orasi", kolicina: "half" },
          name: "Mrsni program",
          amountLabel: "1/2 kg",
          price: 2000,
        },
        {
          id: "lesnici-half",
          options: { ukus: "lesnici", kolicina: "half" },
          name: "Mrsni program",
          amountLabel: "1/2 kg",
          price: 2400,
        },
        {
          id: "pistaci-half",
          options: { ukus: "pistaci", kolicina: "half" },
          name: "Mrsni program",
          amountLabel: "1/2 kg",
          price: 2700,
        },
        {
          id: "urmasice-half",
          options: { ukus: "urmasice", kolicina: "half" },
          name: "Mrsni program",
          amountLabel: "1/2 kg",
          price: 2300,
        },
        {
          id: "orasi-full",
          options: { ukus: "orasi", kolicina: "full" },
          name: "Mrsni program",
          amountLabel: "1 kg",
          price: 3500,
        },
        {
          id: "lesnici-full",
          options: { ukus: "lesnici", kolicina: "full" },
          name: "Mrsni program",
          amountLabel: "1 kg",
          price: 4000,
        },
        {
          id: "pistaci-full",
          options: { ukus: "pistaci", kolicina: "full" },
          name: "Mrsni program",
          amountLabel: "1 kg",
          price: 4400,
        },
        {
          id: "urmasice-full",
          options: { ukus: "urmasice", kolicina: "full" },
          name: "Mrsni program",
          amountLabel: "1 kg",
          price: 3900,
        },
      ],
    },
  ],
  "svaki-dan": [
    {
      id: "dnevni-posni-tamanica",
      name: "Posni program",
      image: "/assets/img/menu/baklavasroutker.600x434.jpg",
      description: "Tamanica 20 komada",
      optionGroups: [
        {
          id: "ukus",
          label: "Ukus",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "lesnici", label: "Lešnici" },
            { value: "pistaci", label: "Pistaći" },
          ],
        },
      ],
      variants: [
        {
          id: "orasi",
          options: { ukus: "orasi" },
          name: "Posni program",
          amountLabel: "20 komada",
          price: 1700,
        },
        {
          id: "lesnici",
          options: { ukus: "lesnici" },
          name: "Posni program",
          amountLabel: "20 komada",
          price: 1800,
        },
        {
          id: "pistaci",
          options: { ukus: "pistaci" },
          name: "Posni program",
          amountLabel: "20 komada",
          price: 2000,
        },
      ],
    },
    {
      id: "dnevni-posni-malac",
      name: "Posni program",
      image: "/assets/img/menu/menu-item-5.png",
      description: "Malac 16 komada",
      optionGroups: [
        {
          id: "ukus",
          label: "Ukus",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "lesnici", label: "Lešnici" },
            { value: "pistaci", label: "Pistaći" },
          ],
        },
      ],
      variants: [
        {
          id: "orasi",
          options: { ukus: "orasi" },
          name: "Posni program",
          amountLabel: "16 komada",
          price: 1350,
        },
        {
          id: "lesnici",
          options: { ukus: "lesnici" },
          name: "Posni program",
          amountLabel: "16 komada",
          price: 1450,
        },
        {
          id: "pistaci",
          options: { ukus: "pistaci" },
          name: "Posni program",
          amountLabel: "16 komada",
          price: 1600,
        },
      ],
    },
    {
      id: "dnevni-mrsni-tamanica",
      name: "Mrsni program",
      image: "/assets/img/menu/baklavasroutker.600x434.jpg",
      description: "Tamanica 20 komada",
      optionGroups: [
        {
          id: "ukus",
          label: "Ukus",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "lesnici", label: "Lešnici" },
            { value: "pistaci", label: "Pistaći" },
          ],
        },
      ],
      variants: [
        {
          id: "orasi",
          options: { ukus: "orasi" },
          name: "Mrsni program",
          amountLabel: "20 komada",
          price: 2100,
        },
        {
          id: "lesnici",
          options: { ukus: "lesnici" },
          name: "Mrsni program",
          amountLabel: "20 komada",
          price: 2400,
        },
        {
          id: "pistaci",
          options: { ukus: "pistaci" },
          name: "Mrsni program",
          amountLabel: "20 komada",
          price: 2600,
        },
      ],
    },
    {
      id: "dnevni-mrsni-malac",
      name: "Mrsni program",
      image: "/assets/img/menu/menu-item-5.png",
      description: "Malac 16 komada",
      optionGroups: [
        {
          id: "ukus",
          label: "Ukus",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "lesnici", label: "Lešnici" },
            { value: "pistaci", label: "Pistaći" },
          ],
        },
      ],
      variants: [
        {
          id: "orasi",
          options: { ukus: "orasi" },
          name: "Mrsni program",
          amountLabel: "16 komada",
          price: 1450,
        },
        {
          id: "lesnici",
          options: { ukus: "lesnici" },
          name: "Mrsni program",
          amountLabel: "16 komada",
          price: 1700,
        },
        {
          id: "pistaci",
          options: { ukus: "pistaci" },
          name: "Mrsni program",
          amountLabel: "16 komada",
          price: 1900,
        },
      ],
    },
  ],
  klijenti: [
    {
      id: "kutija-4",
      name: "Kutija od 4 komada",
      image: "/assets/img/menu/menu-item-1s.png",
      description: "Idealna za poslovne goste, mali poklon ili brzu zahvalnost.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Kutija 4 · Mrsna · Orasi",
          amountLabel: "4 komada",
          price: 650,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Kutija 4 · Posna · Orasi",
          amountLabel: "4 komada",
          price: 620,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Kutija 4 · Mrsna · Pistaći",
          amountLabel: "4 komada",
          price: 750,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Kutija 4 · Mrsna · Mix",
          amountLabel: "4 komada",
          price: 720,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Kutija 4 · Posna · Pistaći",
          amountLabel: "4 komada",
          price: 720,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Kutija 4 · Posna · Mix",
          amountLabel: "4 komada",
          price: 690,
        },
      ],
    },
    {
      id: "kutija-9",
      name: "Kutija od 9 komada",
      image: "/assets/img/menu/menu-item-2s.png",
      description: "Premium, praktičan izbor za poslovne saradnike i važnije prilike.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Kutija 9 · Mrsna · Orasi",
          amountLabel: "9 komada",
          price: 1350,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Kutija 9 · Posna · Orasi",
          amountLabel: "9 komada",
          price: 1300,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Kutija 9 · Mrsna · Pistaći",
          amountLabel: "9 komada",
          price: 1550,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Kutija 9 · Mrsna · Mix",
          amountLabel: "9 komada",
          price: 1480,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Kutija 9 · Posna · Pistaći",
          amountLabel: "9 komada",
          price: 1500,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Kutija 9 · Posna · Mix",
          amountLabel: "9 komada",
          price: 1420,
        },
      ],
    },
    {
      id: "kutija-16",
      name: "Kutija od 16 komada",
      image: "/assets/img/menu/menu-item-3s.png",
      description:
        "Najprikladniji izbor za veće poslovne, klijentske ili porodične zahvale.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Kutija 16 · Mrsna · Orasi",
          amountLabel: "16 komada",
          price: 2300,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Kutija 16 · Posna · Orasi",
          amountLabel: "16 komada",
          price: 2200,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Kutija 16 · Mrsna · Pistaći",
          amountLabel: "16 komada",
          price: 2700,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Kutija 16 · Mrsna · Mix",
          amountLabel: "16 komada",
          price: 2550,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Kutija 16 · Posna · Pistaći",
          amountLabel: "16 komada",
          price: 2600,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Kutija 16 · Posna · Mix",
          amountLabel: "16 komada",
          price: 2450,
        },
      ],
    },
  ],
  pokloni: [
    {
      id: "poklon-zahvalnice-20",
      name: "Poklon zahvalnice 20 komada",
      image: "/assets/img/menu/menu-item-1s.png",
      description:
        "Kada želite da svojim gostima kažete hvala na posebnom danu i da ih iznenadite.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Poklon zahvalnice · Mrsno · Orasi",
          amountLabel: "20 komada",
          price: 3200,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Poklon zahvalnice · Posno · Orasi",
          amountLabel: "20 komada",
          price: 3000,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Poklon zahvalnice · Mrsno · Pistaći",
          amountLabel: "20 komada",
          price: 3700,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Poklon zahvalnice · Mrsno · Mix",
          amountLabel: "20 komada",
          price: 3450,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Poklon zahvalnice · Posno · Pistaći",
          amountLabel: "20 komada",
          price: 3500,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Poklon zahvalnice · Posno · Mix",
          amountLabel: "20 komada",
          price: 3300,
        },
      ],
    },
    {
      id: "poklon-zahvalnice-30",
      name: "Poklon zahvalnice 30 komada",
      image: "/assets/img/menu/menu-item-2s.png",
      description: "Praktičan, elegantan i nezaboravan poklon za veći broj gostiju.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Poklon zahvalnice · Mrsno · Orasi",
          amountLabel: "30 komada",
          price: 4300,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Poklon zahvalnice · Posno · Orasi",
          amountLabel: "30 komada",
          price: 4100,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Poklon zahvalnice · Mrsno · Pistaći",
          amountLabel: "30 komada",
          price: 5000,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Poklon zahvalnice · Mrsno · Mix",
          amountLabel: "30 komada",
          price: 4650,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Poklon zahvalnice · Posno · Pistaći",
          amountLabel: "30 komada",
          price: 4800,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Poklon zahvalnice · Posno · Mix",
          amountLabel: "30 komada",
          price: 4450,
        },
      ],
    },
  ],
  "poseban-poklon": [
    {
      id: "standardni-poklon-16",
      name: "Standardni poklon od 16 komada",
      image: "/assets/img/menu/menu-item-3s.png",
      description:
        "Klasičan i elegantan poklon sa ukrasnom trakom, spreman za svaki poseban trenutak.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Standardni poklon · Mrsno · Orasi",
          amountLabel: "16 komada",
          price: 2200,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Standardni poklon · Posno · Orasi",
          amountLabel: "16 komada",
          price: 2100,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Standardni poklon · Mrsno · Pistaći",
          amountLabel: "16 komada",
          price: 2600,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Standardni poklon · Mrsno · Mix",
          amountLabel: "16 komada",
          price: 2450,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Standardni poklon · Posno · Pistaći",
          amountLabel: "16 komada",
          price: 2500,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Standardni poklon · Posno · Mix",
          amountLabel: "16 komada",
          price: 2350,
        },
      ],
    },
    {
      id: "personalizovani-poklon",
      name: "Personalizovani poklon",
      image: "/assets/img/menu/menu-item-2s.png",
      description:
        "Luksuzna kutija sa duplim dnom i dodatnim iznenađenjem za posebnu osobu.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "sastav",
          label: "Sastav",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "mix", label: "Mix" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", sastav: "orasi" },
          name: "Personalizovani poklon · Mrsno · Orasi",
          amountLabel: "Po dogovoru",
          price: 3500,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", sastav: "orasi" },
          name: "Personalizovani poklon · Posno · Orasi",
          amountLabel: "Po dogovoru",
          price: 3300,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", sastav: "pistaci" },
          name: "Personalizovani poklon · Mrsno · Pistaći",
          amountLabel: "Po dogovoru",
          price: 4100,
        },
        {
          id: "mrsna-mix",
          options: { varijanta: "mrsna", sastav: "mix" },
          name: "Personalizovani poklon · Mrsno · Mix",
          amountLabel: "Po dogovoru",
          price: 3800,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", sastav: "pistaci" },
          name: "Personalizovani poklon · Posno · Pistaći",
          amountLabel: "Po dogovoru",
          price: 3900,
        },
        {
          id: "posna-mix",
          options: { varijanta: "posna", sastav: "mix" },
          name: "Personalizovani poklon · Posno · Mix",
          amountLabel: "Po dogovoru",
          price: 3650,
        },
      ],
    },
  ],
};
*/
