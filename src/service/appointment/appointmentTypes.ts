
import {CreateUser} from '@timetab/service/users/userTypes'

export interface CreateAppointment {
    store_id: number;
    client: CreateUser;
    reservation_slots: number;
    start_date: Date;
    end_date: Date;
    is_deposit_required: boolean;
    booking_details: string;
    is_payment_transferable: boolean;
}