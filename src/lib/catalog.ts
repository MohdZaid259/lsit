export type Product = {
  id: string;
  name: string;
  slug: string;
  summary?: string;
  images: string[]; // first is main
};

export type Subcategory = {
  key: string;
  title: string;
  coverImage?: string;
  products: Product[];
};

export type Category = {
  key: string;
  title: string;
  coverImage?: string;
  subcategories: Subcategory[];
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const placeholder = (q: string, w = 1200, h = 480) =>
  `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(q)}`;

// Minimal sample data based on your outline.
function makeProduct(name: string): Product {
  return {
    id: slugify(name),
    name,
    slug: slugify(name),
    summary: "Durable, tested fabric engineered for real-world use.",
    images: [
      `/placeholder.svg?height=900&width=1200&query=${encodeURIComponent(
        name + " fabric macro"
      )}`,
      `/placeholder.svg?height=900&width=1200&query=${encodeURIComponent(
        name + " texture detail"
      )}`,
      `/placeholder.svg?height=900&width=1200&query=${encodeURIComponent(
        name + " weave close-up"
      )}`,
      `/placeholder.svg?height=900&width=1200&query=${encodeURIComponent(
        name + " in use"
      )}`,
    ],
  };
}

export const CATALOG: Category[] = [
  {
    key: "materials",
    title: "Materials",
    coverImage: placeholder("Materials category cover image"),
    subcategories: [
      {
        key: "laminated",
        title: "Laminated",
        coverImage: placeholder("Laminated materials cover"),
        products: [
          "concord 2",
          "concord 3",
          "concord 4",
          "concord 5",
          "foxtrot zero 2",
          "foxtrot zero 4",
          "graz 2",
          "graz 3",
          "graz 4",
          "graz 5",
          "linz 3",
        ].map(makeProduct),
      },
      {
        key: "wool",
        title: "Wool",
        coverImage: placeholder("Wool fabrics cover"),
        products: [
          "postman echo 220",
          "postman echo 265",
          "postman echo 330",
        ].map(makeProduct),
      },
      {
        key: "military-police",
        title: "Military & Police",
        coverImage: placeholder("Military and police textiles cover"),
        products: [], // can be filled later
      },
    ],
  },
  {
    key: "industrial",
    title: "Industrial",
    coverImage: placeholder("Industrial category cover image"),
    subcategories: [
      {
        key: "jackets",
        title: "Jackets",
        coverImage: placeholder("Industrial jackets cover"),
        products: [
          "Men's jacket M70003",
          "Men's jacket M70008",
          "Men's jacket M70007",
          "Men's jacket M70006",
          "Men's jacket M30026",
          "Men's jacket M70002",
        ].map(makeProduct),
      },
      {
        key: "trousers",
        title: "Trousers",
        coverImage: placeholder("Industrial trousers cover"),
        products: [
          "Men's pants M73006",
          "Men's pants M73007",
          "Men's pants M73001",
          "Men's pants M73003",
          "Men's pants M73004",
        ].map(makeProduct),
      },
    ],
  },
  {
    key: "uniform",
    title: "Uniform",
    coverImage: placeholder("Uniform category cover image"),
    subcategories: [],
  },
];

export function allCategories() {
  return CATALOG;
}

export function getCategoryByKey(key: string) {
  return CATALOG.find((c) => c.key === key);
}

export function getProduct(categoryKey: string, productSlug: string) {
  const cat = getCategoryByKey(categoryKey);
  if (!cat) return undefined;
  for (const sub of cat.subcategories) {
    const p = sub.products.find((x) => x.slug === productSlug);
    if (p) return { product: p, category: cat, subcategory: sub };
  }
  return undefined;
}
