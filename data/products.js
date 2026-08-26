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
    label: "Želim klijentima da zasladim dan",
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

const standardPackages = [
  { value: "500", label: "500 g" },
  { value: "1000", label: "1 kg" },
];

const pastryOptions = [
  { value: "mrsna", label: "Mrsna" },
  { value: "posna", label: "Posna" },
];

export const products = {
  slava: [
    {
      id: "slava-orasi",
      name: "Baklava sa orasima",
      image: "/assets/img/menu/menu-item-1.png",
      description: "Kore, mleveni i seckani orasi, šećer i agda sa limunom.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        { id: "pakovanje", label: "Pakovanje", choices: standardPackages },
      ],
      variants: [
        {
          id: "mrsna-500",
          options: { varijanta: "mrsna", pakovanje: "500" },
          name: "Mrsna baklava sa orasima",
          amountLabel: "500 g",
          price: 2000,
        },
        {
          id: "mrsna-1000",
          options: { varijanta: "mrsna", pakovanje: "1000" },
          name: "Mrsna baklava sa orasima",
          amountLabel: "1 kg",
          price: 3500,
        },
        {
          id: "posna-500",
          options: { varijanta: "posna", pakovanje: "500" },
          name: "Posna baklava sa orasima",
          amountLabel: "500 g",
          price: 1800,
        },
        {
          id: "posna-1000",
          options: { varijanta: "posna", pakovanje: "1000" },
          name: "Posna baklava sa orasima",
          amountLabel: "1 kg",
          price: 3200,
        },
      ],
    },
    {
      id: "slava-pistaci",
      name: "Baklava sa pistaćima",
      image: "/assets/img/menu/menu-item-3.png",
      description: "Hrskave kore, bogat fil od pistaća i osvežavajuća agda sa limunom.",
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        { id: "pakovanje", label: "Pakovanje", choices: standardPackages },
      ],
      variants: [
        {
          id: "mrsna-500",
          options: { varijanta: "mrsna", pakovanje: "500" },
          name: "Mrsna baklava sa pistaćima",
          amountLabel: "500 g",
          price: 2400,
        },
        {
          id: "mrsna-1000",
          options: { varijanta: "mrsna", pakovanje: "1000" },
          name: "Mrsna baklava sa pistaćima",
          amountLabel: "1 kg",
          price: 4000,
        },
        {
          id: "posna-500",
          options: { varijanta: "posna", pakovanje: "500" },
          name: "Posna baklava sa pistaćima",
          amountLabel: "500 g",
          price: 2300,
        },
        {
          id: "posna-1000",
          options: { varijanta: "posna", pakovanje: "1000" },
          name: "Posna baklava sa pistaćima",
          amountLabel: "1 kg",
          price: 3800,
        },
      ],
    },
    {
      id: "slava-urmasice",
      name: "Urmašice",
      image: "/assets/img/menu/menu-item-5.png",
      description: "Domaće urmašice sa puterom, prelivene laganom agdom od limuna.",
      optionGroups: [{ id: "pakovanje", label: "Pakovanje", choices: standardPackages }],
      variants: [
        {
          id: "500",
          options: { pakovanje: "500" },
          name: "Mrsne urmašice",
          amountLabel: "500 g",
          price: 1500,
        },
        {
          id: "1000",
          options: { pakovanje: "1000" },
          name: "Mrsne urmašice",
          amountLabel: "1 kg",
          price: 2800,
        },
      ],
    },
  ],
  "svaki-dan": [
    {
      id: "baklava-po-komadu",
      name: "Baklava po komadu",
      image: "/assets/img/menu/baklavasroutker.600x434.jpg",
      description:
        "Izaberite svoju vrstu i komadno poručivanje za svaki dan i bez stresa.",
      customQuantity: true,
      defaultQuantity: 10,
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "ukus",
          label: "Ukus",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
            { value: "lesnici", label: "Lešnici" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", ukus: "orasi" },
          name: "Mrsna baklava po komadu",
          amountLabel: "1 komad",
          price: 90,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", ukus: "orasi" },
          name: "Posna baklava po komadu",
          amountLabel: "1 komad",
          price: 85,
        },
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", ukus: "pistaci" },
          name: "Mrsna baklava sa pistaćima",
          amountLabel: "1 komad",
          price: 100,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", ukus: "pistaci" },
          name: "Posna baklava sa pistaćima",
          amountLabel: "1 komad",
          price: 95,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-lesnici",
          options: { varijanta: "mrsna", ukus: "lesnici" },
          name: "Mrsna baklava sa lešnicima",
          amountLabel: "1 komad",
          price: 105,
        },
        {
          id: "posna-lesnici",
          options: { varijanta: "posna", ukus: "lesnici" },
          name: "Posna baklava sa lešnicima",
          amountLabel: "1 komad",
          price: 100,
        },
      ],
    },
    {
      id: "urmasice-po-komadu",
      name: "Urmašice po komadu",
      image: "/assets/img/menu/menu-item-5.png",
      description:
        "Mala, savršena poslastica za kafu, poslovni sastanak ili spontano druženje.",
      customQuantity: true,
      defaultQuantity: 10,
      optionGroups: [],
      variants: [
        {
          id: "komad",
          options: {},
          name: "Urmašica",
          amountLabel: "1 komad",
          price: 60,
        },
      ],
    },
    {
      id: "tamanica",
      name: "Tamanica",
      image: "/assets/img/menu/baklavasroutker.600x434.jpg",
      description:
        "20 komada za porodičan ili poslovni trenutak kada želite da sve bude u pravu meri.",
      customQuantity: true,
      defaultQuantity: 1,
      optionGroups: [
        { id: "varijanta", label: "Varijanta", choices: pastryOptions },
        {
          id: "ukus",
          label: "Ukus",
          choices: [
            { value: "orasi", label: "Orasi" },
            { value: "pistaci", label: "Pistaći" },
          ],
        },
      ],
      variants: [
        {
          id: "mrsna-orasi",
          options: { varijanta: "mrsna", ukus: "orasi" },
          name: "Tamanica · Mrsna · Orasi",
          amountLabel: "20 komada",
          price: 2100,
        },
        {
          id: "posna-orasi",
          options: { varijanta: "posna", ukus: "orasi" },
          name: "Tamanica · Posna · Orasi",
          amountLabel: "20 komada",
          price: 2000,
        },
        // TODO: Privremene cene — potvrditi sa mušterijom.
        {
          id: "mrsna-pistaci",
          options: { varijanta: "mrsna", ukus: "pistaci" },
          name: "Tamanica · Mrsna · Pistaći",
          amountLabel: "20 komada",
          price: 2450,
        },
        {
          id: "posna-pistaci",
          options: { varijanta: "posna", ukus: "pistaci" },
          name: "Tamanica · Posna · Pistaći",
          amountLabel: "20 komada",
          price: 2350,
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
