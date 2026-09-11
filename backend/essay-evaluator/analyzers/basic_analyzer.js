function analyzeBasic(text) {
    const words = text.toLowerCase().match(/[a-z]{3,}/g) || [];
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim());
    const paragraphs = text.split(/\n\s*\n/).filter(paragraph => paragraph.trim());
    const uniqueWords = new Set(words).size;
    const vocabularyScore = words.length ? Math.round(uniqueWords / words.length * 100) : 0;
    const lengthScore = Math.min(words.length / 150, 1) * 30;
    const structureScore = Math.min(sentences.length / 5, 1) * 20
        + Math.min(paragraphs.length / 2, 1) * 15;
    const score = Math.round(lengthScore + vocabularyScore * 0.25
        + (sentences.length ? 15 : 0) + structureScore
        + (/[.!?]/.test(text) ? 5 : 0));

    return {
        score: Math.min(score, 100),
        wordCount: words.length,
        uniqueWords,
        vocabularyScore,
        sentenceCount: sentences.length,
        paragraphCount: paragraphs.length,
        readabilityScore: sentences.length ? Math.round(Math.max(0, 100 - words.length / sentences.length * 2)) : 0,
        punctuationUsed: /[.!?]/.test(text)
    };
}

module.exports = analyzeBasic;