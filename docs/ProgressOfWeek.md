# Week 1 Progress

## Date
18 July 2026

## Work Completed
- Created GitHub repository.
- Created project folder structure.
- Started project documentation.
- Discussed project modules.

## Next Week Plan
- Finalize system architecture.
- Prepare database design.
- Assign module responsibilities.

-----------------------------------------------------------------------------------------------------------------------------------------------------
# Week 2 Progress
 
## Date
22 July 2026

## Work Completed
- Updated the main README.md file.
- Organized the project folders on GitHub.
- Continued project documentation.
- Recorded Meeting 2 notes.
- Created the project schedule.
- Discussed project simplification.
- Distributed responsibilities among team members.
- Decided to keep the frontend simple during the initial phase.

## Next Week Plan
- Finalize the system architecture.
- Finalize the required data fields.
- Design the database structure.
- Prepare the backend workflow.
- Start simple frontend design.
- Continue updating project documentation.

- ---------------------------------------------------------------------------------------------------------------------------------------------------------------
# Week 3 Progress

## Date
29 July 2026

## Work Completed

- Discussed how existing student essay data can be used in the Smart Student Monitor.
- Considered a dataset of around 50 essays with their mentor reviews.
- Discussed maintaining individual essay and review history for each student.
- Discussed what should happen when a student submits a new essay.
- Prepared an initial backend workflow from essay submission to review generation.
- Started studying suitable algorithms for finding relevant previous essays and generating a personalized review.

## Main Focus

The work focused on two main questions:

1. How will the existing 50 essay data points and mentor reviews be used in the project?
2. What exactly happens in the backend when a new essay is submitted, and which algorithm will be used to generate the review?

## Initial Backend Workflow

Student submits new essay  
↓  
Backend receives the essay  
↓  
Identify the student  
↓  
Retrieve the student's previous essays and reviews  
↓  
Analyze the new essay using the student's history  
↓  
Generate a personalized review  
↓  
Save the essay and review  
↓  
Use the new data in the student's future history

## Next Week Plan

- Finalize how existing essay data will be used.
- Finalize the backend workflow.
- Decide the algorithm for generating reviews.
- Start implementing the basic backend.

 ## Week 4 Progress
 Date -: 30/08/2026
 
 Progress Update

we discussed the next phase of the project and how to move from the current fixed rule-based approach toward AI/ML-based essay analysis.
Discussion and Work Started
The current rule-based system was considered as an initial prototype only.
As suggested, the next phase will focus on using AI/NLP techniques for essay analysis.
We discussed converting each essay into meaningful features rather than only checking word count.
Started working on a feature extraction module in the Node.js backend.
Initial Features
The features currently being extracted include:
Word count
Unique words
Vocabulary diversity
Average sentence length
These features will be extracted from both the student's previous 50 essays and the new Essay #51.
AI/NLP Next Phase
After basic feature extraction, we plan to explore AI/NLP techniques for:
Understanding the semantic meaning of essays
Comparing the new essay with previous essays
Identifying changes in writing patterns
Detecting improvement or weak areas
Generating more personalized feedback

## next week plan :
improve the system using NLP for semantic analysis and Machine Learning for more accurate essay classification and personalized recommendations.
