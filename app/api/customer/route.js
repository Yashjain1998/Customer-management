import connectMongoDB from "../../libs/mongodb";
// import Topic from "@/models/topic";
import Data from "../../database/mongodbslimal";
import { NextResponse } from "next/server";
export async function POST(request) {
  const data= await request.json();
  await connectMongoDB();
  await Data.create({...data});
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const datas = await Data.find({});
  return NextResponse.json({ datas });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Data.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
