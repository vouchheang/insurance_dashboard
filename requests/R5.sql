1.
SELECT
    COUNT(i.policy_name) AS total_policy,
    SUM(q.proposed_premium) AS total_propose_premium
FROM
    quotation q
    JOIN insurance_policy i ON i.quotation_id = q.id;

2.
SELECT
    COUNT(i.employee_id) AS "Total insured",
    SUM(b.coverage_amount) AS "Sum-insured"
FROM
    insured_coverage i
    JOIN insurance_policy p ON i.insurance_policy_id = p.id
    JOIN insurance_policy_benefit b ON b.insurance_policy_id = p.id 

3.1    
SELECT
    count(e.*) - count(i.*) AS "Prospect"
FROM
    employee e
    LEFT JOIN insured_coverage i ON e.id = i.employee_id

3.2
SELECT
    count(*)
FROM
    company c
    JOIN insurance_policy i ON i.company_id = c.id
    JOIN quotation q ON q.id = i.quotation_id
WHERE
    q.quotation_status = 'Accepted';