import dbConnect from "@/libs/mongodb";
import product_model from "@/models/product_model"
import mongoose, { connection } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req:any, {params}:any){
    const {id} = params;
    await dbConnect();
    const product = await product_model.findById(id);


    return NextResponse.json({ product }, {status: 200});


}