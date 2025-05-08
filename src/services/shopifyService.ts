import axios from 'axios';

interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
}

class ShopifyService {
  private storefrontToken: string;
  private storeUrl: string;

  constructor(storefrontToken: string, storeUrl: string) {
    this.storefrontToken = storefrontToken;
    this.storeUrl = storeUrl;
  }

  async getProducts(): Promise<ShopifyProduct[]> {
    try {
      const response = await axios.post(
        `https://${this.storeUrl}/api/2023-10/graphql.json`,
        {
          query: `
            query {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    description
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    images(first: 1) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        },
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': this.storefrontToken,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.data.products.edges.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        description: edge.node.description,
        price: edge.node.priceRange.minVariantPrice.amount,
        images: edge.node.images.edges.map((img: any) => img.node.url),
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async createCheckout(productId: string): Promise<string> {
    try {
      const response = await axios.post(
        `https://${this.storeUrl}/api/2023-10/graphql.json`,
        {
          query: `
            mutation {
              checkoutCreate(input: {
                lineItems: [{ variantId: "${productId}", quantity: 1 }]
              }) {
                checkout {
                  id
                  webUrl
                }
              }
            }
          `
        },
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': this.storefrontToken,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.data.checkoutCreate.checkout.webUrl;
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw error;
    }
  }
}

export default ShopifyService; 