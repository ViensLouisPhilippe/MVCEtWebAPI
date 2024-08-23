using System.ComponentModel.DataAnnotations;

namespace WebApi.DTOs
{
    public class LoginSuccessDTO
    {
        [Required]
        public string Token { get; set; } = "";

    }

}
