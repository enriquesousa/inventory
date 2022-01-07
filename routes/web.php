<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Para poder visitar las paginas routes de vue
Route::get('/{vue_capture?}',function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');