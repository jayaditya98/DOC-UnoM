
import type { BookSection, HistoryEvent, Faculty, CourseCategory } from './types';

export const BOOK_CONTENT: BookSection[] = [
  {
    title: 'About',
    content: [
      "The Board of Studies in Commerce was first established in 1926 and B.Com.(Pass) course was first instituted in March 1945. A full-fledged Commerce Department was established in 1952-53, M.Com. Degree course was introduced in the year 1976-77 and Ph.D. course was commenced in the year 1975-76.",
      "The Department specializes in International business and Finance, Development Banking, Marketing, Business Finance, Organizational Behaviour, International Business and Financial Markets. ESDC (Entrepreneurship-cum-Skill Development Centre) has been established by the Department of Higher Education, Government of Tamil Nadu in July 2012.",
      "Further, the Department has been accorded permission by the Department of Higher Education, Government of Tamil Nadu for the up-scaling of the department into a Centre for Excellence in the year 2012."
    ],
  },
  {
    title: 'Objective',
    content: [
      "To impart knowledge and skill in commerce and business related courses.",
      "To provide exposure to business decision making skills.",
      "To prepare high quality human resources for Teaching and Research.",
      "To develop positive attitudes and values so as to strengthen the personality traits among students."
    ],
  },
  {
    title: 'Mission',
    content: [
      "Our mission is to provide quality education and training in commerce and business related courses and to develop skilled, knowledgeable human resources who by their positive thinking and value based personality would provide effective leadership in teaching, research and careers in Commerce and business related fields."
    ],
  },
  {
    title: 'Vision',
    content: [
      "The vision of the Department of Commerce is to grow to assume an enviable position in the realm of higher education in the whole world."
    ],
  },
];

export const HISTORY_EVENTS: HistoryEvent[] = [
    { year: '1926', description: 'Board of Studies in Commerce was established.' },
    { year: '1945', description: 'B.Com.(Pass) course was first instituted.' },
    { year: '1952-53', description: 'A full-fledged Commerce Department was established.' },
    { year: '1975-76', description: 'Ph.D. course was commenced.' },
    { year: '1976-77', description: 'M.Com. Degree course was introduced.' },
    { year: '2012', description: 'ESDC (Entrepreneurship-cum-Skill Development Centre) was established.' },
    { year: '2012', description: 'Department up-scaled into a Centre for Excellence.' },
];

export const FACULTY_MEMBERS: Faculty[] = [
  {
    name: 'Dr. R. RANGARAJAN',
    title: 'Professor',
    qualifications: 'P.G.D.H.E., M.B.A., M. Com., M. Phil., Ph.D., D.Litt.',
    contact: { email: 'rangarajan@unom.ac.in', phone: '044-2539 9738' },
  },
  {
    name: 'Dr. R.SHANTHI',
    title: 'Professor and Head',
    qualifications: 'M.Com., Ph.D',
    contact: { email: 'shanthi@unom.ac.in' },
  },
  {
    name: 'Dr.S.YUVARAJ',
    title: 'Assistant Professor',
    qualifications: 'M.Com.,M.B.A.,Ph.D.,',
    contact: { email: 'yuvaraj@unom.ac.in', phone: '+91-44-25399833' },
  },
  {
    name: 'Dr. P.S. BUVANESWARI',
    title: 'Assistant Professor',
    qualifications: 'M.Com., M.Phil., M.B.A., P.G.D.I.B., Ph.D',
    contact: { email: 'buvaneshwari@unom.ac.in', phone: '044-25399856' },
  },
];

export const COURSES_OFFERED: CourseCategory[] = [
    {
        title: 'Post Graduate',
        courses: ['M.Com (International Business & Finance)', 'M.Com. Business Data Science (Self Supportive)']
    },
    {
        title: 'Doctor of Philosophy (Ph.D)',
        courses: ['Commerce']
    },
    {
        title: 'P.G Diploma Courses',
        courses: ['Banking and Finance', 'Internal Audit', 'Business Research Analytics', 'Digital Accounting & GST Filing']
    }
];

export const CONTACT_INFO = {
    address: 'Department of Commerce, University of Madras, Chepauk Campus, Chennai - 600 005',
    phone: '+91 44 2539 9486',
    email: 'doc_unom@in.com'
};
