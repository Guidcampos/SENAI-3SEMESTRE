using CrudProduto.Context;
using CrudProduto.Domain;
using CrudProduto.Interface;

namespace CrudProduto.Repositorie
{
    public class ProdutoRepository : IProduto
    {
        public ProdutoContext ctx = new ProdutoContext();


        public void Atualizar(Guid id, Produto produto)
        {
            Produto produtoBuscado = ctx.Produto.Find(id);
            if (produtoBuscado != null)
            {
                produtoBuscado.Nome = produto.Nome;
                ctx.Update(produtoBuscado);
                ctx.SaveChanges();
            }
           
        }

        public Produto BuscarPorId(Guid id)
        {
            return ctx.Produto.FirstOrDefault(p => p.Id == id);
        }

        public void Cadastrar(Produto produto)
        {
            produto.Id = Guid.NewGuid();
            ctx.Produto.Add(produto);
            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            var produto = BuscarPorId(id);
            if (produto != null)
            {
                ctx.Produto.Remove(produto);
            }
            ctx.SaveChanges();
        }

        public List<Produto> Listar()
        {
            return ctx.Produto.ToList();
        }
    
    }
}
