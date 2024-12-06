// netlify/functions/send-email.js
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: "Method Not Allowed" }),
		};
	}

	const { to, subject, message } = JSON.parse(event.body);

	// Create Nodemailer transport
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		// Send email
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to,
			subject,
			text: message,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({
				success: true,
				message: "Email sent successfully!",
			}),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ success: false, error: error.message }),
		};
	}
};
