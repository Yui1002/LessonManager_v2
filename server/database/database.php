<?php

include_once "config.php";
    
class Database {
    private static $instance = null;
    private $connection;

    private function __construct() {
        $host = $_ENV['DB_HOST'];
        $user = $_ENV['DB_USER'];
        $password = $_ENV['DB_PASS'];
        $database = $_ENV['DB_DATABASE'];

        try {
            $connection = new PDO("mysql:host=$host;dbname=$database", $user, $password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connected successfully";
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new Database();
        }

        return self::$instance;
    }

    public function getConnection() {
        return $this->connection;
    }
}