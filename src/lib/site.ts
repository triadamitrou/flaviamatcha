/**
 * Everything the Flavia site knows, in one file.
 *
 * Sources, all read 26 October 2026:
 *  - Google Business Profile "Flavia Cafe & Matcha": address, opening hours,
 *    4.9 from 431 reviews, the owner's own post, and the photographs.
 *  - Instagram @flaviacafederby: the bio lines and the social link.
 *  - Uber Eats store listing: every menu item and price below.
 *  - Food Standards Agency (api.ratings.food.gov.uk): trading name and
 *    address, rating 5, inspected 21 January 2026.
 *  - Companies House 15559004: FLAVIA CAFE & BAKERY LTD, incorporated
 *    13 March 2024.
 *
 * Nothing here is invented. Where the cafe has not published something, the
 * field is absent rather than guessed.
 */

export const site = {
  name: "FLAVIA",
  fullName: "Flavia Cafe & Matcha Bar",
  tagline: "Cafe & Matcha Bar",
  legalName: "Flavia Cafe & Bakery Ltd",
  blurb:
    "Speciality coffee and ceremonial matcha, hand whisked to order, in the Factory Food Court on Meadow Road.",
  address: {
    line1: "Factory Food Court",
    line2: "Northcliffe House, Meadow Road",
    city: "Derby",
    postcode: "DE1 2BH",
  },
  geo: { lat: 52.9230092, lng: -1.4664552 },
  directions:
    "https://maps.app.goo.gl/jjsFVuDBMuHWLaAB8",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/flaviacafederby/" },
  ],
  rating: { score: "4.9", count: 431, source: "Google" },
};

export const nav = [
  { label: "Counter", href: "/#counter" },
  { label: "Menu", href: "/#menu" },
  { label: "Visit", href: "/#visit" },
];

/** Google Business Profile, as the owner maintains them. */
export const hours = [
  { day: "Monday", open: "4 pm", close: "9 pm" },
  { day: "Tuesday", open: "4 pm", close: "9 pm" },
  { day: "Wednesday", open: "4 pm", close: "9 pm" },
  { day: "Thursday", open: "4 pm", close: "9 pm" },
  { day: "Friday", open: "4 pm", close: "10 pm" },
  { day: "Saturday", open: "9 am", close: "10 pm" },
  { day: "Sunday", open: "9:30 am", close: "9 pm" },
];

/** Their own three lines, from the Instagram bio. */
export const billing = [
  "Specialty Coffee",
  "Ceremonial Matcha",
  "Fresh Bakes",
];

/** The neon on their wall. Three signs, three colours, in their order. */
export const neon = [
  { text: "#Matcha", tone: "pink" as const },
  { text: "made me", tone: "green" as const },
  { text: "do it", tone: "white" as const },
];

/** Posted by the owner on their Google listing, 29 June 2026. */
export const fromTheOwner =
  "Freshly Hand whisk Matcha to each order. Huge selection of refreshing flavours. We use only the finest of ingredients and not compromise on flavour.";

export const story = [
  "Flavia opened as a matcha bar first and a coffee shop second, and the order still shows. Every matcha is whisked by hand when it is ordered, from ceremonial grade, and the flavour list runs well past the latte.",
  "The room sits inside the Factory Food Court on Meadow Road: black fluted walls, brass-edged marble, and a ceiling of light. It stays open into the evening, later at the weekend than most cafes in Derby manage.",
  "The kitchen bakes its own. Stuffed cookies, cornflake tart, croissants in the morning and Turkish pide through the day.",
];

/** What is on the counter. Photographs, not claims. */
export const counter = [
  { img: "/img/matcha-iced.jpg", alt: "Iced matcha latte in a tall glass", label: "Iced matcha" },
  { img: "/img/cakes.jpg", alt: "Strawberry cheesecake slices in the counter", label: "The cake counter" },
  { img: "/img/matcha-hot.jpg", alt: "Hot matcha latte in a glass cup on marble", label: "Hot matcha" },
  { img: "/img/jacket.jpg", alt: "Jacket potato with cheese, beans and salad", label: "Jacket potatoes" },
  { img: "/img/cappuccino.jpg", alt: "Cappuccino held in a green cup", label: "Coffee" },
  { img: "/img/hot-chocolate.jpg", alt: "Signature hot chocolate topped with cream", label: "Hot chocolate" },
];

