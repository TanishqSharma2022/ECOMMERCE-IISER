import mongoose, { Schema} from "mongoose";


interface Product {
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string,
    price: string,
    color: string,
    desc: string,
  }

const productScheme = new Schema<Product>(
    {
        name:{
            type: String,
            required: true,
        },
        href:{
            type: String,
            required: true,
        },
        imageSrc:{
            type: String,
            required: true,
        },
      imageAlt:{
            type: String,
            required: true,
        },
        price:{
            type: String,
            required: true,
        },
        color:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        }

      
    }
)





const product_model = mongoose.models.product_model ||  mongoose.model('product_model', productScheme) 

export default product_model;