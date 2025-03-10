"use server";

import { neon } from "@neondatabase/serverless";

const database = process.env.DATABASE_URL;

export const createTable = async () => {
    if (!database) return console.error("Database not found");

    const sql = neon(database);
    await sql(`
        CREATE TABLE IF NOT EXISTS mails(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            message VARCHAR(255)
        )
    `);
};

export const sendMail = async (formData: FormData) => {
    if (!database) return console.error("Database not found");

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const sql = neon(database);
    await sql(
        `INSERT INTO mails(name, email, message) VALUES ('${name}', '${email}', '${message}')`
    );
};
