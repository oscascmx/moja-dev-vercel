"use server";
import { createUser } from '@/lib/services/user.service'
import { redirect } from 'next/navigation'

export async function submitSignup(formData: FormData) {
  const email = (formData.get('email') as string);
  const name = (formData.get('name') as string);
  const paternal = (formData.get('paternal') as string);
  const maternal = (formData.get('maternal') as string);
  const day = Number(formData.get('day'));
  const month = Number(formData.get('month'));
  const year = Number(formData.get('year'));
  // TODO: Normalize to values, for localization

  const genderReceived = (formData.get('gender') as string) ?? "DESCONOCIDO";
  const gender = genderReceived.toLowerCase()
  const croataMember = (formData.get('member') as string) == 'true';
  const membershipNumber = (formData.get('membershipNumber') as string) ?? "NO NUMBER";
  const agreement = (formData.get('agreement') as string) == '1';
  console.log({ name, email });

  const birth = new Date(year, month, day);
  console.log(birth);

  const rel_name = (formData.get('relativeName') as string) ?? "";
  const rel_paternal = (formData.get('relativePaternal') as string) ?? "";
  const rel_maternal = (formData.get('relativeMaternal') as string) ?? "";
  const rel_day = Number(formData.get('rel_day'));
  const rel_month = Number(formData.get('rel_month'));
  const rel_year = Number(formData.get('rel_year'));
  const rel_birth = new Date(rel_year, rel_month, rel_day);
  // TODO: Normalize to values, for localization
  const relGenderReceived = (formData.get('rel_gender') as string) ?? "DESCONOCIDO";
  const relativeGender = relGenderReceived.toLowerCase()
  const relativeAlive = (formData.get('alive') as string) == 'true';
  const relativeOrigin = (formData.get('relativeOrigin') as string) ?? "DESCONOCIDO";
  const relativeRegion = (formData.get('relativeRegion') as string) ?? "06";
  const relativeRelationship = (formData.get('relativeRelationship') as string);
  const relativeDecade = (formData.get('relativeDecade') as string);
  const relativeCountry = (formData.get('relativeCountry') as string);

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