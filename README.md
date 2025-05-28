# Dmoney REST API Test Automation

API-based testing of the Dmoney REST API using Postman and Newman, with a focus on role-specific transactions and functional validations.

---

## Overview

This project involves automated testing of the Dmoney REST API to ensure reliability and correctness of core functionalities. It covers various user roles such as Admin, System User, Agent, Customer, and Merchant, validating their respective transaction flows and permissions.

---

## Tools and Technology

- **Postman**  
- **Newman**  
- **Node.js**  
- **VSCode**

---

### 1. Test Cases

Test cases were created for the following scenarios:

- Admin creates an Agent, 2 Customers, and a Merchant.
- System deposits money to the Agent.
- Agent deposits money to a Customer.
- Check Agent's balance.
- Send money between Customers.
- Customer withdraws money to the Agent.
- Check Customer's balance and transaction statement.
- Customer makes a payment to a Merchant.
- Check balances and transaction statements for Customers.
- The Merchant checks his balance.
- ### 2. Postman Collection

- Created a Postman collection for all above scenarios.  
- Added negative test cases for validation and error handling.

> **Collection:**[Click Here to see the Postman Collection](https://blue-spaceship-82651.postman.co/workspace/First~ce11a31e-10cf-42d5-a014-041d020ca2f4/collection/37563033-491330d2-0099-413a-868a-6a2e29267637?action=share&creator=37563033)


---
### 3. Newman Report

- Generated a report of all test cases execution using Newman.  
- Included summary screenshots of the execution results.
- View the Newman report screenshots below:
  ![Newman Test Report Screenshot](![Screenshot 2025-05-28 232228](https://github.com/user-attachments/assets/6093019c-4fef-4f36-a983-686b05c3e648)
)

