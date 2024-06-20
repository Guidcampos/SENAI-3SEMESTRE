using CrudProduto.Domain;

namespace CrudProduto.Interface
{
    public interface IProduto
    {
            void Cadastrar(Produto produto);

            void Deletar(Guid id);

            List<Produto> Listar();

            Produto BuscarPorId(Guid id);

            void Atualizar(Guid id, Produto produto);
        
    }
}
