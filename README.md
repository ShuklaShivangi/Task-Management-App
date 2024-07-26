# Task Management App

## Description
The Task Management App is a web application designed to help users manage their tasks efficiently. It is built using Django for the backend and React for the frontend, offering a robust and responsive user experience.

## Features
- Create, read, update, and delete tasks
- Mark tasks as completed or pending
- Filter tasks based on status
- Responsive design for mobile and desktop use

## Technologies Used
- **Backend**: Django, Django REST Framework
- **Frontend**: React
- **Database**: SQLite (default, can be changed to PostgreSQL, MySQL, etc.)

## Installation

### Prerequisites
- Python 3.x
- Node.js
- npm or yarn

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/ShuklaShivangi/Task-Management-App.git
    cd Task-Management-App/backend
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```

3. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Apply migrations:
    ```sh
    python manage.py migrate
    ```

5. Run the development server:
    ```sh
    python manage.py runserver
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```sh
    cd ../frontend
    ```

2. Install the dependencies:
    ```sh
    npm install   # or yarn install
    ```

3. Start the development server:
    ```sh
    npm start   # or yarn start
    ```

## Usage
1. Open your web browser and go to `http://localhost:8000` to access the backend API.
2. Go to `http://localhost:3000` to access the frontend application.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

---

Thank you for using the Task Management App!
