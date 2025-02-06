import prisma from "@/lib/prisma";

export async function getTotalprospect(): Promise<string> {
  const data = await prisma.$queryRaw<
    { Prospect: string }[]
  >`select count(e.*) - count(i.*) AS "Prospect" from  employee e
    left join insured_coverage i ON e.id = i.employee_id`;
  if (data.length > 0) return data[0].Prospect;
  else return "0";
}
