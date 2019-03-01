using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

[Table("student")]
public class Student
{
    [Column("studentTabId")]
    [Key]
    public int StudentTabId { get; set; }

    [Column("studentIDNum")]
    public int StudentIDNum { get; set; }

    [Column("email")]
    public string Email { get; set; }

    public Person PersonTabId { get; set; }
}

