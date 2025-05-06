import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Extract form data
    const { name, email, subject, message } = body;
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Placeholder logic - log the data
    console.log('Contact form submission received:');
    console.log({ name, email, subject, message });
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In a real implementation, you would:
    // 1. Send an email (using Nodemailer, SendGrid, Resend, etc.)
    // 2. Store the submission in a database
    // 3. Trigger notifications to admins
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We\'ll get back to you soon!',
    });
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
} 