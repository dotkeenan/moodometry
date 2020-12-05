# moodometry
A full stack web application for journalers who want to track their moods and daily activities

## Technologies Used
- React.js
- JavaScript
- PostgreSQL
- Node.js
- Express
- npm
- Webpack
- Babel
- HTML 5
- CSS3
- Bootstrap 4
- Chart.js
- react-chartjs-2
- react-day-picker

## Live Demo
Coming Soon!
<!-- - Try the application live at [https://moodometry.keenanng.com/](https://moodometry.keenanng.com/)
- Best viewed on mobile! -->

## Features

- User can view a list of their entries
- User can add an entry composed of the time/date, a mood, an event, participants, and a note.
- User can edit an entry.
- User can delete an entry.
- User can filter their list of entries by any combination of mood, day, or event type.
- User can view a graphical summary of their entries' moods and events.

## In Progress

- User can view a month breakdown of their mood on each day.
- Responsiveness on larger devices.

## Preview
  <p align="center">
    <img src="./doc-images/moodometry-demo.gif">
  </p>

## Development

#### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/dotkeenan/moodometry.git
    cd moodometry
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```
1. Create environment variables.

    ```shell
    PORT=3001
    DEV_SERVER_PORT=3000
    DATABASE_URL=postgres://{user}:{password}@localhost/{database-name}
    SESSION_SECRET=secret
    ```

1. Start PostgreSQL, create and import the existing database

    ```shell
    sudo service postgresql start
    createdb {database-name}
    npm run db:import
    ```


1. Run the webpack development server.

    ```shell
    npm run dev
    ```

1. Once started, view the application by opening http://localhost:3000 in your browser.
