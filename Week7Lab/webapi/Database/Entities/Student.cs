using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

[Table("student")]
public class Student
{
    [Column("studenttabid")]
    [Key]
    public int StudentTabId { get; set; }

    [Column("studentidnum")]
    public int StudentIDNum { get; set; }

    [Column("email")]
    public string Email { get; set; }

    [Column("persontabid")]
    public int PersonTabId { get; set; }
    public Person Person { get; set; }
}

