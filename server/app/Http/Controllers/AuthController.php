<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Managers\AuthManager;

class AuthController {
    private $authManager;

    public function __construct() 
    {
        $this->authManager = new AuthManager();
    }

    public function checkIfLoggedIn(Request $request)
    {
        if ($request->session()->has("user")) {
            return response()->json([
                'loggedIn' => true,
                'user' => $request->session()->get('user')
            ]);
        }

        return response()->json(['loggedIn' => false]);
    }

    public function login(Request $request) 
    {
        $user = $this->authManager->login($request);
        $request->session()->put('user', $user);
        
        return response()->json($user);
    }

    public function register(Request $request)
    {
        $this->authManager->register($request);
        return response()->json([
            'message' => 'Registered the user successfully',
        ], 201);
    }

    public function logout(Request $request)
    {
        $request->session()->forget('user');
        return response()->json(['message'=> 'Logged out successfully']);
    }
}