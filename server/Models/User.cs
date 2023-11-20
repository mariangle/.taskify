﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; } 
        public string Username { get; set; } = string.Empty;
        public string? Image { get; set; }
        public string Name { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public List<Task>? Tasks { get; set; }
        [NotMapped]
        public List<string>? Tags { get; set; }
    }
}
