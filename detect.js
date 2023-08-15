import { notion, databaseId } from "./notion.js"

export async function detect() {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    property: 'Detected',
                    checkbox: {
                        equals: false,
                    },
                },
                {
                    property: "paper",
                    files: {
                        is_not_empty: true,
                    },
                }
            ]
        },
    });

    const items = response.results;
    return items;
}

console.log(await detect())
