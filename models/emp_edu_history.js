const { connector } = require('./databaseUtil');
const Education = {
    education_type: { type: String, required: true },
    education_name: { type: String, required: true },
    specialization: { type: String, required: true },
    period: { type: String, required: true },
    institution_name: { type: String, required: true },
    university: { type: String, required: true },
    passing_division: { type: String, required: true },
    from_year: { type: String, required: true },
    upto_year: { type: String, required: true },
    registration_number: { type: String, required: true },
    aggregate_pct: { type: String, required: true },
    final_year_pct: { type: String, required: true },
    number_of_attempts: { type: Number, required: true },
    rank: { type: Number, required: true },
    passing_year: { type: String, required: true },
}
const schema = {
    ssc: { type: Education, required: true },
    hsc: { type: Education, required: true },
    dip: { type: Education },
    iti: { type: Education },
    deg: { type: Education },
    pgd: { type: Education },
    phd: { type: Education },
    pdoc: { type: Education }
}
const EmploymentEducationHistorySchema = new connector.model('emp-edu-history', schema);
