using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Domain.Specification
{
    public interface ISpecification<T>
    {
        #region Expression for getting by some criteria
        Expression<Func<T, bool>> Criteria { get; }
        #endregion

        #region List of include expressions
        List<Expression<Func<T, object>>> Includes { get; }
        #endregion

        #region Ordering
        Expression<Func<T, object>> OrderBy { get; }

        Expression<Func<T, object>> OrderByDescending { get; }
        #endregion

    }
}