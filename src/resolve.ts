import { notion } from "./notion"

export async function resolve(id: string): Promise<void> {
    await notion.pages.update({
        page_id: id,
        properties: {
            Detected: {
                checkbox: true,
            },
        },
    });
}