import prisma from "@/lib/prisma";

export async function getTotalnotpartner(): Promise<string> {
  const data = await prisma.$queryRaw<{ total_hf_partner: string }[]>`
select count(*) AS total_hf_partner
from health_facility
where is_partner_hf = 'false';`;
  if (data.length > 0) return data[0].total_hf_partner;
  else return "0";
}
