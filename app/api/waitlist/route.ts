import { NextRequest } from 'next/server';
import { Client } from '@hubspot/api-client';

const token = process.env.HUBSPOT_CRM_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const properties = {
      email: email,
    };

    const SimplePublicObjectInput = { properties };

    const hubspotClient = new Client({ accessToken: token });
    await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);

    return new Response('Email added successfully.');
  } catch {
    return Response.error;
  }
}
