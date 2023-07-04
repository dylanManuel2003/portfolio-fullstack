"use client"
import {
    Blogs,
} from "src/components/Sections";
import { gql, GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";
import dotenv from 'dotenv';
dotenv.config();

export default async function BlogPage({ props }) {
  const [blogs, setBlogs] = useState(null)
  const caisyID = process.env.CAISY_PROJECT_ID
  // console.log(caisyID)
  // console.log(process.env)

  useEffect(() => {
    const data = getBlogs()
    setBlogs(data)
    console.log(blogs)
  }, [])

  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${caisyID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": process.env.CAISY_API_KEY,
      },
    }
  );
  
  const getBlogs = async () => {
    const query =
    gql`
    query MyQuery {
      BlogArticle(id: "336c72a1-9982-44b1-81de-55477e1879a5") {
        subTitle
        title
        id
      }
    }      
    `;
  
    const data = JSON.stringify(await client.request(query))
    console.log(data)
    return data
  }

    return (
        <main className="flex flex-col items-center ">
          <div className="w-full h-auto">
          </div>
          <Blogs />
        </main>
      );
  }  

// export async function getStaticProps({ params }) {
//     const gqlResponse = await client.request(
//       gql`
//       query MyQuery {
//         BlogArticle(id: "336c72a1-9982-44b1-81de-55477e1879a5") {
//           subTitle
//           title
//           id
//         }
//       }      
//       `,
//       { slug: params?.slug }
//     );

//     const data = await gqlResponse.request(query)
//     console.log(JSON.stringify(data, undefined, 2))
//     return {
//       props: gqlResponse?.allBlogArticle?.edges[0]?.node || {},
//     };
// }


