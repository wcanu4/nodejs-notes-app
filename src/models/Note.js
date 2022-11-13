import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    nombre: {
      type: String,
      required: true,
    },

    apellido: {
      type: String,
      required: true,
    },

    tiempo: {
      type: Number,
      required: true,
    },

    sueldo: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
