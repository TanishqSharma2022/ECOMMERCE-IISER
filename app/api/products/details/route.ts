import dbConnect from "@/libs/mongodb";
import product_model from "@/models/product_model"
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){
    mongoose.connect(process.env.DB_URI!)

    const color = await product_model.distinct('colorId');
    const price = await product_model.distinct('price')

    const product = {color, price}
    return NextResponse.json({ product });
}