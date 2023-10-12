import { createDirectus ,staticToken, rest} from "@directus/sdk";

/* const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string, {
  auth: {
    staticToken: process.env.ADMIN_TOKEN as string,
  },
}); */


const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
  .with(staticToken(process.env.ADMIN_TOKEN as string))
  .with(rest());
export default directus;
