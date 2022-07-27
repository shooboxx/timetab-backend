import { CreateAppointment } from "@timetab/service/appointment/appointmentTypes"
import { AppointmentRepo } from "./appointmentRepo"
import { AppointmentStatus } from "./appointmentConst"
import { PaymentService } from "../appointment/payment/paymentService"
import { ClientService } from "./client/clientService"
import  contextTime  from "./../../../util/contextTime.js"


const getAppointmentDetails = async (emailAddress: string, phoneContact : string, storeId: number) => {
    return await AppointmentRepo.findAppointmentDetails(emailAddress.trim().toLowerCase(), phoneContact, storeId)
}
const testDate = () => {
    const yesterday = new Date(2021, 6, 27, 10, 30)
    console.log(contextTime(yesterday))
    return
}

const _getAppointmentDetailsById = async (appointmentId : number) => {
    return await AppointmentRepo.findAppointmentDetailsById(appointmentId)
}

const createAppointment = async (bookingRequest: CreateAppointment) => {
    //TODO: Get available timeslots
    const client = await ClientService.createClientDetails(bookingRequest.client)
    //TODO: Add client details to bookingRequest


    return ''

}
const cancelAppointment = async (appointmentId: number) => {
    await AppointmentRepo.updateAppointmentStatus(appointmentId, AppointmentStatus.Cancelled )
}

const rescheduleAppointment = async (appointmentId : number, bookingRequest : CreateAppointment) => {
    const oldBooking = await _getAppointmentDetailsById(appointmentId)
    const newBooking = await createAppointment(bookingRequest)
    if (newBooking['id']) {
        await AppointmentRepo.updateAppointmentStatus(appointmentId, AppointmentStatus.Rescheduled)
        
    }
    if (newBooking['id'] && oldBooking['payment_transferable']) {
        await PaymentService.transferPayment(appointmentId, newBooking['id'])
    }
    return newBooking

}

const updateAppointmentStatus = async (appointmentId : number, status : string) => {
    return await AppointmentRepo.updateAppointmentStatus(appointmentId, status)
}
export const AppointmentService = {
    getAppointmentDetails,
    testDate
}