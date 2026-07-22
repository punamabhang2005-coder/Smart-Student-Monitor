 System Architecture

## Overview

The Smart Student Mentor system is designed using a modular architecture. Each component has a specific responsibility, making the system secure, scalable, and easy to maintain.

## System Architecture

```text
Student / Mentor
       │
       ▼
Frontend (React)
       │
     HTTPS
       │
       ▼
API Gateway
       │
       ▼
-------------------------------------
| Authentication | Core API | File Service |
-------------------------------------
       │
       ▼
Database + File Storage
       │
       ▼
AI / NLP Engine
       │
       ▼
Dashboard
```

---

# Components

## 1. Frontend

**Technology:** React

**Purpose**

* Student Login
* Mentor Login
* MTE Submission
* Dashboard
* Feedback View

**Why React?**

* Fast and responsive UI
* Reusable components
* Easy API integration
* Suitable for dashboards

---

## 2. HTTPS

**Purpose**

* Provides secure communication between the frontend and backend.
* Encrypts sensitive information such as passwords, essays, and feedback.

---

## 3. API Gateway

**Purpose**

* Single entry point for all client requests.
* Routes requests to the appropriate backend service.

**Benefits**

* Centralized request handling
* Improved security
* Easy scalability

---

## 4. Authentication Service

**Suggested Technology:** JWT

**Purpose**

* User authentication
* Login validation
* Role-based access (Student/Mentor)

---

## 5. Core API

**Technology:** FastAPI

**Purpose**

* Handles business logic.
* Essay submission
* Mentor feedback
* Dashboard data
* Student profile management

---

## 6. File Service

**Technologies**

* Pandas
* openpyxl

**Purpose**

* Read Excel and CSV files.
* Process uploaded student data.

---

## 7. Database

**Technology:** PostgreSQL

**Stores**

* Student information
* Mentor information
* Essays
* Feedback
* Growth records

**Reason for Selection**

* Reliable
* Secure
* Excellent support for relational data

---

## 8. File Storage

**Purpose**
Stores uploaded files such as:

* Excel files
* CSV files
* Certificates
* Resume
* Images

Large files are stored separately from the database for better performance.

---

## 9. AI / NLP Engine

**Technologies**

* spaCy
* NLTK
* TextBlob
* TF-IDF

**Purpose**

* Essay analysis
* Keyword extraction
* Writing quality assessment
* Personalized feedback generation

---

## 10. Dashboard

**Technologies**

* React
* Chart.js

**Purpose**
Displays:

* Student growth
* Performance charts
* Mentor feedback
* Progress reports

---

# Why This Architecture?

* Modular and easy to maintain
* Secure communication using HTTPS
* Scalable design for future enhancements
* Python-based backend integrates easily with AI models
* Suitable for iterative development and future feature expansion

---

## Future Enhancements

The following features are planned for later phases:

* Load Balancer
* SMS Authentication
* Email Authentication
* Advanced Frontend UI
* Cloud Deployment
* Notification System

