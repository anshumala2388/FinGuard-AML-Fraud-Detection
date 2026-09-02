@echo off

echo ===============================
echo Starting FinGuard Backend...
echo ===============================

cd backend

start cmd /k uvicorn main:app --reload

timeout /t 5

echo ===============================
echo Opening Frontend...
echo ===============================

cd ..

start frontend\index.html

exit