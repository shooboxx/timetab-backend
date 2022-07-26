import { CreateAppointment } from "@timetab/service/appointment/appointmentTypes"
import { AppointmentRepo } from "@timetab/service/appointment/appointmentRepo"
import { AppointmentStatus } from "@timetab/service/appointment/appointmentConst"
import { PaymentService } from "@timetab/service/appointment/payment/paymentService"
import { ClientService } from "./client/clientService"

const getAppointmentDetails = async (emailAddress: string, phoneContact : string, storeId: number) => {
    return await AppointmentRepo.findAppointmentDetails(emailAddress.trim().toLowerCase(), phoneContact, storeId)
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
}