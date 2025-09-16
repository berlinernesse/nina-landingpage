import spell1 from "../assets/spell-1.jpg";
import demon1 from "../assets/demon-1.jpg";


export const productCategories = {
  spells: { id: "spells", title: "Spells & Rituals", blurb: "Custom workings aligned to intention and timing." },
  demons: { id: "demons", title: "Demons", blurb: "Spirit workings with respect and boundaries." },
};

export const products = [
  // --- Spells & Rituals (3) ---
  {
    id: "love-ritual-1",
    slug: "love-ritual-1",
    category: "spells",
    name: "Love Ritual (With A Spicy Demon)",
    price: 300.00,
    description: "Wanna make em so in love with you that they're literally fucking obsessed with you?? Like, addicted to you?? BET! I'll make em come crawling back so in love with you they'll be begging at your feet for you to love them and take em back! **This listing is for love ritual with one of my wilder, but powerful AF demons, typically of higher rank, being summoned**s",
    image: spell1,
    etsyUrl: "",
  },
  {
    id: "love-ritual-2",
    slug: "love-ritual-2",
    category: "spells",
    name: "Love Ritual (With One Not Spicy Demon)",
    price: 300.00,
    description: "This option is for a love ritual with a not-so-spicy demon.",
    image: spell1,
    etsyUrl: "",
  },
  {
    id: "null",
    slug: "null",
    category: "spells",
    name: "null",
    price: 35.0,
    description: "null",
    image: spell1,
    etsyUrl: "",
  },

  // --- Demons (3) ---
  {
    id: "demon-spicy",
    slug: "demon-spicy",
    category: "demons",
    name: "Demon - Add On (Spicy Demon) Added To Ritual)",
    price: 75.00,
    description: "Spicy Add On - This option is if you would like to add a second, third, or fourth spicy demon to the ritual. By using multiple demons, it increases the power of the ritual work, but also may be needed based on needs or situation, or specific demon abilities.",
    image: demon1,
    etsyUrl: "",
  },
  {
    id: "demon-not-spicy",
    slug: "demon-not-spicy",
    category: "demons",
    name: "Demon Add-On (Not Spicy)",
    price: 70.0,
    description: "Work focused on authority and boundary setting.",
    image: demon1,
    etsyUrl: "",
  },
  {
    id: "gaap-clarity",
    slug: "gaap-clarity",
    category: "demons",
    name: "Gaap — Clarity & Transition",
    price: 65.0,
    description: "Clarity during transitions; insight and calm.",
    image: demon1,
    etsyUrl: "",
  },
];
