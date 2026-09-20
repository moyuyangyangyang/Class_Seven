window.classFundStore = {
    version: 1,
    totalBudget: 3200,
    generatedAt: "2026-09-20T09:39:08.000Z",
    recordCount: 32,
    chunkFiles: [
        "classFundData.chunk.001.js",
        "classFundData.chunk.002.js",
        "classFundData.chunk.003.js",
    ]
};
window.classFundDataChunks = [];
window.registerClassFundChunk = function registerClassFundChunk(chunk) {
    if (!window.classFundDataChunks) {
        window.classFundDataChunks = [];
    }
    window.classFundDataChunks.push(chunk);
};
