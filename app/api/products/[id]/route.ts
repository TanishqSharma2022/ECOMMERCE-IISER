import dbConnect from "@/libs/mongodb";
import product_model from "@/models/product_model"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req:any, {params}:any){
    const {id} = params;
    await dbConnect();
    const product = await product_model.findById(id);

    mongoose.disconnect()
    return NextResponse.json({ product }, {status: 200});


}