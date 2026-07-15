window.classFundStore = {
    version: 1,
    totalBudget: 3200,
    generatedAt: "2026-07-15T06:26:04.089Z",
    recordCount: 22,
    chunkFiles: [
        "data/chunks/classFundData.chunk.001.js",
        "data/chunks/classFundData.chunk.002.js",
        "data/chunks/classFundData.chunk.003.js",
    ]
};
window.classFundDataChunks = [];
window.registerClassFundChunk = function registerClassFundChunk(chunk) {
    if (!window.classFundDataChunks) {
        window.classFundDataChunks = [];
    }
    window.classFundDataChunks.push(chunk);
};
