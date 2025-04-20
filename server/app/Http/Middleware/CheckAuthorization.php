<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAuthorization
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->session()->has("user")) {
            return response()->json(["error" => "Unauthorized"], 401);
        }

        return $next($request);
    }
}
