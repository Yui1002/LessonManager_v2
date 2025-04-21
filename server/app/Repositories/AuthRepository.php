<?php

namespace App\Repositories;

use App\Database\Database;

class AuthRepository {
    private $db;

    public function __construct() {
        $this->db = Database::getInstance();
    }

    public function findByUsername($username) {
        $sql = "SELECT * FROM users WHERE username=?;";
        $stmt = $this->db->getConnection()->prepare($sql);
        $stmt->execute([$username]);
        $user = $stmt->fetch();
        return $user;
    }

    public function register($username, $password) {
        $sql = "INSERT INTO users (username, password) VALUES (?,?);";
        $stmt = $this->db->getConnection()->prepare($sql);
        $stmt->execute([$username, $password]);
    }    
}