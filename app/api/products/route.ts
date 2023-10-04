import dbConnect from "@/libs/mongodb";
import product_model from "@/models/product_model"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function POST(req:any){
//     // try{

//         const {
//             name,
//             href,
//             imageSrc,
//             imageAlt,
//             price,
//             color,
//             desc
//         } = await req.json();
//         await dbConnect();

//         const data= await product_model.create({
//            name,
//             href,
//             imageSrc,
//             imageAlt,
//             price,
//             color, 
//             desc, 
//             });


//         return NextResponse.json({data})
// }


export async function GET(){
    await dbConnect();
    const product = await product_model.find();
    return NextResponse.json({ product });


}