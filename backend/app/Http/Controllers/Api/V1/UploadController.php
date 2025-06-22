<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadController extends Controller
{   
    public function index()
    {
        return "UploadController Index !!!!!";
    }

    public function store(Request $request)
    {
        // Validate incoming request
        $validated = $request->validate([
            // 'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB Max
        ]);

        // Store the uploaded image file
        if ($request->hasFile('image')) {
            // Store file and get path
            $path = $request->file('image')->store('uploads', 'public');
            $url = Storage::url($path);
        }

        // Return response with file info and name
        return response()->json([
            // 'name' => $validated['name'],
            'image_url' => $url ?? null,
            'message' => 'File uploaded successfully!',
        ], 201);
    }

}
