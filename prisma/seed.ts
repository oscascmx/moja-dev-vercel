import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

// Use the same password hashing function as your auth system
function hashPassword(password: string, salt: string): string {
  return crypto.createHash('sha256').update(salt + password).digest('hex');
}

async function main() {
  console.log('🌱 Starting seed...');

  // Get password salt from environment or use default
  const salt = process.env.AUTH_PASSWORD_SALT || 'static-salt-change-in-production';

  // Clear existing data (optional - comment out if you want to keep existing data)
  console.log('🧹 Cleaning up existing data...');
  await prisma.passwordResetToken.deleteMany();
  await prisma.user.deleteMany();


  // Seed Catalogs
  console.log('👤 Creating relationship catalog...');

  const relationship_cat = [

    {
      description: "Padre"
    },
    {
      description: "Madre"
    },
    {
      description: "Abuelo paterno"
    },
    {
      description: "Abuela paterna"
    },
    {
      description: "Abuelo materno"
    },
    {
      description: "Abuela materna"
    },
    {
      description: "Bisabuelo PP (padre de abuelo paterno)"
    }, {
      description: "Bisabuela PM (madre de abuelo paterno)"
    },
    {
      description: "Bisabuelo MP (padre de abuela paterna)"
    },
    {
      description: "Bisabuela MM (madre de abuela paterna)"
    },
    {
      description: "Bisabuelo (padre de abuelo materno)"
    },
    {
      description: "Bisabuela (madre de abuelo materno)"
    },
    {
      description: "Bisabuelo (padre de abuela materna)"
    },
    {
      description: "Bisabuela (madre de abuela materna)"
    },
    {
      description: "Tatarabuelo(a)"
    },
    {
      description: "Trastatarabuelo (a)"
    }
  ];


  const org_region_cat = [

    {
      description: "Croacia Central"
    },
    {
      description: "Dalmacia"
    },
    {
      description: "Eslavonia"
    },
    {
      description: "Istria"
    },
    {
      description: "Otra"
    },
    {
      description: "No sé"
    }
  ];


  const decades_cat = [
    { description: "Después de 2000" },
    { description: "1990" },
    { description: "1980" },
    { description: "1970" },
    { description: "1960" },
    { description: "1950" },
    { description: "1940" },
    { description: "1930" },
    { description: "1920" },
    { description: "1910" },
    { description: "1900" },
    { description: "1890" },
    { description: "1880" },
    { description: "1870" },
    { description: "1860" },
    { description: "Antes de 1860" }
  ];

  const createRelations = await Promise.all(
    relationship_cat.map(async (reldata) => {
      const relcat = await prisma.relationship_cat.create({
        data: {
          description: reldata.description
        }
      })
    })
  );
  console.log(`✅ Created Relations`);

  const createRegionPop = await Promise.all(
    org_region_cat.map(async (data) => {
      const orgRegionCat = await prisma.org_region_cat.create({
        data: {
          description: data.description
        },
      });
      console.log(`✅ Created user`);
      return orgRegionCat;
    })
  );

  const createDecades = await Promise.all(
    org_pop_cat.map(async (data) => {
      const decadesCat = await prisma.decades_cat.create({
        data: {
          description: data.description
        },
      });
      console.log(`✅ Created user`);
      return decadesCat;
    })
  );



  // Seed Users
  console.log('👤 Creating users...');

  const users = [
    {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'admin123', // Will be hashed
      photoUrl: null,
    },
    {
      email: 'john@example.com',
      name: 'John Doe',
      password: 'password123', // Will be hashed
      photoUrl: null,
    },
    {
      email: 'jane@example.com',
      name: 'Jane Smith',
      password: 'password123', // Will be hashed
      photoUrl: null,
    },
  ];

  const createdUsers = await Promise.all(
    users.map(async (userData) => {
      const passwordHash = hashPassword(userData.password, salt);
      const user = await prisma.user.create({
        data: {
          email: userData.email.toLowerCase(),
          name: userData.name,
          passwordHash,
          photoUrl: userData.photoUrl,
        },
      });
      console.log(`✅ Created user: ${user.email}`);
      return user;
    })
  );

  // Seed Password Reset Tokens (optional - for testing)
  console.log('🔐 Creating password reset tokens...');

  if (createdUsers.length > 0) {
    const testToken = await prisma.passwordResetToken.create({
      data: {
        token: 'test-reset-token-12345',
        email: createdUsers[0].email,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
      },
    });
    console.log(`✅ Created reset token for: ${testToken.email}`);
  }

  console.log('✨ Seed completed successfully!');
  console.log('\n📋 Test credentials:');
  console.log('   Email: admin@example.com, Password: admin123');
  console.log('   Email: john@example.com, Password: password123');
  console.log('   Email: jane@example.com, Password: password123');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

