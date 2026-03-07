const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
    console.log("Getting pack info...");

    // Find all index files in .git/objects/pack/
    const packDir = path.join('.git', 'objects', 'pack');
    let packFiles = [];
    if (fs.existsSync(packDir)) {
        packFiles = fs.readdirSync(packDir).filter(f => f.endsWith('.idx')).map(f => path.join(packDir, f));
    }

    if (packFiles.length === 0) {
        console.log("No pack files found.");
        process.exit(0);
    }

    let allBlobs = [];

    for (const idx of packFiles) {
        console.log(`Analyzing ${idx}...`);
        const verifyPack = execSync(`git verify-pack -v "${idx}"`, { maxBuffer: 1024 * 1024 * 50 }).toString();

        const blobs = verifyPack.split('\n')
            .filter(line => line.includes(' blob '))
            .map(line => {
                const parts = line.trim().split(/\s+/);
                return { sha: parts[0], size: parseInt(parts[2], 10) };
            });
        allBlobs.push(...blobs);
    }

    allBlobs.sort((a, b) => b.size - a.size);
    const top20 = allBlobs.slice(0, 20);

    console.log("Getting tree info...");
    const revList = execSync('git rev-list --objects --all', { maxBuffer: 1024 * 1024 * 50 }).toString();

    const shaMap = new Map();
    revList.split('\n').forEach(line => {
        const spaceIdx = line.indexOf(' ');
        if (spaceIdx > 0) {
            const sha = line.substring(0, spaceIdx);
            const name = line.substring(spaceIdx + 1);
            shaMap.set(sha, name);
        }
    });

    console.log("\nTop 20 Largest Files in Git History:");
    console.log("--------------------------------------------------");

    top20.forEach(b => {
        const sizeMb = (b.size / (1024 * 1024)).toFixed(2);
        const name = shaMap.get(b.sha) || 'unknown (might be a deleted/unreferenced object)';
        console.log(`${sizeMb.padStart(8)} MB | ${b.sha.substring(0, 8)} | ${name}`);
    });

} catch (e) {
    console.error("Error:", e.message);
}
