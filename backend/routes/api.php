<?php

use App\Http\Controllers\Api\V1\DriverController;
use App\Http\Controllers\Api\V1\TripController;

use App\Models\Trips;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Public Routes (no auth required for development)
Route::prefix('v1')->group(function() {
    Route::get('/trips', [TripController::class, 'index']);
    Route::post('/trips', [TripController::class, 'store']);
    Route::get('/drivers', [DriverController::class, 'index']);
    Route::post('/drivers', [DriverController::class, 'store']);
});

// Protected Routes
Route::group(['prefix'=>'v1', 'middleware'=>'auth:sanctum'], function(){
    Route::apiResource('trips', TripController::class)->except(['index', 'store']);
    Route::apiResource('drivers', DriverController::class)->except(['index', 'store']);
    
    // Route::apiResource('my-leagues', LeagueController::class)->only([
    //     'index', 'show', 'store', 'update'
    // ]);

    // Route::apiResource('my-teams', TeamController::class)->only([
    //     'index', 'show', 'store', 'update', 'delete'
    // ]);
    // Route::delete('delete-my-team/{id}', [TeamController::class, 'delete']);

    // Route::get('/profile/{id}', [ProfileController::class, 'show']);
});