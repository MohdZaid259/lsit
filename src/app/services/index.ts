import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.HYGRAPH_API || "");

// Get all categories
export async function getAllCategories() {
  const query = gql`
    {
      categories {
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
  return client.request(query);
}

// Get all products for a specific category
export async function getProductsByCategorySlug(slug: string) {
  const query = gql`
    query ProductsByCategory($slug: String!) {
      category(where: { slug: $slug }) {
        name
        slug
        description
        image {
          url
        }
        subCategories {
          name
          slug
          products {
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
  return client.request(query, { slug });
}

// get specific product by slug
export async function getProductBySubCategorySlug(slug: string) {
  const query = gql`
    query ProductDetail($slug: String!) {
      product(where: { slug: $slug }) {
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
  return client.request(query, { slug });
}

export async function getAllProducts() {
  const query = gql`
    {
      products {
        name
        slug
      }
    }
  `;
  return client.request(query);
}
