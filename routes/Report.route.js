import express from "express";
import {
  getAllReportsByUserId,
  getFullReportByPRReportId
} from "../controllers/Report.controller.js";

const router = express.Router();

router.get("/AllReports",getAllReportsByUserId);
router.get("/FullReport/:id",getFullReportByPRReportId);

export default router;