type Item = { name: string; note?: string; price?: string };
type Group = { title: string; note?: string; items: Item[] };

/** Uber Eats, 26 October 2026. Prices are theirs, not estimates. */
export const menu: Group[] = [
  {
    title: "Iced matcha",
    note: "Ceremonial grade, whisked to order",
    items: [
      { name: "Iced matcha latte", price: "5.45" },
      { name: "Iced banana bread matcha", note: "Banana and cinnamon", price: "5.95" },
      { name: "Iced strawberry matcha", price: "5.95" },
      { name: "Iced blueberry matcha", price: "5.95" },
      { name: "Iced passion fruit matcha", price: "5.95" },
      { name: "Iced white chocolate matcha", price: "6.95" },
      { name: "Strawberry and cream matcha", note: "Whole milk only", price: "6.95" },
      { name: "Pink Panther matcha", note: "White chocolate, blueberry, coconut", price: "6.95" },
      { name: "Dubai matcha", note: "Chocolate and pistachio", price: "6.95" },
      { name: "Flavia on the peach", note: "Peach, cinnamon, oat milk", price: "6.95" },
      { name: "Sunny melon matcha", price: "6.95" },
      { name: "Matcha colada", price: "6.95" },
      { name: "Mango matcha", price: "6.95" },
      { name: "Strawberry matcha lemonade", price: "6.95" },
      { name: "Matcha frappe", price: "6.95" },
      { name: "Iced matcha chai latte", price: "6.95" },
      { name: "Iced turbo matcha", note: "With a shot of espresso", price: "6.95" },
    ],
  },
  {
    title: "Hot matcha",
    items: [
      { name: "Hot matcha latte", price: "5.45" },
      { name: "Hot banana bread matcha", price: "5.95" },
      { name: "Hot tiramisu matcha", price: "5.95" },
      { name: "Hot matcha chai latte", price: "5.95" },
      { name: "Hot turbo matcha coffee latte", price: "5.95" },
      { name: "Hot honey and cinnamon matcha", note: "Real honey, not syrup", price: "6.95" },
    ],
  },
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "4.50" },
      { name: "Americano", price: "4.95" },
      { name: "Cappuccino", price: "4.95" },
      { name: "Flat white", price: "4.95" },
      { name: "Latte", price: "4.95" },
      { name: "Spanish latte", note: "Condensed milk", price: "5.45" },
      { name: "Chai latte", price: "5.65" },
      { name: "Mocha", price: "6.35" },
      { name: "Dirty chai latte", price: "6.35" },
      { name: "White mocha", price: "6.95" },
    ],
  },
  {
    title: "Iced coffee",
    items: [
      { name: "Iced flat white", price: "4.95" },
      { name: "Iced latte", price: "4.95" },
      { name: "Iced Spanish latte", price: "5.45" },
      { name: "Iced americano", price: "5.35" },
      { name: "Iced chai latte", price: "5.95" },
      { name: "Frappe", price: "5.95" },
      { name: "Iced mocha", price: "6.35" },
      { name: "Iced dirty chai latte", price: "6.35" },
      { name: "Iced white mocha", price: "6.95" },
    ],
  },
  {
    title: "Tea",
    items: [
      { name: "Egyptian mint", note: "Caffeine free", price: "3.95" },
      { name: "English breakfast", price: "3.95" },
      { name: "Sapphire Earl Grey", price: "3.95" },
      { name: "Organic Darjeeling", price: "3.95" },
      { name: "Dragonwell green tea", price: "3.95" },
      { name: "Decaf Ceylon", price: "3.95" },
      { name: "Wild Encounter", note: "Red berries and tropical fruit", price: "3.95" },
      { name: "Desi chai", note: "Whole milk, sugar already in", price: "4.00" },
    ],
  },
  {
    title: "Signature hot chocolate",
    items: [
      { name: "Cherry Bakewell", price: "6.95" },
      { name: "The Ferrero", price: "6.95" },
      { name: "Toasted marshmallow", price: "6.95" },
      { name: "Banoffee pie", price: "6.95" },
      { name: "Honeycomb Crunchie", price: "6.95" },
      { name: "Terry's Chocolate Orange", price: "6.95" },
      { name: "Sweet delight", note: "Ruby chocolate", price: "6.95" },
      { name: "Buenolicious", price: "6.95" },
      { name: "Mint mayhem", price: "6.95" },
      { name: "Cinnamon", price: "6.95" },
      { name: "Vanilla", price: "6.95" },
      { name: "Hazelnut", price: "6.95" },
      { name: "Caramel swirl", price: "6.95" },
      { name: "White chocolate and cinnamon", price: "6.95" },
    ],
  },
  {
    title: "Classic hot chocolate",
    items: [
      { name: "Classic milk", price: "5.95" },
      { name: "Classic white", price: "6.45" },
    ],
  },
  {
    title: "Smoothies",
    items: [
      { name: "Mango and dragon fruit", price: "6.95" },
      { name: "Super green", note: "Banana, pineapple, kale, ginger, lime", price: "6.95" },
      { name: "Pineapple, mango and passion fruit", price: "6.95" },
      { name: "Strawberry and banana", price: "6.95" },
      { name: "Super berry", price: "6.95" },
      { name: "Blue spirulina", price: "6.95" },
    ],
  },
  {
    title: "Protein shakes",
    items: [
      { name: "Vanilla matcha", price: "7.95" },
      { name: "Mixed berry", price: "7.95" },
      { name: "Chocolate and peanut butter", note: "Vegan with an alternative milk", price: "7.95" },
      { name: "Cacao and banana", price: "7.95" },
      { name: "Salted caramel", price: "7.95" },
    ],
  },
  {
    title: "Mini pide",
    note: "Turkish style, served sliced in half",
    items: [
      { name: "Margherita", price: "7.95" },
      { name: "Cheesy garlic", price: "7.95" },
      { name: "Spinach and mozzarella", price: "7.95" },
    ],
  },
  {
    title: "Bakes",
    items: [
      { name: "All butter croissant", price: "2.50" },
      { name: "Cornflake tart", price: "4.50" },
      { name: "Kinder Bueno stuffed cookie", price: "5.00" },
      { name: "Dubai stuffed cookie", note: "Pistachio kunafa", price: "5.00" },
      { name: "Croissant cup chocolate", price: "5.50" },
    ],
  },
  {
    title: "Cold drinks",
    items: [
      { name: "Cold press Valencia orange", price: "3.45" },
      { name: "Cold press Pink Lady apple", price: "3.45" },
      { name: "Vit Hit Boost", price: "3.45" },
      { name: "Vit Hit Detox", price: "3.45" },
      { name: "Vit Hit Immunitea", price: "3.45" },
      { name: "Vit Hit apple and elderflower", price: "3.45" },
      { name: "Calypso strawberry lemonade", price: "3.95" },
      { name: "Calypso ocean blue lemonade", price: "3.95" },
      { name: "Dandelion and burdock", price: "3.50" },
      { name: "Jolly's Cornish cola", price: "2.95" },
    ],
  },
];

export const menuNote =
  "Prices as listed for delivery. Waffles, crepes, gelato and sundaes are also served in the cafe.";

export const gallery = [
  { img: "/img/neon-cup.jpg", alt: "Neon signs reading hashtag Matcha made me do it, beside a Flavia takeaway cup" },
  { img: "/img/cup-label.jpg", alt: "Iced matcha in a Flavia cup on a brass trolley" },
  { img: "/img/room.jpg", alt: "The dining room, with fluted black walls and a lit ceiling" },
];
