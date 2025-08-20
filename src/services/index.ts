import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.HYGRAPH_API!);

// Get all categories
export async function getAllCategories(locale: "en" | "ar" = "en") {
  const query = gql`
    query GetAllCategories($locale: Locale!) {
      categories(locales: [$locale, en]) {
        name
        slug
        image {
          url
        }
        subCategories {
          name
          slug
          products {
            name
          }
        }
      }
    }
  `;
  return client.request(query, { locale });
}

// Get all products for a specific category
export async function getProductsByCategorySlug(
  slug: string,
  locale: "en" | "ar" = "en"
) {
  const query = gql`
    query ProductsByCategory($slug: String!, $locale: Locale!) {
      category(where: { slug: $slug }, locales: [$locale, en]) {
        name
        slug
        description
        image {
          url
        }
        subCategories {
          name
          slug
          products(first: 50) {
            name
            slug
            description
            gallery {
              url
            }
          }
        }
      }
    }
  `;
  return client.request(query, { slug, locale });
}

// Get specific product by slug
export async function getProductBySubCategorySlug(
  slug: string,
  locale: "en" | "ar" = "en"
) {
  const query = gql`
    query ProductDetail($slug: String!, $locale: Locale!) {
      product(where: { slug: $slug }, locales: [$locale, en]) {
        name
        slug
        description
        gallery {
          url
        }
        useCase
        compliance
        finish
        fabric
        subCategories {
          name
          category {
            name
            image {
              url
            }
          }
        }
      }
    }
  `;
  return client.request(query, { slug, locale });
}

// Get all products (names + slugs)
export async function getAllProducts(locale: "en" | "ar" = "en") {
  const query = gql`
    query GetAllProducts($locale: Locale!) {
      products(locales: [$locale, en]) {
        name
        slug
      }
    }
  `;
  return client.request(query, { locale });
}
