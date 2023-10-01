import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
            title: {
                type: String,
                required: true
            },
            desc:{
                type: String,
                required: true
            },
            color:{
                type: String
            },
            favorite : {
                type: Boolean,
                default: false
            }
    },
    { timestamps: true }
);

export default mongoose.model("Corenotes", productSchema);