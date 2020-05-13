<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'BaseController@index')->name('index');
Route::get('/checkout', 'CheckoutController@index')->name('checkout.index');
Route::post('/checkout', 'CheckoutController@store')->name('checkout.store');
Route::post('/order', 'OrderController@store')->name('order.store');
Route::get('/order', 'OrderController@index')->name('order');
