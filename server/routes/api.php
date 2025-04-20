<?php

use App\Http\Middleware\CheckAuthorization;
use App\Http\Middleware\CheckIfLoggedIn;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Route::middleware([CheckIfLoggedIn::class])->group(function () {
//     Route::post('/login', [AuthController::class, 'login']);
//     Route::get('/checkSession', [AuthController::class, 'checkSession']);
//     Route::post('/logout', [AuthController::class, 'logout']);
// });

Route::get('/checkIfLoggedIn', [AuthController::class, 'checkIfLoggedIn']);
Route::post('/login', [AuthController::class, 'login']);    
