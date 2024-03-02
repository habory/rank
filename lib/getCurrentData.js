import { auth } from "@/app/auth";
import prisma from '@/prisma/prisma'

export async function getCurrentUser() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    })

    if (!currentUser) {
      return null
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null
  }
}

export async function getUserId() {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    //사용자 아이디 없음
  }

  return userId;
};
