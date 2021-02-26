import { url } from "../config/db.config.js";

import mongoose from "mongoose";
import TutorialModel from "./tutorial.model.js";

const db = {};
db.mongoose = mongoose;
db.url = url;
db.tutorials = TutorialModel(mongoose);
console.log(db.url);
console.log(db.tutorials);
export default db;