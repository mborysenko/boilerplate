import { configuration } from "../configuration";
import * as fs from "fs-extra";
import { rimrafSync } from "rimraf";
const { dist, filesToClean, projectDir } = configuration;

console.log(`Removing ${dist} folder...`);
fs.removeSync(dist);

console.log(`Removing ${filesToClean.join(", ")} files ...`);
rimrafSync(filesToClean, {
    glob: {
        cwd: projectDir,
    }
});

