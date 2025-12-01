"use server";
import {createUser} from '@/lib/services/user.service'
import { redirect } from 'next/navigation'

export async function submitSignup(formData) {
  const email = formData.get('email');
  const name = formData.get('name');   
  const paternal = formData.get('paternal');
  const maternal = formData.get('maternal');
  const day = formData.get('day');
  const month = formData.get('month');
  const year = formData.get('year');
  // TODO: Normalize to values, for localization
  const genderReceived = formData.get('gender') ?? "DESCONOCIDO";
  const gender = genderReceived.toLowerCase()

  const croataMember = formData.get('member') ?? false;
  const membershipNumber = formData.get('membershipNumber');
  const agreement = formData.get('agreement') ?? false;
  console.log({ name, email });

  const birth = new Date(year, month, day);
  console.log(birth);

  const rel_name = formData.get('relativeName');   
  const rel_paternal = formData.get('relativePaternal');
  const rel_maternal = formData.get('relativeMaternal');
  const rel_day = formData.get('rel_day');
  const rel_month = formData.get('rel_month');
  const rel_year = formData.get('rel_year');
  const rel_birth = new Date(rel_year, rel_month, rel_day);
  // TODO: Normalize to values, for localization
  const relGenderReceived = formData.get('rel_gender') ?? "DESCONOCIDO";
  const relativeGender = relGenderReceived.toLowerCase()
  const relativeAlive = formData.get('alive') ?? false;
  const relativeOrigin = formData.get('relativeOrigin') ?? "DESCONOCIDO";
  const relativeRegion = formData.get('relativeRegion') ?? "6";
  const relativeRelationship = formData.get('relativeRelationship');
  const relativeDecade = formData.get('relativeDecade');
  const relativeCountry = formData.get('relativeCountry');

  // TODO: Validation - should happen both client/server side!

  // TODO: Environment variable?
  const hash = "123456";
  const result = await createUser(email, name,
    paternal, maternal, birth, gender, croataMember,
    membershipNumber, 
    hash,
    agreement,
    rel_name, rel_paternal, rel_maternal, rel_birth, relativeGender, 
    relativeAlive,
    relativeOrigin, relativeRegion, relativeRelationship,
    relativeDecade, relativeCountry
  );

  redirect('/auth/thank-you?name=' + name) // Navigate to the profile page - should be to thank you
}