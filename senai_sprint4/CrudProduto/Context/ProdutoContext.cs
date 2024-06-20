using CrudProduto.Domain;
using Microsoft.EntityFrameworkCore;

namespace CrudProduto.Context
{
    public class ProdutoContext : DbContext
    {
        public DbSet<Produto> Produto { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=NOTE03-S21; initial catalog=Produto; TrustServerCertificate=true; user Id=sa; pwd=Senai@134;");
    }
}
