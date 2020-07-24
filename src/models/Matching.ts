import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IMatching extends mongoose.Document {
  gravacao: string;
  tabulacao: string;
}

export default mongoose.model<IMatching>(
  'Matching',
  new Schema(
    {
      gravacao: {
        type: Schema.Types.ObjectId,
        ref: 'Gravacao',
        required: true,
      },

      tabulacao: {
        type: Schema.Types.ObjectId,
        ref: 'Tabulacao',
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);
