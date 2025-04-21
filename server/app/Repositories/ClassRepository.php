<?php

namespace App\Repositories;
use App\Database\Database;

class ClassRepository
{
    private $db;

    public function __construct() {
        $this->db = Database::getInstance();
    }

    public function get() {
        $sql = "SELECT student_id, name, start_date, end_date, description FROM classes;";
        $stmt = $this->db->getConnection()->prepare($sql);
        $stmt->execute();
        $classes = $stmt->fetch();
        return $classes;
    }

    public function create($class) {
        $sql = "INSERT INTO classes (student_id, name, start_date, end_date, description) VALUES (?,?,?,?,?);";
        $stmt = $this->db->getConnection().prepare($sql);
        $stmt->execute([]);
    }

    public function getClassNotification($class_id) {
        $sql = "SELECT * FROM classes WHERE ";
    }
}
