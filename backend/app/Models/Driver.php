<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'license_number',
        'status',
        // Add other fields as needed based on the frontend requirements
    ];

    /**
     * Get the trips for the driver.
     */
    public function trips()
    {
        return $this->hasMany(Trips::class);
    }
}
