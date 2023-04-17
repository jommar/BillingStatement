# Billing Statement Web Application
This web application generates a billing statement for tenants. It is built with Vue.js and Vuetify.
## Getting Started
To use this application, simply download or clone this repository and open index.html in your web browser.
## Usage
The application allows the user to enter parameters for the billing statement through the URL. These parameters include:
  - apartmentName: The name of the apartment complex.
  - apartmentAddress: The address of the apartment complex.
  - billingStatementDate: The date of the billing statement.
  - tenantName: The name of the tenant.
  - apartmentNumber: The number of the apartment.
  - previousBalance: The previous balance owed by the tenant.
  - monthlyRent: The monthly rent owed by the tenant.
  - waterBill: The amount of the water bill owed by the tenant.
  - totalAmountDue: The total amount due.
  - dueDate: The date by which the payment must be made.
  - contactInformation: The contact information for the landlord.

The user can also add additional payment methods by modifying the `payments` array in the `data` section of the `app` instance.
## License
This project is licensed under the MIT License. See the `LICENSE` file for details.