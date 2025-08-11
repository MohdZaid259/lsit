export interface Product {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  gallery?: { url: string }[];
  fabric?: string;
  useCase?: string;
  compliance?: string;
  finish?: string;
  subCategories: {
    name: string;
    category: {
      name: string;
      image?: { url: string };
    };
  };
}

interface SubCategory {
  name: string;
  slug: string;
  products?: Product[];
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  image?: { url: string };
  subCategories?: SubCategory[];
}
