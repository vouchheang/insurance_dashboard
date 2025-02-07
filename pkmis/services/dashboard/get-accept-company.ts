import prisma from "@/lib/prisma";

export async function getTotalcompany(): Promise<string> {
  const data = await prisma.$queryRaw<{ company: string }[]>`
    select
    count(*) as company 
from
    company c
    join insurance_policy i ON i.company_id = c.id
    join quotation q ON q.id = i.quotation_id
where
    q.quotation_status != 'Accepted';`;
  if (data.length > 0) return data[0].company;
  
  else return "0";
}
