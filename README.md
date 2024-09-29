# Itunes Search Application

## Description

The Itunes Search Application is a web application that allows users to search for various media types (music, movies, podcasts) using the iTunes Search API. Users can save their favorite media items for easy access later.

## Key Features

- Search for media by title and type (music, movie, podcast).
- Save and view favorite media items.
- Simple and user-friendly interface.
- Dark theme for better usability.

## Installation and Setup

### Prerequisites

- Node.js and npm should be installed on your machine.

### Clone the Repository

1. Open your terminal.
2. Clone the repository using the following command:
   ```bash
   git clone https://github.com/johnDorman98/itunes-application.git
   ```
3. Navigate to the project directory:
   ```bash
    cd itunes-application
    ```

### Set Up the Backend

1. Navigate to the `backend` directory.
2. Install the required dependencies using the following command:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following environment variables be sure to replace `your_secret_key` with your own secret key:
   ```env
    PORT=1337
    JWT_SECRET=your_secret_key
   ```
4. Start the backend server using the following command:
   ```bash
   npm start
   ```

### Set Up the Frontend

1. Navigate to the `frontend` directory.
2. Install the required dependencies using the following command:
   ```bash
   npm install
   ```
3. Start the frontend server using the following command:
   ```bash
   npm start
   ```

### Access the Application

1. Open your browser and go to `http://localhost:5173/`.
2. The navigation bar contains links to the search and favorites pages.
3. Use the search bar to search for media items.
4. Click on "Add to Favorites" to save a media item.
5. Click on the "Favorites" link to view saved media items.
   6 . Click on "Remove" to remove a media item from the favorites list.

### Technologies Used

- React
- Node.js
- Express
- Axios
- Nodemon
- JWT

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
