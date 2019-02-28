using System.Collections.Generic;

namespace Database
{
    public static class InMemoryPersons
    {
        public static List<Person> persons = new List<Person> {
            new Person {
                Id = 0,
                FirstName = "Roger",
                MidInitial = 'A',
                LastName = "Smith"
            },
            new Person {
                Id = 1,
                FirstName = "Mark",
                MidInitial = 'J',
                LastName = "Hamilton"
            },
            new Person {
                Id = 2,
                FirstName = "Brandon",
                MidInitial = 'H',
                LastName = "Cartwright"
            },
            new Person {
                Id = 3,
                FirstName = "Glenn",
                MidInitial = 'M',
                LastName = "Sullivan"
            },
            new Person {
                Id = 4,
                FirstName = "Catherine",
                MidInitial = 'S',
                LastName = "Peterson"
            }
        };
    }
}