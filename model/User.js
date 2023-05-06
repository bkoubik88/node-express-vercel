import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    asn: {
      type: String,
    },
    city: {
      type: String,
    },
    continent_code: {
      type: String,
    },
    country: {
      type: String,
    },
    country_area: {
      type: Number,
    },
    country_calling_code: {
      type: String,
    },
    country_capital: {
      type: String,
    },
    country_code: {
      type: String,
    },
    country_code_iso3: {
      type: String,
    },
    country_name: {
      type: String,
    },
    country_population: {
      type: Number,
    },
    country_tld: {
      type: String,
    },
    currency: {
      type: String,
    },
    currency_name: {
      type: String,
    },

    in_eu: {
      type: Boolean,
    },
    ip: {
      type: String,
    },
    languages: {
      type: String,
    },

    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    network: {
      type: String,
    },

    org: {
      type: String,
    },
    postal: {
      type: Number,
    },
    region: {
      type: String,
    },

    region_code: {
      type: String,
    },
    timezone: {
      type: String,
    },
    utc_offset: {
      type: String,
    },
    version: {
      type: String,
    },
    browser: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
