import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('カテゴリ取得エラー:', error);
    return NextResponse.json(
      { message: 'カテゴリの取得に失敗しました' },
      { status: 500 }
    );
  }
}
