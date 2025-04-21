<?php

use App\Http\Middleware\CheckAuthorization;
use App\Http\Middleware\CheckIfLoggedIn;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\StudentController;

Route::get('/checkIfLoggedIn', [AuthController::class, 'checkIfLoggedIn']);
Route::post('/login', [AuthController::class, 'login']); 
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware([CheckAuthorization::class])->group(function () {
    // classes
    Route::get('/class', [ClassController::class, 'get']);
    Route::post('/class', [ClassController::class, 'create']);

    // students
    Route::get('/students', [StudentController::class, 'getStudents']);
    Route::get('/students/{id}', [StudentController::class, 'getStudentById']);
});