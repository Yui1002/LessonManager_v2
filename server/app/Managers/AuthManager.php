<?php

namespace App\Managers;
use App\Repositories\AuthRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthManager 
{
    private $authRepository;
    public function __construct() {
        $this->authRepository = new AuthRepository();
        
    }

    public function login(Request $request) 
    {
        $username = $request->get("username");
        $password = $request->get("password");

        $user = $this->authRepository->findByUsername($username);

        if ($user === false) {
            throw new HttpException(400, "Incorrect username or password");
        }

        $doesPasswordMatch = password_verify($password, $user["password"]);
        if (!$doesPasswordMatch) {
            throw new HttpException(400, "Incorrect username or password");
        }

        return $user;
    }

    public function register(Request $request) 
    {
        $username = $request->get("username");
        $password = $request->get("password");

        $user = $this->authRepository->findByUsername($username);

        if ($user) {
            throw new HttpException(400, "User already registered");
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $this->authRepository->register($username, $hashedPassword);
    }
}