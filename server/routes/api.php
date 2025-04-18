<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Route::middleware(['check.session'])->group(function() {

// });


Route::get("/checkSession", [AuthController::class, 'checkSession']);
Route::post("/login", [AuthController::class, 'login']);
Route::post("/register", [AuthController::class, 'register']);
