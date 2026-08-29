function analyzeEssay(essay) {
    const wordCount = essay.trim().split(/\s+/).length;

    let score = 0;

    if (wordCount >= 300) {
        score += 35;
    }

    if (essay.length >= 2500) {
        score += 30;
    }

    if (essay.includes(".")) {
        score += 20;
    }

    let review;

    if (score >= 70) {
        review = "Good";
    } else {
        review = "Average";
    }

    let suggestion;
if (review === "Good") {
    suggestion = "Continue improving vocabulary and add more supporting examples.";
} else {
    suggestion = "Add more explanation, supporting examples, and improve sentence structure.";
}

let recommendations = [];

if (wordCount < 300) {
    recommendations.push(
        "Try to develop your ideas with more explanation."
    );
}

if (score >= 70) {
    recommendations.push(
        "Continue improving vocabulary and add more supporting examples."
    );
} else {
    recommendations.push(
        "Improve the explanation of your ideas and add relevant examples."
    );
}

return {
    wordCount,
    score,
    review,
    recommendations
};

}

export default analyzeEssay;