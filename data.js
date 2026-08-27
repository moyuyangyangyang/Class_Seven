window.classFundStore = {
    version: 1,
    totalBudget: 3200,
    generatedAt: "2026-08-27T13:13:00.000Z",
    recordCount: 25,
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