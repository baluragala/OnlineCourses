import {CourseType} from "./CourseType.enum";
export interface Course {
  id: number;
  title: string;
  description: string;
  summary: string;
  feature: string;
  type: CourseType;
  logo?: string;
  price: number;
  authorId: number;
}
