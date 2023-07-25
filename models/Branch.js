import { Schema, model, models } from "mongoose";

const branchSchema = new Schema({
    slug: String,
    country: String ,
    code: String,
    title: String,
    distance: Number,
    street: String,
    phone: Number,
    status: String,
    work: String,
});

const Branch = models.Branch || model('Branch', branchSchema);
export default Branch;