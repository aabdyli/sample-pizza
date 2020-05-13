<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pizza')->insert([
            [
                "name" => 'Margarita',
                "price" => 800,
                "image" => 'margarita.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Caprico',
                "price" => 850,
                "image" => 'caprico.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Mushrooms',
                "price" => 900,
                "image" => 'mushrooms.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Peperoni',
                "price" => 1000,
                "image" => 'peperoni.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Delicious',
                "price" => 950,
                "image" => 'delicious.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Deep Dish',
                "price" => 1200,
                "image" => 'deepdish.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Pineapple',
                "price" => 800,
                "image" => 'pineapple.jpg',
                "description" => "List of toppings here."
            ],
            [
                "name" => 'Seafood Pizza',
                "price" => 800,
                "image" => 'seafood.jpg',
                "description" => "List of toppings here."
            ],
        ]);
    }
}
