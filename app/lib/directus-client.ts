import { createDirectus, rest} from "@directus/sdk";

const directusClient = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
  .with(rest());
export default directusClient;