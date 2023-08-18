import mongoose, { model, models, Schema } from "mongoose";

const voteSchema = new Schema({
    userEmail: { type: String, required: true },
    feedbackId: { type: mongoose.Types.ObjectId, required: true },
}, {
    timestamps: true,
})
export const Vote = models?.Vote || model('Vote', voteSchema);