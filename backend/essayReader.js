

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import analyzeEssay from "./essayAnalyzer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "uploads", "essay51.txt");

const essay = fs.readFileSync(filePath, "utf-8");

console.log("Essay received:");
console.log(essay);

const result = analyzeEssay(essay);

console.log("Analysis Result:");
console.log(result);