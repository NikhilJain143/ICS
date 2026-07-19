import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, dealershipName, brand, location, vehicleCount, message } = body;

    if (!name || !phone || !dealershipName) {
      return NextResponse.json(
        { success: false, error: 'Name, phone number, and dealership name are required.' },
        { status: 400 }
      );
    }

    // Process lead payload (log & store lead payload)
    console.log('[ICE CLEANING LEAD RECEIVED]', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      dealershipName,
      brand,
      location,
      vehicleCount,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'On-Site Demo request submitted successfully! Our Dealership Manager will reach out within 2 hours.',
      leadId: `ICE-LEAD-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error('Error processing demo lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit demo request. Please contact us directly.' },
      { status: 500 }
    );
  }
}
