<?php

namespace App\Http\Controllers;

use App\Pizza;
use Inertia\Inertia;

class BaseController extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();

        return Inertia::render('Index', [
            'pizzas' => $pizzas,
        ]);
    }
}
