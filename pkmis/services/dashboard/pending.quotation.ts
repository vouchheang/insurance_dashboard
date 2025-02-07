import prisma from "@/lib/prisma";

export async function getPendingQuotation(): Promise<string> {
  const data = await prisma.$queryRaw<{ count: string }[]>`SELECT
    count(*)
FROM
    quotation q
WHERE
    q.quotation_status = 'Pending';`;
  if (data.length > 0) return data[0].count;
  else return "0";
}
