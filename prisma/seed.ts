import bcrypt from "bcrypt";
import prisma from "@/db/prisma";
import { User } from "@prisma/client";

async function main() {
  await prisma.user.deleteMany({});

  const users: User[] = [
    {
      name: "Admin",
      email: "admin@ezcode.com",
      password: "123456",
      role: "ADMIN",
      id: 0,
      avatar: null,
      createdAt: new Date(),
    },
    {
      name: "user+1",
      email: "user+1@ezcode.com",
      password: "123456",
      role: "USER",
      id: 0,
      avatar: null,
      createdAt: new Date(),
    },
  ];
  const saltRounds = 10;

  for (const user of users) {
    user["password"] = await bcrypt.hash(user.password, saltRounds);
  }

  await prisma.user.createMany({
    data: users,
  });
}

main()
  .then(() => {
    console.log("Run seed successfully!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
