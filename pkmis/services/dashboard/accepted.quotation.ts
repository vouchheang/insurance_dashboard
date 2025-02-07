import prisma from "@/lib/prisma";

export async function getTotalaccepted(): Promise<string> {
  const data = await prisma.$queryRaw<
    { accepted: string }[]
  >`select count(*) AS accepted from quotation where quotation_status = 'Accepted'`;
  if (data.length > 0) return data[0].accepted;
  else return "0";
}
