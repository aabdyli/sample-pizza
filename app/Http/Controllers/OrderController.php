<?php

namespace App\Http\Controllers;

use App\Order;
use App\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Order', [
            'orderId' => $request->order_id
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'contact' => 'required',
            'address' => 'required',
            'currency' => 'required'
        ]);

        $articles = Collection::make($request->all()['pizzas']);

        $articleIds = $articles->pluck('id');

        $pizzas = Pizza::whereIn('id', $articleIds)->get();

        $total = $pizzas->map(function ($pizza) use ($articles) {
            $article = $articles->where('id', $pizza->id)->first();

            return array_merge($pizza->toArray(), [
                'cost' => $pizza->price * $article['quantity']
            ]);
        })->sum('cost');

        $validatedData['total'] = $total;

        if ($validatedData['currency'] === 'EUR') {
            $validatedData['rate'] = 1;
        } else {
            $validatedData['rate'] = 1.1;
        }

        $order = new Order($validatedData);

        $order->save();

        $order->pizzas()->attach($articleIds);

        Session::forget('cart');

        return Redirect::route("order", ['order_id' => $order->id]);
    }
}
