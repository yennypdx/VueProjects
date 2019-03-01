using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

[Table("person")]
public class Person
{
    [Column("personTabId")]
    [Key]
    public int PersonTabId { get; set; }

    [Column("firstName")]
    public string FirstName { get; set; }

    [Column("midInitial")]
    public char MidInitial { get; set; }

    [Column("lastName")]
    public string LastName { get; set; }
}