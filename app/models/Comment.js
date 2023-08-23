import mongoose, { model, models, Schema } from "mongoose";


const commentSchema = new Schema({
    text: { type: String },
    uploads: { type: [String] },
    userEmail: { type: String, required: true },
    feedbackId: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { timestamps: true })

export const Comment = models?.Comment || model('Comment', commentSchema);