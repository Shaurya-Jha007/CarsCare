# CarsCare

CarsCare is a web application that allows users to explore and filter cars based on various criteria such as company, model, and fuel type. It also provides a feature for users to manage a personalized wishlist of their favorite cars, with full CRUD (Create, Read, Update, Delete) functionality.

## Features ✨

- **Car Filtering**: Easily filter cars by company, model, and fuel type to find exactly what you’re looking for.
- **Wishlist Management**:
  - Add your favorite cars to a wishlist.
  - View your wishlist.
  - Remove cars from the wishlist.
  - Persistent storage of wishlist data using `localStorage`.
- **Responsive Design**: Fully responsive interface, ensuring a seamless experience on all devices.

## Technologies Used 🛠️

- **Frontend**:
  - React.js
  - TailwindCSS for styling
- **State Management**:
  - React Context API
- **API**:
  - Mock APIs for fetching car data
- **Data Persistence**:
  - `localStorage` for wishlist management
- **Libraries**:
  - React Query for data fetching and caching
  - React Router for navigation
 
## How It Works ⚙️

1. **Explore Cars**:
   - Navigate to the homepage to explore cars.
   - Filter cars by company, model, and fuel type to narrow your search.

2. **Manage Wishlist**:
   - Add cars to your wishlist with a single click.
   - Access your wishlist to view saved cars.
   - Remove cars from the wishlist as needed.

3. **Data Persistence**:
   - Wishlist data is saved in the browser's `localStorage`, ensuring it remains intact even after page reloads.

## Installation & Setup 🚀

Follow these steps to run the CarsCare application locally:

1. **Clone the Repository**:
  - Open bash
  - git clone https://github.com/your-username/carscare.git](https://github.com/Shaurya-Jha007/CarsCare.git
  - cd CarsCare
  - npm install
  - npm run dev
