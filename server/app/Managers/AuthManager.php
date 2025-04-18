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

    public function login(Request $request) {
        $username = $request->get("username");
        $password = $request->get("password");

        $user = $this->authRepository->findByUsername($username);

        if ($user === false) {
            throw new HttpException(400, "Incorrect username or password");
        }

        $hashed = password_hash($user["password"], PASSWORD_BCRYPT);
        $doesPasswordMatch = password_verify($password, $hashed);
        if (!$doesPasswordMatch) {
            throw new HttpException(400, "Incorrect username or password");
        }

        return $user;
    }
}