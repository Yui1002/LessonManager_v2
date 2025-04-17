<?php

namespace App\Managers;
use App\Repositories\AuthRepository;

class AuthManager 
{
    private $authRepository;
    public function __construct() {
        $this->authRepository = new AuthRepository();
        
    }

    public function login($username, $password) {
        return "hello";
    }
}