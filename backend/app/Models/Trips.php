<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trips extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'driver_id',
        'start_location',
        'end_location',
        'start_time',
        'end_time',
        'status',
        'notes',
        // Add other fields as needed based on the frontend requirements
    ];

    /**
     * Get the driver associated with the trip.
     */
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }
}
