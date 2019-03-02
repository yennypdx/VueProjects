using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

[Table("person")]
public class Person
{
    [Column("persontabid")]
    [Key]
    public int PersonTabId { get; set; }

    [Column("firstname")]
    public string FirstName { get; set; }

    [Column("midinitial")]
    public char MidInitial { get; set; }

    [Column("lastname")]
    public string LastName { get; set; }
}