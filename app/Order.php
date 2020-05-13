<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = [];

    public function pizzas()
    {
        return $this->belongsToMany(Pizza::class);
    }
}
