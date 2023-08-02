import { detect } from "./detect.js";
import { resolve } from "./resolve.js";
import { publishMessage, makePublishData } from "./publish.js";
import { topicName } from "./pubsub.js";

async function main() {
    const detectedItems = await detect();
    for(const item of detectedItems) {
        const metaId = item.id;
        const paper = item.properties.paper;
        const imageURL = paper.files[0].file.url;
        console.log("Detected:", metaId);
        publishMessage(topicName, makePublishData(metaId, imageURL));
        await resolve(metaId);
    }
}

main();