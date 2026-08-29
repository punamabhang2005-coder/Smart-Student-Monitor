import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const historyPath = path.join(
    __dirname,
    "history",
    "student001_history.txt"
);

const history = fs.readFileSync(historyPath, "utf-8");

const essays = history
    .split(/--- ESSAY \d+ ---/)
    .map(essay => essay.trim())
    .filter(essay => essay.length > 0);

console.log("Number of previous essays:", essays.length);



const newEssayPath = path.join(
    __dirname,
    "uploads",
    "essay51.txt"
);

const newEssay = fs.readFileSync(newEssayPath, "utf-8");

console.log("New Essay #51:");
console.log(newEssay);

console.log("Previous essays:", essays.length);






//backend calculate the avg of 50 previous essay

const totalWords = essays.reduce((total, essay) => {
    return total + essay.trim().split(/\s+/).length;
}, 0);

const averageWords = Math.round(totalWords / essays.length);

const newEssayWords = newEssay.trim().split(/\s+/).length;

console.log("Average words in previous 50 essays:", averageWords);
console.log("Words in Essay #51:", newEssayWords);






// making backend to give first history based result
let review;

if (newEssayWords >= averageWords * 0.8) {
    review = "Good";
} else {
    review = "Average";
}

console.log("Review for Essay #51:", review);