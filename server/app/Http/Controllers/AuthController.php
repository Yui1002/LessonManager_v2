<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Managers\AuthManager;

class AuthController extends Controller {
    private $authManager;

    public function __construct() 
    {
        $this->authManager = new AuthManager();
    }

    public function login(Request $request) 
    {
        $user = $this->authManager->login($request);
        return response()->json($user);
    }

    public function register(Request $request)
    {
        $user = $this->authManager->register($request);
    }
}