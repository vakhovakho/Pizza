import ContactDetails from "./ContactDetails";

export interface User {
    id: number | null,
    accessToken: string | null,
    guestToken: string | null,
    contactDetails: ContactDetails
}