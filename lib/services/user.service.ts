import { prisma } from '@/lib/db/prisma'

// funcion para crear el usuario
export interface StoredUser {
  id: string;
  email: string;
  name: string;
  paternal_surname: string;
  maternal_surname: string | null;
  birth: Date;
  gender: string;
  croataMember: boolean;
  membershipNumber: string | null;
  passwordHash: string;
  photoUrl?: string | null;
  signedAgreement: boolean;
  idLstCrRelative: string | null;
}

export async function createUser(
    email: string, 
    name: string, 
    paternal_surname: string,
    maternal_surname: string,
    birth: Date,
    gender: string,
    croataMember: boolean,
    membershipNumber: string,
    passwordHash: string,
    signedAgreement: boolean,
    relativeName: string,
    relativePaternal: string,
    relativeMaternal: string,
    relativeBirth: Date,
    relativeGender: string,
    relativeAlive: boolean,
    relativeOrigin: string,
    relativeRegion: string,
    relativeRelationship: string,
    relativeDecade: string,
    relativeCountry: string 
    ): Promise<StoredUser> {
  const normalized = email.toLowerCase();

  const user = await prisma.user.create({
    data: {
      email: normalized,
      name,
      paternalSurname: paternal_surname,
      maternalSurename: maternal_surname,
      birth,
      gender,
      croataMember,
      membershipNumber,
      passwordHash,
      signedAgreement,
      idLstCrRelative: "NADIE"
    },
  });

  const relative = await prisma.lstCrRelative.create(
    {
      data: {
        idUser: user.id,
        name: relativeName,
        paternalSurname: relativePaternal,
        maternalSurename: relativeMaternal,
        birth: relativeBirth,
        gender: relativeGender,
        alive: relativeAlive,
        orgPopulation: relativeOrigin,
        idRegion: relativeRegion,
        idRelationShip: relativeRelationship,
        idMigrationDecade: relativeDecade,
        migratedCountry: relativeCountry
      }
    }
  );

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    paternal_surname: user.paternalSurname,
    maternal_surname: user.maternalSurename,
    birth: user.birth,
    gender: user.gender,
    croataMember: user.croataMember,
    membershipNumber: user.membershipNumber,
    passwordHash: user.passwordHash,
    signedAgreement: user.signedAgreement,
    photoUrl: user.photoUrl,
    idLstCrRelative: null, // relative.id,
  };
}

