<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    /**
     * Display a listing of the drivers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $drivers = Driver::all();
            return response()->json($drivers);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve drivers', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created driver in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $driver = Driver::create($request->all());
            return response()->json($driver, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create driver', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified driver.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $driver = Driver::findOrFail($id);
            return response()->json($driver);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Driver not found', 'message' => $e->getMessage()], 404);
        }
    }

    /**
     * Update the specified driver in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $driver = Driver::findOrFail($id);
            $driver->update($request->all());
            return response()->json($driver);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update driver', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified driver from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $driver = Driver::findOrFail($id);
            $driver->delete();
            return response()->json(['message' => 'Driver deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete driver', 'message' => $e->getMessage()], 500);
        }
    }
}
