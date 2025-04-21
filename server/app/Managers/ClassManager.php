<?php

namespace App\Managers;
use \App\Repositories\ClassRepository;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ClassManager
{
    private $classRepository;

    public function __construct()
    {
        $this->classRepository = new ClassRepository(); 
    }

    public function get() {
        $classes = $this->classRepository->get();

        if (!$classes) {
            throw new HttpException(400, "No classes found");
        }

        return $classes;
    }

    public function create($class) {
        $this->classRepository->create($class);
    }
}
