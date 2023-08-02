import { NextResponse } from "next/server";

// pages/api/example.js


export function getRoute(req, res) {
  const data = { message: 'Hello from the GET API route!', status: 'success' };
  res.NextResponse("hi");
}

export function postRoute(req, res) {
  // Handle the POST request
  const data = { message: 'Hello from the POST API route!', status: 'success' };
  return res.status(200).json(data);
}

// Other API routes for different HTTP methods
