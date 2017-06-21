import {Course} from "./Course";
import {Author} from "./Author";
import {User} from "./User";
import {Review} from "./Review";

export interface IOnlineCourses {
  getCourses(): Array<Course>
  getCourses(): Array<Course>
  getCoursesByTitle(): Array<Course>
  getCoursesByAuthor(): Array<Course>
  getCourseById(): Course
  filterCoursesByPrice(price: number): Array<Course>
  getAuthors(): Array<Author>
  getUsers(): Array<User>
  getReviews(): Array<Review>
}
