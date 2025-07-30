import React from 'react';
import {
  FileText,
  Download,
  CreditCard,
  CheckCircle,
  Users,
  Calendar
} from 'lucide-react';

const Admissions = () => {
  const admissionRequirements = {
    jce: [
      'Completed Primary School Certificate (PSLCE)',
      'Minimum of 6 credits in PSLCE',
      'Medical certificate of fitness',
      'Two passport-size photographs',
      'School transfer certificate (if applicable)'
    ],
    msce: [
      'Completed Junior Certificate of Education (JCE)',
      'Minimum of 6 credits in JCE including English and Mathematics',
      'Medical certificate of fitness',
      'Two passport-size photographs',
      'School transfer certificate (if applicable)'
    ]
  };

  const feeStructure = [
    {
      level: 'JCE (Forms 1-2)',
      tuition: 'MWK 135,000',
      total: 'MWK 135,000',
      period: 'Per Academic Year (ONE Term is MWK 45,000)'
    },
    {
      level: 'MSCE (Forms 3-4)',
      tuition: 'MWK 135,000',
      total: 'MWK 135,000',
      period: 'Per Academic Year (ONE Term is MWK 45,000)'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Obtain Application Form',
      description: 'Download the application form or collect it from our admissions office.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out all required information and gather necessary documents.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Submit Documents',
      description: 'Submit completed application with all required supporting documents.',
      icon: Users
    },
    {
      step: 4,
      title: 'Pay Application Fee',
      description: 'Pay the non-refundable application processing fee.',
      icon: CreditCard
    },
    {
      step: 5,
      title: 'Interview & Assessment',
      description: 'Attend the scheduled interview and academic assessment.',
      icon: Calendar
    },
    {
      step: 6,
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment instructions.',
      icon: CheckCircle
    }
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'January 15, 2025' },
    { event: 'Application Deadline', date: 'March 31, 2025' },
    { event: 'Interviews & Assessments', date: 'April 1-15, 2025' },
    { event: 'Admission Results', date: 'April 30, 2025' },
    { event: 'Fee Payment Deadline', date: 'May 31, 2025' },
    { event: 'Academic Year Begins', date: 'September 2, 2025' }
  ];

  return (
    <div className="max-w-4xl min-h-screen p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Admission Information</h1>

      {/* Download Application Forms */}
      <section className="mb-10">
        <h2 className="flex items-center mb-4 space-x-2 text-2xl font-semibold">
          <FileText />
          <span>Download Application Forms</span>
        </h2>

        <div className="space-y-6">
          {/* JCE Forms */}
          <div>
            <h3 className="mb-2 font-semibold">JCE Application Forms</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/forms/pdf/JCE_application-form.pdf"
                download="JCE_Application_Form.pdf"
                className="inline-flex items-center px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                <Download className="mr-2" />
                Download PDF
              </a>
              <a
                href="/forms/doc/JCE_application-form.doc"
                download="JCE_Application_Form.doc"
                className="inline-flex items-center px-4 py-2 text-white transition bg-green-600 rounded hover:bg-green-700"
              >
                <Download className="mr-2" />
                Download DOC
              </a>
            </div>
          </div>

          {/* MSCE Forms */}
          <div>
            <h3 className="mb-2 font-semibold">MSCE Application Forms</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/forms/pdf/MSCE_application-form.pdf"
                download="MSCE_Application_Form.pdf"
                className="inline-flex items-center px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                <Download className="mr-2" />
                Download PDF
              </a>
              <a
                href="/forms/doc/MSCE_application-form.doc"
                download="MSCE_Application_Form.doc"
                className="inline-flex items-center px-4 py-2 text-white transition bg-green-600 rounded hover:bg-green-700"
              >
                <Download className="mr-2" />
                Download DOC
              </a>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-600">
          You can download the forms in your preferred format or collect a physical copy from our admissions office.
        </p>
      </section>

      {/* Admission Requirements */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Admission Requirements</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold">JCE</h3>
            <ul className="space-y-1 list-disc list-inside">
              {admissionRequirements.jce.map((item, idx) => (
                <li key={`jce-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">MSCE</h3>
            <ul className="space-y-1 list-disc list-inside">
              {admissionRequirements.msce.map((item, idx) => (
                <li key={`msce-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Fee Structure</h2>
        <table className="w-full border border-gray-300 rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">Level</th>
              <th className="p-2 border border-gray-300">Tuition</th>
              <th className="p-2 border border-gray-300">Total</th>
              <th className="p-2 border border-gray-300">Period</th>
            </tr>
          </thead>
          <tbody>
            {feeStructure.map(({ level, tuition, total, period }, idx) => (
              <tr key={idx} className="text-center">
                <td className="p-2 border border-gray-300">{level}</td>
                <td className="p-2 border border-gray-300">{tuition}</td>
                <td className="p-2 border border-gray-300">{total}</td>
                <td className="p-2 border border-gray-300">{period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Application Process */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Application Process</h2>
        <ol className="space-y-4">
          {applicationProcess.map(({ step, title, description, icon: Icon }) => (
            <li key={step} className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold">{step}. {title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Important Dates */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Important Dates</h2>
        <ul className="space-y-1 list-disc list-inside">
          {importantDates.map(({ event, date }, idx) => (
            <li key={idx}>
              <span className="font-semibold">{event}:</span> {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
