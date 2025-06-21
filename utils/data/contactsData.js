export const contactsData = {
  email: 'dhaningeorge6@gmail.com',
  phone: '+91 9500678712',
  address: 'Chennai, Tamil Nadu, India',
  behance: 'https://behance.net/dhaningeorge',
  instagram: 'https://instagram.com/dhanin.designs',
  dribbble: 'https://dribbble.com/dhaningeorge',
  linkedIn: 'https://www.linkedin.com/in/dhanin-george',
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Try to send Telegram message if credentials are present
    let telegramSuccess = false;
    if (token && chat_id) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, message);
    }

    // Always try to send email
    const emailSuccess = await sendEmail(payload, message);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message and email sent successfully!',
        telegram: telegramSuccess
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email.',
      telegram: telegramSuccess
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
}