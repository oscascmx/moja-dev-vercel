import { NextRequest, NextResponse } from 'next/server';
/* 
import { getProfile, updateProfile } from '@/lib/services/profile.service';
import {createUser} from '@/lib/services/user.service';

export async function GET() {
  const result = await getProfile();
  
  if (!result.ok) {
    return NextResponse.json(result, { status: 401 });
  }
  
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await updateProfile(body);
    
    if (!result.ok) {
      return NextResponse.json(result, { status: result.error?.includes('Unauthorized') ? 401 : 400 });
    }
    
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
  */