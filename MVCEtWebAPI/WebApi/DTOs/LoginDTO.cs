using System.ComponentModel.DataAnnotations;

namespace WebApi.DTOs
{
    public class LoginDTO
    {
        [Required]
        public string Username { get; set; } = "";
        [Required]
        public string Password { get; set; } = "";
    }

   
}
