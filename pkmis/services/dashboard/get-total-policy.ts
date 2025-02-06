import prisma from "@/lib/prisma";

export async function getTotalPolicy(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`select count(id) from insurance_policy`;
  if (data.length > 0) return data[0].count;
  else return "0";
}
