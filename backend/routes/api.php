<?php

use App\Http\Controllers\Api\V1\DriverController;
use App\Http\Controllers\Api\V1\TripController;

use App\Models\Trips;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// NOTE Public Routes



Route::group(['prefix'=>'v1', 'namespace'=>'App\Http\Controllers\Api\V1', 'middleware'=>'auth:sanctum'], function(){
  
    // Route::apiResource('my-leagues', LeagueController::class)->only([
    //     'index', 'show', 'store', 'update'
    // ]);

    // Route::apiResource('my-teams', TeamController::class)->only([
    //     'index', 'show', 'store', 'update', 'delete'
    // ]);
    // Route::delete('delete-my-team/{id}', [TeamController::class, 'delete']);

    // Route::get('/profile/{id}', [ProfileController::class, 'show']);

    
});
// 