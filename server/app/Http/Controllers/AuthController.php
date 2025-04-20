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
        \Log::info('Session Data:', $request->session()->all());
        \Log::info('Session ID:', ['id' => session()->getId()]);

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
        // \Log::info('User logged in:', ['user' => $request->session()->get('user')]);
        // \Log::info('Session Data After Login:', $request->session()->all());
        $user = $this->authManager->login($request);
        $request->session()->put('user', $user);
        

        return response()->json($user);
    }

    public function register(Request $request)
    {
        $user = $this->authManager->register($request);
    }

    public function logout(Request $request)
    {
        $request->session()->forget('user');
        return response()->json(['message'=> 'Logged out successfully']);
    }
}