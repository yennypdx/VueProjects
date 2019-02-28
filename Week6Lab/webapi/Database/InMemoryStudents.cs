using System.Collections.Generic;

namespace Database
{
    public static class InMemoryStudents
    {
        public static List<Student> students = new List<Student> {
            new Student {
                Id = 0,
                StudentId = 95123654,
                Email = "roger.smith@oit.edu"
            },
            new Student {
                Id = 1,
                StudentId = 95131658,
                Email = "mark.hamilton@oit.edu"
            },
            new Student {
                Id = 2,
                StudentId = 95178549,
                Email = "brandon.cartwright@oit.edu"
            },
            new Student {
                Id = 3,
                StudentId = 95145625,
                Email = "glen.sullivan@oit.edu"
            },
            new Student {
                Id = 4,
                StudentId = 95133652,
                Email = "cat.peterson@oit.edu"
            }
        };
    }
}