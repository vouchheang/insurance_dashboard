import prisma from "@/lib/prisma";

export async function getTotalSumInsured() {
  const data = await prisma.$queryRaw<{ sum_insured: string | null }[]>`
    select sum(ben.coverage_amount) as sum_insured
    from insured_coverage cov 
    join insurance_policy pol on cov.insurance_policy_id = pol.id
    join insurance_policy_benefit ben on pol.id = ben.insurance_policy_id
    
  `;

  if (data.length > 0) {
    return data[0].sum_insured ? data[0].sum_insured : "0";
  } else {
    return "0";
  }
}
