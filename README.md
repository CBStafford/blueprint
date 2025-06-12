Run docker-compose up --build

Run migrate INSIDE the container

if you get an error about not finding the database ID (or something like that) Run php artisan key:generate - INSIDE the container.
