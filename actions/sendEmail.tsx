"use server"

import { sendEmailVerification } from "@/lib/mail";

export type SendEmailResponse = {
    success: boolean
    error?: string
}

export async function sendEmail(email: string): Promise<SendEmailResponse> {
    if (!email) {
        return {
            success: false,
            error: "Email requerido",
        }
    }

    try {
        await sendEmailVerification(email)

        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            error: "No se pudo enviar el correo",
        }
    }
}
