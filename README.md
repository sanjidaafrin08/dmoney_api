# Dmoney REST API Test Automation

**API-based testing** of the **Dmoney REST API** using **Postman** and **Newman**, focusing on **role-specific transactions** and **functional validations** across multiple user types.

---

## Project Overview

This project involves end-to-end testing of the Dmoney REST API to validate core functionalities and ensure system reliability. It simulates real-world financial transactions and access control between:

- Admin  
- System User  
- Agent  
- Customers  
- Merchant  

---

## Tools & Technologies

- Postman  
- Newman  
- Node.js  
- Visual Studio Code (VSCode)

---

## Test Scenarios Covered

- Admin creates: Agent, 2 Customers, and a Merchant  
- System User deposits money to Agent  
- Agent deposits money to a Customer  
- Verify Agent’s balance  
- Money transfer between Customers  
- Customer withdraws money from Agent  
- Check Customer’s balance and statement  
- Customer pays Merchant  
- Merchant checks balance  
- Negative test cases for invalid operations and validations

---

## Postman Collection

A well-structured Postman collection was created covering all positive and negative flows.

**Collection Link:**  
[Click Here to See the Postman Collection](https://blue-spaceship-82651.postman.co/workspace/First~ce11a31e-10cf-42d5-a014-041d020ca2f4/collection/37563033-491330d2-0099-413a-868a-6a2e29267637?action=share&creator=37563033)

---

## Newman Test Report

All test cases were executed via Newman, and the results were captured for analysis.

**Newman Report Screenshot:**  
![Newman Report Screenshot 1](https://drive.google.com/uc?export=view&id=1LUl16rgeeS-fsrOgiWRMDh1L40JdNwQI)
![Newman Report Screenshot 2](https://drive.google.com/uc?export=view&id=190i1Ano9tri8KJyc3BRTlt03tiLIexFw)
![Newman Report Screenshot 3](https://drive.google.com/uc?export=view&id=1g5RXsgFU8BvC4DRngISTPpiHyGeWjQVQ)
![Newman Report Screenshot 4](https://drive.google.com/uc?export=view&id=1-s1l382we9yyxWJ0Q9G88X_J-86Ik_b7)
![Newman Report Screenshot 5](https://drive.google.com/uc?export=view&id=1y4PR4Q69CcPdeKDfFlJAJs0Pwz5rLvGy)
---

## Highlights

- Role-based transaction simulation  
- Negative test validations  
- Functional testing with proper assertions  
- Automated execution using Newman  


---

## Tested by

**Sanjida Afrin**  
Junior QA Engineer 
[GitHub Profile](https://github.com/sanjidaafrin08)
