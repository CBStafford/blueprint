#!/bin/sh
MAX_RETRIES=60
COUNT=0
echo "Checking database readiness..."
until php -r "try { new PDO('mysql:host=mysql;port=3306;dbname=laravel', 'root', 'password'); echo 'DB ready'; exit(0); } catch (PDOException $e) { exit(1); }" > /dev/null 2>&1; do
if [ $COUNT -ge $MAX_RETRIES ]; then
echo "MySQL connection timed out after $MAX_RETRIES attempts"
echo "Debug: Attempting manual MySQL connection..."
mysql -h mysql -u root -ppassword -P 3306 -e "SELECT 1;" || echo "Manual connection failed: $?"
echo "Debug: Checking MySQL service reachability..."
ping -c 3 mysql || echo "Ping to mysql failed: $?"
echo "Debug: Network resolution..."
nslookup mysql || echo "nslookup failed: $?"
exit 1
fi
echo "Waiting for MySQL to be ready... (Attempt $((COUNT + 1))/$MAX_RETRIES)"
sleep 2
COUNT=$((COUNT + 1))
done
echo "MySQL is ready. Running migrations..."
php artisan migrate --force
echo "Starting PHP-FPM..."
exec php-fpm
