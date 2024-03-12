# Online Voting System

This is an online voting system developed using Spring for the backend and React for the frontend. The project utilizes PostgreSQL as the database management system.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Online Voting System is designed to facilitate the voting process in various contexts, such as elections, surveys, or decision-making processes within organizations. The system provides a user-friendly interface for both administrators and voters, ensuring secure and efficient voting procedures.

## Features

- User Authentication: Secure login and registration for voters and administrators.
- Voting Management: Creation, editing, and deletion of voting events by administrators.
- Candidate Management: Addition, removal, and editing of candidates for each voting event.
- Real-time Updates: Immediate display of voting results as votes are cast.
- Secure Voting: Encryption and authentication mechanisms to ensure the integrity and confidentiality of votes.

## Installation

### Prerequisites

- Java Development Kit (JDK) 11 or higher
- Node.js and npm
- PostgreSQL

### Backend Setup

1. Clone the repository:

git clone https://github.com/your-username/online-voting-system.git


2. Navigate to the backend directory:

cd online-voting-system/backend


3. Build and run the Spring Boot application:

./mvnw spring-boot:run


### Frontend Setup

1. Navigate to the frontend directory:

cd ../frontend


2. Install dependencies:

npm install


3. Start the development server:

npm start


## Usage

1. Access the application through your web browser.
2. Register an account if you're a new user, or log in if you already have an account.
3. As an administrator, create a new voting event and add candidates.
4. Share the voting link with voters.
5. Voters log in and cast their votes.
6. Administrators can monitor voting progress and view results in real-time.

## Technologies Used

- **Backend**: Spring Framework (Spring Boot, Spring Security)
- **Frontend**: React, React Router, Axios
- **Database**: PostgreSQL
- **Other Tools**: Maven, npm

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any bugs, feature requests, or improvements.

## License

This project is licensed under the [MIT License](LICENSE).
