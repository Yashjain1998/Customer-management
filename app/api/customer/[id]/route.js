import connectMongoDB from "../../../libs/mongodb.js";
import Data from "../../../database/mongodbslimal.js";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const  id  = req.nextUrl.pathname.split("/").pop();
  const data = await req.json();
  await connectMongoDB();
  await Data.findByIdAndUpdate(id, {...data});
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(req) {
  const  id  = req.nextUrl.pathname.split("/").pop();
  await connectMongoDB();
  const datas = await Data.findOne({ _id: id });
  return NextResponse.json({ datas }, { status: 200 });
}
