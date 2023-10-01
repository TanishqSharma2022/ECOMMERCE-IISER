import dbConnect from "@/libs/mongodb";
import product_model from "@/models/product_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect();
    const product = await product_model.find(({href: 'iiserb'}));
    mongoose.disconnect()
    return NextResponse.json({ product });
}