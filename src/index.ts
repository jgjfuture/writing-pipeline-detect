import { detect } from "./detect";
import { resolve } from "./resolve";


async function main() {
    const detectedItems = await detect();
    for(const item of detectedItems) {
        const metaId = item.id;
        console.log("Detected:", metaId);
        await resolve(metaId);
    }
}

main();