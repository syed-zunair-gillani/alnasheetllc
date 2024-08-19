import { gql } from "@apollo/client";

export const QServicesFromCat = `
query categoryPost($id: ID! = "") {
            sCategory(id: $id, idType: DATABASE_ID) {
              slug
              name
              services {
                nodes {
                  title
                  slug
                  uri
                }
              }
            }
          }
`;