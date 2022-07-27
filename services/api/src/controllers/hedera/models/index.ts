import mongoose, { Schema } from 'mongoose';

const AccountSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  accountId: { type: String, required: true, unique: true, index: true },
  publicKey: { type: String, required: true, unique: true, index: true },
  privateKey: { type: String, required: true, unique: true, index: true },
});

export const AccountModel = mongoose.model('Account', AccountSchema);
