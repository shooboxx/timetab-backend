import { AppointmentService } from "./appointmentService";
const express = require('express');
const router = express.Router();

router.get('/test', async (req, res) => {
    try {
        AppointmentService.testDate()
        return res.status(200).json({success: true})
    }
    catch (e : any) {
        return res.status(200).json({"error": e.message})
    }

});

module.exports = router