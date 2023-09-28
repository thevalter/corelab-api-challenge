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
                type: String,
                enum: ["#BAE2FF", "#B9FFDD", "#FFE8AC", "#FFCAB9", "#F99494", "#9DD6FF", "#ECA1FF", "#DAFF8B", "#FFA285", "#CDCDCD", "#979797", "#A99A7C", "#D9D9D9"],
                default: "#D9D9D9"
            },
            favorite : {
                type: Boolean,
                default: false
            }
    },
    { timestamps: true }
);

export default mongoose.model("Corenotes", productSchema);