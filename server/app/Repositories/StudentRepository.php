<?php

namespace App\Repositories;
use App\Database\Database;

class StudentRepository
{
    private $db;

    public function __construct()
    {
        $this->db = Database::getInstance();
    }

    public function getStudents() {
        $sql = "SELECT id, first_name, last_name, country, phone_number, email, profile_photo, lesson_hours FROM students;";
        $stmt = $this->db->getConnection()->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        $students = array_map(function ($row) {
            return [
                'id' => $row['id'],
                'first_name' => $row['first_name'],
                'last_name'=> $row['last_name'], 
                'email'=> $row['email'],
                'phone_number' => $row['phone_number'],
                'country' => $row['country'],
                'profile_photo' => $row['profile_photo'],
                'lesson_hours' => $row['lesson_hours'],
            ];
        }, $rows);
        return $students;
    }   

    public function updateStudent() {
        
    }
}
