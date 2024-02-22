import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  pin: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
});

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    address: {
      type: addressSchema,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A", "-A", "B", "-B", "AB", "-AB", "O", "-O"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
