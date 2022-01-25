<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\SupplierController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {

    // Para Laravel 8
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::post('/me', [AuthController::class, 'me']);

    Route::post('/signup', [AuthController::class, 'signup']);

});

// Route::apiResource('/employee', 'Api\EmployeeController'); //No funciona en L8
Route::apiResource('/employee', EmployeeController::class);
Route::apiResource('/supplier', SupplierController::class);
