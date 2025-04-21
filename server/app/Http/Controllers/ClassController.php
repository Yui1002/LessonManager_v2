<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Managers\ClassManager;

class ClassController extends Controller
{
    private $classManager;

    public function __construct() {
        $this->classManager = new ClassManager();   
    } 

    public function get() {
        $classes = $this->classManager->get();
        return response()->json($classes); 
    }

    public function create(Request $request) {
        $this->classManager->create($request);
    }
}

