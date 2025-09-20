
export interface BookSection {
  title: string;
  content: string[];
}

export interface HistoryEvent {
  year: string;
  description: string;
}

export interface Faculty {
  name: string;
  title: string;
  qualifications: string;
  contact: {
    email?: string;
    phone?: string;
  };
}

export interface CourseCategory {
    title: string;
    courses: string[];
}
