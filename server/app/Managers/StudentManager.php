<?php

namespace App\Managers;
use App\Repositories\StudentRepository;
use Symfony\Component\HttpKernel\Exception\HttpException;

class StudentManager
{
    private $studentRepository;
 
    public function __construct()
    {
        $this->studentRepository = new StudentRepository();
    }

    public function getStudents() {
        $students = $this->studentRepository->getStudents();

        if (!$students) {
            throw new HttpException(400, "No students found");
        }
        return $students;
    }

    public function create() {

    }

    public function updateStudent() {

    }

    public function delete() {

    }
}
