import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IGravacao extends mongoose.Document {
  telefone: string;
  ramal: string;
  dataGravacao: Date;
}

export default mongoose.model<IGravacao>(
  'Gravacao',
  new Schema(
    {
      telefone: {
        type: String,
        required: true,
      },

      ramal: {
        type: String,
        required: true,
      },

      dataGravacao: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);
