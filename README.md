# 🛡️ FinGuard
### AI-Powered AML & Transaction Fraud Detection System

## 📌 Project Overview

FinGuard is an AI-powered Anti Money Laundering (AML) and Transaction Fraud Detection System developed using **FastAPI**, **MongoDB**, **Machine Learning**, and **HTML/CSS/JavaScript**.

The system allows users to register, log in, manage transactions, detect fraudulent transactions using Machine Learning, upload CSV datasets, visualize transaction networks, generate reports, and monitor suspicious activities.

---

# 🚀 Features

- User Registration & Login
- Dashboard Analytics
- Transaction Management
- Fraud Detection using Isolation Forest
- CSV Upload & Bulk Fraud Analysis
- Fraud Alerts
- Graph Analytics (Transaction Network)
- AML Detection
- Reports
- User Profile
- Secure Password Hashing
- JWT Authentication

---

# 🛠 Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Vis.js

## Backend

- FastAPI
- Python
- Motor (MongoDB Driver)
- Uvicorn

## Database

- MongoDB

## Machine Learning

- Scikit-learn
- Isolation Forest
- Pandas
- Joblib

---

# 📂 Project Structure

```
FinGuard/

│
├── backend/
│
│ ├── routes/
│ ├── models/
│ ├── services/
│ ├── graph/
│ ├── ml/
│ ├── trained_models/
│ ├── database.py
│ ├── main.py
│
├── frontend/
│
│ ├── css/
│ ├── js/
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── dashboard.html
│ ├── transactions.html
│ ├── fraud.html
│ ├── upload.html
│ ├── alerts.html
│ ├── graph.html
│ ├── report.html
│ ├── profile.html
│
├── dataset/
│__trained_models/
├── README.md
│
└── start_finguard.bat
```

---

# ⚙ Installation

## 1 Clone Repository

```bash
git clone <repository-url>
```

---

## 2 Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 3 Start MongoDB

Start MongoDB Server.

---

## 4 Run Backend

```bash
cd backend

uvicorn main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## 5 Open Frontend

Open

```
frontend/index.html
```

or use Live Server.

---

# Machine Learning Model

Algorithm Used

- Isolation Forest

Model File

```
trained_models/isolation_forest.pkl
```

Dataset

Credit Card Fraud Detection Dataset

---

# APIs

## Authentication

- POST /auth/register
- POST /auth/login

## Dashboard

- GET /dashboard/stats

## Transactions

- POST /transactions/add
- GET /transactions/all

## Fraud Detection

- POST /fraud/analyze

## Upload

- POST /upload/csv

## Fraud Alerts

- GET /alerts/all

## Graph Analytics

- GET /graph/network
- GET /graph/aml

## Reports

- GET /report/summary

---

# Security

- Password Hashing
- JWT Authentication
- Protected APIs
- MongoDB Storage

---

# Future Enhancements

- Email Notifications
- SMS Alerts
- Role-Based Authentication
- Live Transaction Monitoring
- Real-time Fraud Prediction
- Admin Panel
- AI Risk Scoring

---

# Developed By

**Anshu**

B.Tech Project

2026