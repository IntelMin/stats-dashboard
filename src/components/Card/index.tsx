import { Link } from "react-router-dom";


const Card = ( {market}) => {
  const { assetSymbol, name, liquidity } = market;
  return (
    <div className="card">
      <div className="card-body">
        <label>Id</label>
        <span>{market.id}</span>
        <label>Market Name</label>
        <span>{name}</span>
        <label>assetSymbol</label>
        <span>{assetSymbol}</span>
        <label>Liquidity</label>
        <span>{liquidity}</span>
      </div>
      <div className="card-footer">
        <Link to={`/markets/${market.id}`} >
          Details
        </Link>
      </div>
    </div>
  )
}


export default Card;
