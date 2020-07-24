import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface ITabulacao extends mongoose.Document {
  nomeCliente: string;
  protocolo: string;
  dataAtendimento: Date;
  numeroBinado: string;
  numeroAcesso: string;
}

export default mongoose.model<ITabulacao>(
  'Tabulacao',
  new Schema(
    {
      nomeCliente: {
        type: String,
        required: true,
      },

      protocolo: {
        type: String,
        required: true,
        unique: true,
      },

      dataAtendimento: {
        type: Date,
        required: true,
      },

      numeroBinado: {
        type: String,
        required: true,
      },

      numeroAcesso: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ),
);
