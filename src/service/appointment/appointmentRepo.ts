import { CreateAppointment } from "@timetab/service/appointment/appointmentTypes"

const findAppointmentDetails = (emailAddress: string, phoneContact : string, storeId: number) => {
    
}
const findAppointmentDetailsById = (appointmentId : number) => {
    
}

const createAppointment = (bookingRequest: CreateAppointment) => {
    
    return ''
}

const updateAppointmentStatus = (appointmentId : number, status : string) => {

}


export const AppointmentRepo = {
    findAppointmentDetails,
    findAppointmentDetailsById,
    updateAppointmentStatus,
}