export default async function sendEmail({
    to,
    subject,
    html,
    from = 'onboarding@resend.dev'
}: any) {
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY || 're_D5Jpq2t5_EHpXTCvUXX5AvBekdKxWqzKT'}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            to,
            subject,
            html
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Email sending failed: ${JSON.stringify(error)}`);
    }

    return response.json();
}