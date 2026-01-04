import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 12);

  const user = await prisma.user.upsert({
    where: { email: 'tylerwsanches@gmail.com' },
    update: { password: hashedPassword },
    create: {
      email: 'tylerwsanches@gmail.com',
      name: 'Tyler Sanches',
      password: hashedPassword,
      role: 'ADMIN',
      subscription: {
        create: {
          plan: 'PRO',
          status: 'ACTIVE',
        },
      },
    },
  });

  console.log('User created/updated:', user.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
