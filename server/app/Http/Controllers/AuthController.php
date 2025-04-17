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
        $username = $request->input('username');  
        return response("Hello World", 200);
    }
}