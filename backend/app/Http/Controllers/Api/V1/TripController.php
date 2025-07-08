<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Trips;
use Illuminate\Http\Request;

class TripController extends Controller
{
    /**
     * Display a listing of the trips.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $trips = Trips::all();
            return response()->json($trips);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve trips', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created trip in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $trip = Trips::create($request->all());
            return response()->json($trip, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create trip', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified trip.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $trip = Trips::findOrFail($id);
            return response()->json($trip);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Trip not found', 'message' => $e->getMessage()], 404);
        }
    }

    /**
     * Update the specified trip in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $trip = Trips::findOrFail($id);
            $trip->update($request->all());
            return response()->json($trip);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update trip', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified trip from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $trip = Trips::findOrFail($id);
            $trip->delete();
            return response()->json(['message' => 'Trip deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete trip', 'message' => $e->getMessage()], 500);
        }
    }
}
