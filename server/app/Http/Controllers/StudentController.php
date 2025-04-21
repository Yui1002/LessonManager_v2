<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Managers\StudentManager;

class StudentController extends Controller
{
    private $studentManager;

    public function __construct() {
        $this->studentManager = new StudentManager();   
    }

    public function getStudents() {
        $students = $this->studentManager->getStudents();
        return response()->json($students);
    }

    public function getStudentById(Request $request) {
    
    }

    public function create() {

    }

    public function updateStudent() {
        
    }

    public function delete() {

    }
}
