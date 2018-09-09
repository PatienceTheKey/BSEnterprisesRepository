using System.Threading.Tasks;

namespace BSEnterprises.Persistence
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}