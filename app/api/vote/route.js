import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { Vote } from "@/app/models/vote";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
    mongoose.connect(process.env.MONGO_URL);
    const jsonBody = await request.json();
    const { feedbackId } = jsonBody;
    const session = await getServerSession(authOptions);
    const { email: userEmail } = session.user;

    // find existing vote
    const existingVote = await Vote.findOne({ feedbackId, userEmail });
    if (existingVote) {
        await Vote.findByIdAndDelete(existingVote._id);
        return Response.json(existingVote);
    } else {
        const VoteDoc = await Vote.create({ feedbackId, userEmail });
        return Response.json(VoteDoc);
    }
}