import prisma from "@/lib/prisma";

export async function getTotalamountPremium() {
  const data = await prisma.$queryRaw<{ amount: string | null }[]>`
  select sum(proposed_premium) AS amount from quotation ;

  `;

  if (data.length > 0) {
    return data[0].amount ? data[0].amount : "0";
  } else {
    return "0";
  }
}
