import connectMongoDB from "@/libs/mongodb";
import customerdata from "@/database/mongodbslimal";
import { NextResponse } from "next/server";

export async function PUT(req, { parems }) {
  const { id } = parems;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}