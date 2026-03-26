import History from "../models/History.model.js";
import PRReport from "../models/PRReport.model.js"

export const getFullReportByPRReportId = async (req, res) => {
  try {
    const { PRReportId } = req.params;
    const UserID = req.auth.userId;

    const report = await PRReport.findOne({ _id: PRReportId, UserID })
      .populate("PageReports")

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "PR Report not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getAllReportsByUserId = async (req, res) => {
  try {
    const UserID = req.user.id;

    const history = await History.findOne({ UserID })
    
    if (!history) {
      return res.status(404).json({
        success: false,
        message: "No history found for this user",
      });
    }

    return res.status(200).json({
      success: true,
      data: history.PRReports || [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};