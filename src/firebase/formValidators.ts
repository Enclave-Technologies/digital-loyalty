import { z } from "zod";

const registerSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }).trim(),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })
            .trim(),
        confirm_password: z.string().trim(),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirm_password) {
            ctx.addIssue({
                path: ["confirm_password"],
                message: "Passwords do not match",
                code: "custom",
            });
        }
    });

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .trim(),
});

export { registerSchema, loginSchema };
