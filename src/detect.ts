import { notion, databaseId } from "./notion"
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export async function detect(): Promise<DatabaseObjectResponse[]> {
    const response = await notion.databases.query({
        database_id: databaseId!,
        filter: {
            property: 'Detected',
            checkbox: {
                equals: false,
            },
        }
    });

    const items = response.results as DatabaseObjectResponse[];
    return items;
}
