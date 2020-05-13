<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Pizza;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Session;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        $articles = Session::get('cart');

        if ($articles === null || $articles->count() === 0) {
            return redirect('/', 301);
        }

        $pizzas = Pizza::whereIn('id', $articles->pluck('id'))->get();

        $pizzas = $pizzas->map(function ($pizza) use ($articles) {
            $article = $articles->where('id', $pizza->id)->first();

            return array_merge($pizza->toArray(), [
                'cost' => $pizza->price * $article['quantity'],
                'quantity' => $article['quantity']
            ]);
        });

        return Inertia::render('Checkout', [
            'pizzas' => $pizzas,
            'total' => $pizzas->sum('cost')
        ]);
    }

    public function store(Request $request)
    {
        ['articles' => $articles] = $request->all();

        $articles = Collection::make($articles);

        Session::put('cart', $articles);

        return $this->index($request);
    }
}
